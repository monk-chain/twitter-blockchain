import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

import { useLayoutContext } from '@/context/LayoutContext';

import { connectors } from './connectors';

export const SelectWalletModal = () => {
  const { isWalletModal: isOpen, handleCloseWalletModal: onClose } =
    useLayoutContext();

  const { injected, walletConnect, coinbaseWallet } = connectors;

  const connectorsByName = {
    Injected: injected,
    CoinbaseWallet: coinbaseWallet,
    WalletConnect: walletConnect,
  };

  const { activate } = useWeb3React<Web3Provider>();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent w='300px'>
        <ModalHeader>Select Wallet</ModalHeader>
        <ModalCloseButton
          _focus={{
            boxShadow: 'none',
          }}
        />
        <ModalBody paddingBottom='1.5rem'>
          <VStack>
            {Object.keys(connectorsByName).map((name) => {
              const currentConnector =
                connectorsByName[name as keyof typeof connectorsByName];
              return (
                <>
                  <Button
                    variant='outline'
                    onClick={() => {
                      activate(currentConnector);
                      onClose();
                    }}
                    w='100%'
                  >
                    <HStack w='100%' justifyContent='center'>
                      <Image
                        src={
                          name === 'Injected'
                            ? '/mm.png'
                            : name === 'CoinbaseWallet'
                            ? '/cbw.png'
                            : name === 'WalletConnect'
                            ? '/wc.png'
                            : ''
                        }
                        alt='Wallet Connect Logo'
                        width={26}
                        height={26}
                        borderRadius='3px'
                      />
                      <Text>{name === 'Injected' ? 'MetaMask' : name}</Text>
                    </HStack>
                  </Button>
                </>
              );
            })}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
