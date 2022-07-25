import { useToast } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

import { Tweet } from '@/types/Tweet';

const style = {
  wrapper: ` text-slate-50  flex p-3 border-b border-[#38444d]`,
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

export default function Tweets() {
  const testTwit: Tweet[] = [
    {
      title: 'testtitle',
      body: 'bodiyaaaaaaaaaaaaaaaaaa',
      createAt: 'createAt',
      image: '',
      likeCount: '20',
    },
  ];

  const toast = useToast();
  const commingSoon = async () => {
    toast({
      title: 'Comming soon',
      status: 'info',
      duration: 1000,
      isClosable: true,
    });
  };

  const test: Tweet = {
    title: 'testtitle',
    body: 'bodiyaaaaaaaaaaaaaaaaaa',
    createAt: 'createAt',
    image: '',
    likeCount: '20',
    user: {
      name: 'username',
      image:
        'https://lh3.googleusercontent.com/QyKXSK9dIsgw8MMDk9Mf4g6j8bV1dQ2RtmTPo8qjGDQXQUsuRqworV2vKKkSunjn21EaLdeaY0V6A7YN43T5xW6wahINlH3zm-10QQs=w600',
      account: '0x',
      userId: '1kll',
    },
  };
  return (
    <div className={style.wrapper}>
      <div>
        {test.user && test.user.image && test.user.image !== '' && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={test.user.image}
            alt={test.user.name}
            className={`${style.profileImage} smallHex`}
          />
        )}
      </div>
      <div className={style.postMain}>
        <div>
          <span className={style.headerDetails}>
            <span className={style.name}>
              {test.user ? test.user.name : 'unnamed'}
            </span>
            <span className={style.handleAndTimeAgo}>
              @{test.user ? test.user.name : 'unnamed'}•{' '}
              {/* {format(new Date(timestamp).getTime())} */}
            </span>
          </span>
          <div className={style.tweet}>{test.body}</div>
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
            className={`${style.footerIcon} hover:bg-[#39243c] hover:text-[#f91c80]`}
          >
            <AiOutlineHeart />
          </div>
          <div
            className={`${style.footerIcon} hover:bg-[#1e364a] hover:text-[#1d9bf0]`}
            onClick={commingSoon}
          >
            <FiShare />
          </div>
        </div>
      </div>
    </div>
  );
}
