import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useToast,
} from '@chakra-ui/react';

import { useTargetObject } from '@/hooks/useCreate';

import { useLayoutContext } from '@/context/LayoutContext';
import { useProviderContext } from '@/context/ProviderContext';

import { UserMint } from '@/types/User';

export const InputModal = () => {
  const { isInputModal: isOpen, handleCloseInputModal: onClose } =
    useLayoutContext();

  const toast = useToast();
  const { profileContractByWallet } = useProviderContext();
  const {
    targetobject: userInput,
    handleEventSetTargetObject: handleEventUserInput,
    handleSetTargetObject: setEditUserInput,
  } = useTargetObject<UserMint>({
    name: '',
    image: '',
  });

  const submit = () => {
    setEditUserInput({
      name: '',
      image: '',
    });
    onClose();
    try {
      profileContractByWallet.createProfile(userInput.name, userInput.image);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(
        '🚀 ~ file: InputModal.tsx ~ line 46 ~ submit ~ error',
        error
      );
      toast({
        title: 'error',
        description: error,
        status: 'error',
        duration: 1000,
        isClosable: true,
      });
    }
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
          <Stack spacing={3}>
            <Input
              name='name'
              onChange={handleEventUserInput}
              variant='flushed'
              placeholder='name'
            />
            <Input
              name='image'
              onChange={handleEventUserInput}
              variant='flushed'
              placeholder='https://image-url.image'
            />
            <Button onClick={submit} colorScheme='blue'>
              Mint User
            </Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
