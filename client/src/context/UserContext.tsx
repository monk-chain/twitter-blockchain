import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react';

import { useProviderContext } from './ProviderContext';

import { User } from '@/types/User';

type Context = {
  user: User;
  isProfile: boolean;
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
  const { profileContractByWallet } = useProviderContext();
  const [isProfile, setIsProfile] = useState(false);
  const [user, setUser] = useState<User>({
    name: 'unnamed',
    image: '/mm.png',
    account: '0x0000000000000000000000000000000000000000',
    userId: '0',
  });

  console.log('user context');
  console.log('account', account);

  useEffect(() => {
    (async () => {
      const userProfile = await profileContractByWallet.getUserProfile(account);
      console.log(
        '🚀 ~ file: UserContext.tsx ~ line 46 ~ userProfile',
        userProfile
      );
      if (userProfile.name !== '') setIsProfile(true);
      setUser((_user) => {
        // TODO あまり良くない userId account
        return {
          name: userProfile[1] === '' ? _user.name : userProfile[1],
          account: account ? account : _user.account,
          image: userProfile[3] === '' ? _user.image : userProfile[3],
          userId: _user.userId,
        };
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return {
    user,
    isProfile,
  };
};

export { UserContextProvider, useUserContext };
