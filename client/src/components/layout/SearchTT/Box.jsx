import {
  Circle,
  Search,
  SettingsIcon,
  VerifiedBadge,
} from '@/components/icons/twitter';
export default function AllBox() {
  return (
    <>
      <div className='bg-primary-search_box focus-within:ring-primary-search_box_color m-3 flex items-center space-x-5 rounded-full p-3 text-white focus-within:ring-2 focus:ring-1'>
        <Search />
        <div>
          <input
            className='bg-primary-searchbox w-full bg-transparent focus:outline-none'
            type='text'
            placeholder='Search Twitter'
          />
        </div>
      </div>
      <div className='bg-primary-trends_fy_color m-3 mt-4 items-center rounded-xl p-3'>
        <div>
          <div className='tfy flex items-center justify-between text-white'>
            <span className='text-xl font-bold'>Trends for you</span>
            <div className='duration-2 flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-gray-700 hover:bg-opacity-70'>
              <SettingsIcon />
            </div>
          </div>
          <div className='hover:bg-primary-trends_hover duration-2 mb-3 transform cursor-pointer transition-colors'>
            <div className=''>
              <div className='category_1 flex flex-row items-center'>
                <span className='text-primary-trends_d_color text-sm'>
                  Science . Trending
                </span>
                <div className='tt duration-2 hover:bg-primary-trends_circle_hover ml-auto flex h-8 w-8 transform cursor-pointer items-center justify-center space-x-1 rounded-full transition-colors hover:bg-opacity-25'>
                  <Circle />
                </div>
              </div>
            </div>
            <div className='topic'>
              <div className='font-bold text-white'>
                <span>#Space</span>
              </div>
            </div>
            <div className='TopicCount'>
              <span className='text-primary-trends_d_color'>10.4K Tweets</span>
            </div>
          </div>

          <div className='hover:bg-primary-trends_hover duration-2 mb-3 transform cursor-pointer transition-colors'>
            <div className=''>
              <div className='category_1 flex flex-row items-center'>
                <span className='text-primary-trends_d_color text-sm'>
                  Football . Trending
                </span>
                <div className='tt duration-2 hover:bg-primary-trends_circle_hover ml-auto flex h-8 w-8 transform cursor-pointer items-center justify-center space-x-1 rounded-full transition-colors hover:bg-opacity-25'>
                  <Circle />
                </div>
              </div>
            </div>
            <div className='topic'>
              <div className='font-bold text-white'>
                <span>#Marsilya</span>
              </div>
            </div>
            <div className='TopicCount'>
              <span className='text-primary-trends_d_color'>3.320K Tweets</span>
            </div>
          </div>

          <div className='hover:bg-primary-trends_hover duration-2 mb-3 transform cursor-pointer transition-colors'>
            <div className=''>
              <div className='category_1 flex flex-row items-center'>
                <span className='text-primary-trends_d_color text-sm'>
                  Technology . Trending
                </span>
                <div className='tt duration-2 hover:bg-primary-trends_circle_hover ml-auto flex h-8 w-8 transform cursor-pointer items-center justify-center space-x-1 rounded-full transition-colors hover:bg-opacity-25'>
                  <Circle />
                </div>
              </div>
            </div>
            <div className='topic'>
              <div className='font-bold text-white'>
                <span>#Apple</span>
              </div>
            </div>
            <div className='TopicCount'>
              <span className='text-primary-trends_d_color'>1.485 Tweets</span>
            </div>
          </div>

          <div className='hover:bg-primary-trends_hover duration-2 transform cursor-pointer transition-colors'>
            <div className=''>
              <div className='category_1 flex flex-row items-center'>
                <span className='text-primary-trends_d_color text-sm'>
                  Cinema and TV . Trending
                </span>
                <div className='tt duration-2 hover:bg-primary-trends_circle_hover ml-auto flex h-8 w-8 transform cursor-pointer items-center justify-center space-x-1 rounded-full transition-colors hover:bg-opacity-25'>
                  <Circle />
                </div>
              </div>
            </div>
            <div className='topic'>
              <div className='font-bold text-white'>
                <span>#SquidGames</span>
              </div>
            </div>
            <div className='TopicCount'>
              <span className='text-primary-trends_d_color'>30K Tweets</span>
            </div>
          </div>
          <div className='duration-2 bg-primary-wigdets_background_color transform p-4 transition-colors'>
            <span className=' text-primary-button'>Show more</span>
          </div>
        </div>
      </div>
      <div className='wtf duration-2 bg-primary-wigdets_background_color m-3 mt-4 flex transform flex-col rounded-xl p-3 transition-colors'>
        <div className='tfy flex items-center justify-between text-white'>
          <span className='text-xl font-bold'>Who to Follow</span>
        </div>
        <div className='hover:bg-primary-trends_hover'>
          <div className='flex flex-row items-center '>
            <div className='px-4 py-3'>
              <img
                className='h-11 w-11 rounded-full'
                src='https://avatars.githubusercontent.com/u/50018633?v=4'
              />
            </div>
            <div className='flex flex-col'>
              <div className='font-bold text-white'>
                <span>
                  Eleven <VerifiedBadge />
                </span>
              </div>
              <div className='text-primary-gray_colors'>@eleven</div>
            </div>
            <div className='ml-auto flex flex-row items-center justify-between rounded-full bg-white px-4 py-1'>
              <span className='font-bold'>Follow</span>
            </div>
          </div>
        </div>
        <div className='duration-2 bg-primary-wigdets_background_color transform p-4 transition-colors'>
          <span className=' text-primary-button'>Show more</span>
        </div>
      </div>
    </>
  );
}
