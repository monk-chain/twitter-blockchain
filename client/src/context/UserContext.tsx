import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react';

import { useProviderContext } from './ProviderContext';

import { User } from '@/types/User';

type Context = {
  user: User;
  isProfile: boolean;
  handleSetUser: (user: User) => void;
  handleLogout: () => void;
  handleIsProfile: (bool: boolean) => void;
  handleFetchUser: (account: string) => void;
};

function createCtx<ContextType>() {
  const ctx = React.createContext<ContextType | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

const [useUserContext, SetUseUserContext] = createCtx<Context>();

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const ctx = useCtxMain();
  return <SetUseUserContext value={ctx}>{children}</SetUseUserContext>;
};

const useCtxMain = (): Context => {
  const { active, library, account } = useWeb3React<Web3Provider>();
  const { profileContractByWallet, profileContractByProvider } =
    useProviderContext();
  const [isProfile, setIsProfile] = useState(false);
  const [user, setUser] = useState<User>({
    name: 'unnamed',
    image: '/mm.png',
    account: '0x0000000000000000000000000000000000000000',
    userId: '0',
  });

  const handleIsProfile = (bool: boolean) => {
    setIsProfile(bool);
  };

  const handleSetUser = (user: User) => {
    setIsProfile(false);
    setUser(user);
  };

  const handleFetchUser = async (account: string) => {
    try {
      const userProfile = await profileContractByProvider.getUserProfile(
        account
      );
      if (userProfile[1]) setIsProfile(true);
      else setIsProfile(false);
      setUser((_user) => {
        // TODO あまり良くない userId account
        return {
          name: userProfile[1] === '' ? _user.name : userProfile[1],
          account: account ? account : _user.account,
          image: userProfile[3] === '' ? _user.image : userProfile[3],
          userId: _user.userId,
        };
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleLogout = () => {
    setUser({
      name: 'unnamed',
      image: '/mm.png',
      account: '0x0000000000000000000000000000000000000000',
      userId: '0',
    });
  };

  useEffect(() => {
    if (active && account) handleFetchUser(account);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return {
    user,
    isProfile,
    handleLogout,
    handleSetUser,
    handleIsProfile,
    handleFetchUser,
  };
};

export { UserContextProvider, useUserContext };
