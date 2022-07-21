import TweetBox from '../TweetBox/TweetBox';
import Tweets from '../Tweets/Tweets';
import { TopTIcon } from '../../icons/twitter';

export default function ContainerPage() {
  return (
    <>
      <header className='sticky-top border-primary-container_border_color flex items-center justify-between border-b bg-black p-4'>
        <span className='text-xl font-bold text-white'>Home</span>
        <div className='duration-2 flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-gray-700 hover:bg-opacity-70'>
          <a title='Top Tweets'>
            <TopTIcon />
          </a>
        </div>
      </header>
      <div className='border-primary-container_border_color flex space-x-4 border-b px-5 py-2'>
        {/* <img
          className='mt-1 h-11 w-11 rounded-full'
          src='https://pbs.twimg.com/profile_images/1439646648410464258/C52zZ4ff_400x400.jpg'
        /> */}

        <TweetBox />
      </div>
      <div>
        <Tweets />
      </div>
    </>
  );
}
