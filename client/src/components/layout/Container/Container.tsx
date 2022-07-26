/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import { Select } from '@chakra-ui/react';

import { useLayoutContext } from '@/context/LayoutContext';

import TweetBox from '../TweetBox/TweetBox';
import Tweets from '../Tweets/Tweets';

const style = {
  wrapper: `flex justify-between mr-28 mt-4 text-[#8899a6] ml-4`,
  title: 'rounded-full text-lg p-2 text-xl font-bold text-white',
  select: 'rounded-full text-lg p-2',
};

/**
 * Headers Component
 */
export default function ContainerPage() {
  const { handleSetSort } = useLayoutContext();
  return (
    <>
      <header className={style.wrapper}>
        <div className={style.title}>Home</div>
        <div className={style.select}>
          <Select
            placeholder='並び替え'
            onChange={(e: any) => handleSetSort(e.target.value)}
          >
            <option value='new' selected={true}>
              最新順
            </option>
            <option value='like'>いいね順</option>
          </Select>
        </div>
      </header>
      <div className='border-primary-container_border_color flex space-x-4 border-b px-5 py-2'>
        <TweetBox />
      </div>
      <div>
        <Tweets />
      </div>
    </>
  );
}
