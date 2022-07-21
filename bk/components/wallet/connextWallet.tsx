import { VStack, useDisclosure, Button, HStack } from '@chakra-ui/react';
import SelectWalletModal from '@/src/components/wallet/walletModal';
import { useWeb3React } from '@web3-react/core';

export default function CoinbaseWallet() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { active } = useWeb3React();
  return (
    <>
      <VStack justifyContent='center' alignItems='center' h='100vh'>
        <HStack>
          {!active ? (
            <Button onClick={onOpen}>Connect Wallet</Button>
          ) : (
            <></>
            // <Button onClick={disconnect}>Disconnect</Button>
          )}
        </HStack>
      </VStack>
      <SelectWalletModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
