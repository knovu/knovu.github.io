import { Box, IconButton, Spacer, VStack } from '@chakra-ui/react';
import { NavLink } from '../ui';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ROUTES } from '@src/constants';
import { Logo } from '../logo';
import { Contact } from '../contact';

export const Sidebar = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      h="100vh"
      w={85}
      py={5}
      borderRightWidth={1}
      display={{ mdDown: 'none', md: 'block' }}
    >
      <VStack h="100%">
        <NavLink to={ROUTES.INDEX} _hover={{ opacity: 0.7 }} transition={'opacity ease 0.2s'}>
          <Logo w={{ mdDown: 10, md: 12 }} />
        </NavLink>

        <Spacer />

        <VStack gap={5}>
          <NavLink to={ROUTES.LINKEDIN}>
            <IconButton variant="ghost" aria-label="Linkedin">
              <FaLinkedin />
            </IconButton>
          </NavLink>
          <NavLink to={ROUTES.GITHUB}>
            <IconButton variant="ghost" aria-label="Github">
              <FaGithub />
            </IconButton>
          </NavLink>
          <Contact iconButton />
        </VStack>
      </VStack>
    </Box>
  );
};
