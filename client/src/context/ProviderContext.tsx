import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

import ProfileContractJson from '../../../smart-contracts/artifacts/contracts/Profile.sol/Profile.json';
import { profileContractAddress } from '../../../smart-contracts/contract.config';

type Context = {
  profileContractByWallet: ethers.Contract;
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

const [useProviderContext, SetUseProviderContext] = createCtx<Context>();

const ProviderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const auth = useLayoutCtx();
  return <SetUseProviderContext value={auth}>{children}</SetUseProviderContext>;
};

const useLayoutCtx = (): Context => {
  const { active, library } = useWeb3React<Web3Provider>();
  const [profileContractByWallet, setProfileContractByWallet] =
    useState<ethers.Contract>(
      new ethers.Contract(profileContractAddress, ProfileContractJson.abi)
    );
  useEffect(() => {
    if (active) {
      const signer = library?.getSigner();
      setProfileContractByWallet(
        new ethers.Contract(
          profileContractAddress,
          ProfileContractJson.abi,
          signer
        )
      );
    } else {
      setProfileContractByWallet(
        new ethers.Contract(profileContractAddress, ProfileContractJson.abi)
      );
    }
  }, [active, library]);

  return {
    profileContractByWallet,
  };
};

export { ProviderContextProvider, useProviderContext };
