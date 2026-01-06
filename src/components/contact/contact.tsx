import {
  Button,
  CloseButton,
  Dialog,
  IconButton,
  Portal,
  Text,
  useDisclosure,
  VStack,
  type ButtonProps,
} from '@chakra-ui/react';
import type { OpenChangeDetails } from '@src/@types';
import { useCallback } from 'react';
import { NavLink } from '../ui';
import { FaEnvelope } from 'react-icons/fa';
import { ROUTES } from '@src/constants';

export interface ContactProps extends ButtonProps {
  onOpenChange?: (details: OpenChangeDetails) => void;
  iconButton?: boolean;
}

export const Contact = (props: ContactProps) => {
  const { children, iconButton, ...rest } = props;
  const state = useDisclosure();

  const onOpenChange = useCallback(
    (details: OpenChangeDetails) => {
      if (rest.onOpenChange) {
        rest.onOpenChange(details);
      }

      state.onToggle();
    },
    [rest, state],
  );

  return (
    <Dialog.Root placement="center" open={state.open} onOpenChange={onOpenChange}>
      <Dialog.Trigger
        asChild
        _active={{
          bgColor: iconButton ? undefined : 'jg.600',
        }}
      >
        {iconButton ? (
          <IconButton variant={'ghost'} {...rest} onClick={() => null}>
            <FaEnvelope />
          </IconButton>
        ) : (
          <Button {...rest} onClick={() => null}>
            {children || 'Contact'}
          </Button>
        )}
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>🧑‍💻 Let's get in touch!</Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body>
              <VStack align="start" gap={5}>
                <Text>
                  Continuing will open your default SMTP provider. You will be provided with a
                  template to email your details with. Please me give time to respond.
                </Text>

                <Text>
                  You can also reach out to me on{' '}
                  <NavLink
                    tooltip="Visit Linkedin"
                    display="inline"
                    target="_blank"
                    to={ROUTES.LINKEDIN}
                    color="jg.700"
                  >
                    Linkedin
                  </NavLink>
                  .
                </Text>

                <Text>Thank you, and I appreciate your patience!</Text>
              </VStack>
            </Dialog.Body>

            <Dialog.Footer>
              <NavLink to={ROUTES.EMAIL}>
                <Button aria-label="Github">
                  <FaEnvelope />
                  Contact
                </Button>
              </NavLink>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
