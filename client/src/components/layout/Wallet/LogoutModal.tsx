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
  useToast,
  VStack,
} from '@chakra-ui/react';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

import { useLayoutContext } from '@/context/LayoutContext';
import { useUserContext } from '@/context/UserContext';

export const LogoutModal = () => {
  const {
    isLogoutModal: isOpen,
    handleCloseLogoutModal: onClose,
    handleOpenInputModal,
  } = useLayoutContext();
  const toast = useToast();

  const { deactivate } = useWeb3React<Web3Provider>();
  const { isProfile, handleLogout } = useUserContext();

  // useEffect(() => {}, [account]);

  const createUser = async () => {
    handleOpenInputModal();
  };

  const updateUser = async () => {
    toast({
      title: 'Comming soon',
      status: 'info',
      duration: 1000,
      isClosable: true,
    });
  };

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
          {!isProfile ? (
            <VStack>
              <Button
                variant='outline'
                onClick={() => {
                  createUser();
                  onClose();
                }}
                w='100%'
              >
                <HStack w='100%' justifyContent='center'>
                  <Text>Mint user profile</Text>
                </HStack>
              </Button>
            </VStack>
          ) : (
            <VStack>
              <Button
                variant='outline'
                onClick={() => {
                  updateUser();
                  onClose();
                }}
                w='100%'
              >
                <HStack w='100%' justifyContent='center'>
                  <Text>Update user profile</Text>
                </HStack>
              </Button>
            </VStack>
          )}
          <VStack>
            <Button
              variant='outline'
              onClick={() => {
                deactivate();
                handleLogout();
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
