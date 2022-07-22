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
} from '@chakra-ui/react';
import { toast } from 'react-hot-toast';

import { useTargetObject } from '@/hooks/useCreate';

import { useLayoutContext } from '@/context/LayoutContext';
import { useProviderContext } from '@/context/ProviderContext';

import { UserMint } from '@/types/User';

export const InputModal = () => {
  const { isInputModal: isOpen, handleCloseInputModal: onClose } =
    useLayoutContext();

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
      toast.error(error);
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
