import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

import { LayoutContextProvider } from '@/context/LayoutContext';
import { ProviderContextProvider } from '@/context/ProviderContext';
import { UserContextProvider } from '@/context/UserContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider colorModeManager={localStorageManager}>
        <ProviderContextProvider>
          <UserContextProvider>
            <LayoutContextProvider>
              <Component {...pageProps} />
            </LayoutContextProvider>
          </UserContextProvider>
        </ProviderContextProvider>
      </ChakraProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
