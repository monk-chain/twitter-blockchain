import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

import { LayoutContextProvider } from '@/context/LayoutContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLibrary = (provider: any) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider colorModeManager={localStorageManager}>
        <LayoutContextProvider>
          <Component {...pageProps} />
        </LayoutContextProvider>
      </ChakraProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
