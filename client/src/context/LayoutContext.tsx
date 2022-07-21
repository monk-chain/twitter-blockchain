import { useDisclosure } from '@chakra-ui/react';
import React from 'react';

type Context = {
  isWalletModal: boolean;
  handleOpenWalletModal: () => void;
  handleCloseWalletModal: () => void;
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
  const auth = useLayoutCtx();
  return <SetUseLayoutContext value={auth}>{children}</SetUseLayoutContext>;
};

const useLayoutCtx = (): Context => {
  const {
    isOpen: isWalletModal,
    onOpen: handleOpenWalletModal,
    onClose: handleCloseWalletModal,
  } = useDisclosure();

  return {
    isWalletModal,
    handleOpenWalletModal,
    handleCloseWalletModal,
  };
};

// export const useLayoutContext = () => React.useContext(LayoutContext);

export { LayoutContextProvider, useLayoutContext };
