import React, { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import SideberItem from './SideberItem';
import {
  BookMarksIcon,
  HomeIcon,
  MessagesIcon,
  MoreIcon,
  ProfileIcon,
  TwitterIcon,
} from '../../icons/twitter';
import { useLayoutContext } from '@/context/LayoutContext';

const style = {
  wrapper: `text-slate-50  w-275 flex flex-col justify-between bg-black px-3`,
  twitterIconContainer: `duration-2 hover:bg-primary-twıtter_ıcon mt-1 mb-5 flex h-12 w-12 transform cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-opacity-70`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `mb-5`,

  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2 mt-[20px]`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileImage: `inset-x-0 bottom-0 height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
};

export const SideBar = () => {
  const [selected, setSelected] = useState<string>('HOME');

  const { isWalletModal, handleCloseWalletModal, handleOpenWalletModal } =
    useLayoutContext();

  const onClick = () => {
    console.log('isWalletModal', isWalletModal);
    console.log('handleOpenWalletModal', handleOpenWalletModal);
    console.log('onClick');
    handleOpenWalletModal();
    // handleCloseWalletModal();
  };

  return (
    <>
      <div className={style.wrapper}>
        <div>
          <div className={style.twitterIconContainer}>
            <TwitterIcon />
          </div>
          <nav className={style.navContainer}>
            <ul>
              <SideberItem text='HOME' selected={selected} Icon={HomeIcon} />
              <SideberItem
                text='Messages'
                selected={selected}
                Icon={MessagesIcon}
              />
              <SideberItem
                text='Bookmarks'
                selected={selected}
                Icon={BookMarksIcon}
              />
              <SideberItem
                text='Profile'
                selected={selected}
                Icon={ProfileIcon}
              />
              <SideberItem text='More' selected={selected} Icon={MoreIcon} />
            </ul>
          </nav>

          <div className={style.profileButton} onClick={onClick}>
            <div className={style.profileLeft}>
              <TwitterIcon />
              {/* <Image
                src={currentUser.profileImage}
                alt='profile'
                className={`${style.profileImage} smallHex`}
              /> */}
            </div>
            <div className={style.profileRight}>
              <div className={style.details}>
                <div className={style.name}>user name</div>
                <div className={style.handle}>@0x0000...000000</div>
              </div>
              <div className={style.moreContainer}>
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};