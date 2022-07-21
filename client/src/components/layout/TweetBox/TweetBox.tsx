import { useState } from 'react';

import { Emoji, Gif, Media, Plans, Survey } from '../../icons/twitter';
const style = {
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl mb-[10px] mt-[10px] cursor-pointer`,
};
export default function TweetBox() {
  const [content, setContent] = useState('');
  const sendTweet = () => {
    console.log('sendTweet');
  };
  return (
    <>
      <div className='mt-2 flex flex-1 flex-col text-white'>
        <textarea
          type='text'
          onChange={(e) => setContent(e.target.value)}
          value={content}
          className='tweet-box w-full flex-1 resize-none overflow-hidden rounded-xl bg-black p-1 text-xl outline-none'
          placeholder="What's happening?"
        />
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-center'>
            <input
              data-v-16420b52=''
              type='file'
              id='imageInput'
              accept='image/*'
              className='file cursor-pointer'
            />
            <div className='duration-2 hover:bg-primary-tweetbox_colors_hover flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-opacity-25'>
              <a title='Media'>
                <label htmlFor='imageInput'>
                  <Media />
                </label>
              </a>
            </div>
            <div className='duration-2 hover:bg-primary-tweetbox_colors_hover flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-opacity-25'>
              <a title='Gif'>
                <Gif />
              </a>
            </div>
            <div className='duration-2 hover:bg-primary-tweetbox_colors_hover flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-opacity-25'>
              <a title='Survery'>
                <Survey />
              </a>
            </div>
            <div className='duration-2 hover:bg-primary-tweetbox_colors_hover flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-opacity-25'>
              <a className='Emoji'>
                <Emoji />
              </a>
            </div>
            <div className='duration-2 hover:bg-primary-tweetbox_colors_hover flex h-9 w-9 transform cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-opacity-25'>
              <a className='Plan'>
                <Plans />
              </a>
            </div>
          </div>
          <div className='bg-primary-button hover:bg-primary-button_hover mt-[10px]  transform justify-center rounded-full bg-[#1d9bf0] py-2 px-4 text-white shadow-lg transition-colors duration-500 hover:bg-[#1b8cd8]'>
            <button className='button-tweet font-bold' onClick={sendTweet}>
              Mint
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
