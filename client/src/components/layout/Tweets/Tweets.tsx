import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import { format } from 'timeago.js';

import { Tweet } from '@/types/Tweet';
const style = {
  wrapper: ` text-slate-50  p-3 border-b border-[#38444d]`,
  profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
  postMain: `flex-1 px-4`,
  headerDetails: `flex items-center`,
  name: `font-bold mr-1`,
  verified: `text-[0.8rem]`,
  handleAndTimeAgo: `text-[#8899a6] ml-1`,
  tweet: `my-2`,
  image: `rounded-3xl`,
  footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
  footerIcon: `rounded-full text-lg p-2`,
};
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { gql, GraphQLClient } from 'graphql-request';

import { useLayoutContext } from '@/context/LayoutContext';
import { useProviderContext } from '@/context/ProviderContext';

import { User } from '@/types/User';

export default function Tweets() {
  const { tweetContractByWallet, profileContractByProvider } =
    useProviderContext();

  const { sort } = useLayoutContext();
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const { active, library, account } = useWeb3React<Web3Provider>();
  const toast = useToast();
  const commingSoon = async () => {
    toast({
      title: 'Comming soon',
      status: 'info',
      duration: 1000,
      isClosable: true,
    });
  };
  const errorToast = async (error: any) => {
    toast({
      title: `${error}`,
      status: 'error',
      duration: 1000,
      isClosable: true,
    });
  };

  const grClient = new GraphQLClient(
    'https://api.studio.thegraph.com/query/31671/tweet/v0.1.11'
  );

  const getTweet = async () => {
    const values = {
      orderBy: sort === 'like' ? 'like' : 'createAt',
      orderDirection: 'desc',
    };

    let resultTweet: Tweet[] = [];
    try {
      const { tweets } = await grClient.request<{
        tweets: Tweet[];
      }>(
        gql`
          query GetTweet($orderBy: String!, $orderDirection: String!) {
            tweets(
              first: 100
              orderBy: $orderBy
              orderDirection: $orderDirection
            ) {
              id
              userAddress
              tokenId
              title
              body
              image
              like
              createAt
            }
          }
        `,
        values
      );
      resultTweet = tweets;
    } catch (error) {
      console.error('Graphql error:', JSON.stringify(error, undefined, 2));
    }

    resultTweet = await setProfile(resultTweet);
    console.log('resultTweet', resultTweet);
    setTweets(resultTweet);
  };

  const setProfile = async (tweets: Tweet[]) => {
    return await Promise.all(
      tweets.map(async (tweet) => {
        let userProfile: User = {
          name: 'unnamed',
          image: '/mm.png',
          account: '0x0000000000000000000000000000000000000000',
          userId: '0',
        };
        try {
          const profile = await profileContractByProvider.getUserProfile(
            tweet.userAddress
          );
          userProfile = {
            name: profile[1] === '' ? userProfile.name : profile[1],
            account: tweet.userAddress,
            image: profile[3] === '' ? userProfile.image : profile[3],
            userId: userProfile.userId,
          };
        } catch (error) {
          console.log('error', error);
        }
        return {
          ...tweet,
          user: userProfile,
        };
      })
    );
  };

  useEffect(() => {
    setInterval(getTweet, 15000);
  }, []);

  useEffect(() => {
    getTweet();
  }, [sort]);

  const likeTransaction = async (tokenId: number) => {
    if (!active) {
      errorToast('loginしてください');
      return;
    }

    try {
      const pooltx = await tweetContractByWallet.like(tokenId);
      await pooltx.wait();
      getTweet();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className={style.wrapper}>
      {tweets.map((tweet) => {
        return (
          <>
            <div className={style.postMain}>
              <div>
                {tweet.user && tweet.user.image && tweet.user.image !== '' && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={tweet.user.image}
                    alt={tweet.user.name}
                    className={`${style.profileImage} smallHex`}
                  />
                )}
              </div>
              <div>
                <span className={style.headerDetails}>
                  <span className={style.name}>
                    {tweet.user ? tweet.user.name : 'unnamed'}
                  </span>
                  <span className={style.handleAndTimeAgo}>
                    @{tweet.user ? tweet.userAddress : 'unnamed'}•{' '}
                    {format(new Date(+tweet.createAt * 1000).getTime())}
                  </span>
                </span>
                <div className={style.tweet}>{tweet.body}</div>
              </div>
              <div className={style.footer}>
                <div
                  className={`${style.footerIcon} hover:bg-[#1e364a] hover:text-[#1d9bf0]`}
                  onClick={commingSoon}
                >
                  <FaRegComment />
                </div>
                <div
                  className={`${style.footerIcon} hover:bg-[#1b393b] hover:text-[#03ba7c]`}
                  onClick={commingSoon}
                >
                  <FaRetweet />
                </div>
                <div
                  className={`${style.footerIcon} float hover:bg-[#39243c] hover:text-[#f91c80]`}
                  onClick={() => likeTransaction(+tweet.id)}
                >
                  <AiOutlineHeart />
                  {+tweet.like}
                </div>
                <div
                  className={`${style.footerIcon} hover:bg-[#1e364a] hover:text-[#1d9bf0]`}
                  onClick={commingSoon}
                >
                  <FiShare />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
