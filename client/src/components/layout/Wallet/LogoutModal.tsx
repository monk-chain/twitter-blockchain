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
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

import { useLayoutContext } from '@/context/LayoutContext';

export const LogoutModal = () => {
  const { isLogoutModal: isOpen, handleCloseLogoutModal: onClose } =
    useLayoutContext();

  const { deactivate } = useWeb3React<Web3Provider>();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent w='300px'>
        <ModalHeader></ModalHeader>
        <ModalCloseButton
          _focus={{
            boxShadow: 'none',
          }}
        />
        <ModalBody paddingBottom='1.5rem'>
          <VStack>
            <Button
              variant='outline'
              onClick={() => {
                deactivate();
                onClose();
              }}
              w='100%'
            >
              <HStack w='100%' justifyContent='center'>
                <Text>Log out</Text>
              </HStack>
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
