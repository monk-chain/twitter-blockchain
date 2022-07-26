import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

import { Srot } from '@/types/sort';

type Context = {
  isWalletModal: boolean;
  handleOpenWalletModal: () => void;
  handleCloseWalletModal: () => void;

  isLogoutModal: boolean;
  handleOpenLogoutModal: () => void;
  handleCloseLogoutModal: () => void;

  isInputModal: boolean;
  handleOpenInputModal: () => void;
  handleCloseInputModal: () => void;

  sort: Srot;
  handleSetSort: (sort: Srot) => void;
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

const [useLayoutContext, SetUseLayoutContext] = createCtx<Context>();

const LayoutContextProvider = ({ children }: { children: React.ReactNode }) => {
  const ctx = useCtxMain();
  return <SetUseLayoutContext value={ctx}>{children}</SetUseLayoutContext>;
};

const useCtxMain = (): Context => {
  const {
    isOpen: isWalletModal,
    onOpen: handleOpenWalletModal,
    onClose: handleCloseWalletModal,
  } = useDisclosure();

  const {
    isOpen: isLogoutModal,
    onOpen: handleOpenLogoutModal,
    onClose: handleCloseLogoutModal,
  } = useDisclosure();

  const {
    isOpen: isInputModal,
    onOpen: handleOpenInputModal,
    onClose: handleCloseInputModal,
  } = useDisclosure();

  const [sort, setSort] = useState<Srot>('new');
  const handleSetSort = (sort: Srot) => {
    setSort(sort);
  };

  return {
    isWalletModal,
    handleOpenWalletModal,
    handleCloseWalletModal,

    isLogoutModal,
    handleOpenLogoutModal,
    handleCloseLogoutModal,

    isInputModal,
    handleOpenInputModal,
    handleCloseInputModal,

    sort,
    handleSetSort,
  };
};

// export const useLayoutContext = () => React.useContext(LayoutContext);

export { LayoutContextProvider, useLayoutContext };
