import {
  Like,
  Reply,
  Retweet,
  Share,
  VerifiedBadge,
} from '@/components/icons/twitter';

export default function Tweets() {
  return (
    <>
      <div className='border-primary-container_border_color flex space-x-3 border-b px-4 py-3'>
        <img
          src='https://pbs.twimg.com/profile_images/1439646648410464258/C52zZ4ff_400x400.jpg'
          className='roundedn-full h-11 w-11'
        />
        <div className='flex-1'>
          <div className='flex items-center space-x-2 text-sm'>
            <span className='ml-1 font-bold text-white'>
              AdemCan Certel <VerifiedBadge />
            </span>
            <span className='text-primary-gray_colors ml-2'>
              @CertelAdemcan
            </span>
            <div className='text-primary-gray_colors mx-2'>·</div>
            <span className='text-primary-gray_colors'>49m</span>
          </div>
          <div className='ml-1'>
            <p className='items-center overflow-hidden text-white'>
              Details are important; they are worth waiting for to be true.
              <img
                className='mt-3 rounded-xl'
                src='https://i2.milimaj.com/i/milliyet/75/0x410/5d6576d6554281214c076887.jpg'
              />
            </p>
            <ul className='mt-2 flex justify-between'>
              <li className='text-primary-gray_colors group flex items-center space-x-3 text-sm'>
                <div className='duration-2 group-hover:bg-primary-tweets_hover_colors1 flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors'>
                  <Reply />
                </div>
                <span>20</span>
              </li>

              <li className='text-primary-gray_colors group flex items-center space-x-3 text-sm'>
                <div className='duration-2 group-hover:bg-primary-tweets_hover_colors2 flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors'>
                  <Retweet />
                </div>
                <span>5</span>
              </li>

              <li className='text-primary-gray_colors group flex items-center space-x-3 text-sm'>
                <div className='duration-2 group-hover:bg-primary-tweets_hover_colors3 flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors'>
                  <Like />
                </div>
                <span>9,9K</span>
              </li>

              <li className='text-primary-gray_colors group flex items-center space-x-3 text-sm'>
                <div className='duration-2 group-hover:bg-primary-tweets_hover_colors1 flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors'>
                  <Share />
                </div>
                <span>2</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-primary-container_border_color flex space-x-3 border-b px-4 py-3'>
        <img
          src='https://pbs.twimg.com/profile_images/1439646648410464258/C52zZ4ff_400x400.jpg'
          className='h-11 w-11 rounded-full'
        />
        <div className='flex-1'>
          <div className='flex items-center space-x-2 text-sm'>
            <span className='ml-1 font-bold text-white'>
              AdemCan Certel <VerifiedBadge />
            </span>
            <span className='text-primary-gray_colors ml-2'>
              @CertelAdemcan
            </span>
            <div className='text-primary-gray_colors mx-2'>·</div>
            <span className='text-primary-gray_colors'>1h</span>
          </div>
          <div className='ml-1'>
            <p className='items-center overflow-hidden text-white'>
              <span className='text-primary-tweets_hover_colors2'>
                #ForzaHorizon5
              </span>{' '}
              Photo mode
              <img
                className='mt-3 rounded-xl'
                src='https://pbs.twimg.com/media/FDfHu8tVEAQAVfv?format=jpg&name=large'
              />
            </p>
            <ul className='mt-2 flex justify-between'>
              <li className='text-primary-gray_colors group flex items-center space-x-3 text-sm'>
                <div className='duration-2 group-hover:bg-primary-tweets_hover_colors1 flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors'>
                  <Reply />
                </div>
                <span>40</span>
              </li>

              <li className='text-primary-gray_colors group flex items-center space-x-3 text-sm'>
                <div className='duration-2 group-hover:bg-primary-tweets_hover_colors2 flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors'>
                  <Retweet />
                </div>
                <span>1</span>
              </li>

              <li className='text-primary-gray_colors group flex items-center space-x-3 text-sm'>
                <div className='duration-2 group-hover:bg-primary-tweets_hover_colors3 flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors'>
                  <Like />
                </div>
                <span>7K</span>
              </li>

              <li className='text-primary-gray_colors group flex items-center space-x-3 text-sm'>
                <div className='duration-2 group-hover:bg-primary-tweets_hover_colors1 flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors'>
                  <Share />
                </div>
                <span>1</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
