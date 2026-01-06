import { type PropsWithChildren } from 'react';
import {
  Box,
  HStack,
  Spacer,
  Drawer,
  IconButton,
  VStack,
  Container,
  type IconButtonProps,
  useDisclosure,
} from '@chakra-ui/react';
import { Contact } from '../contact';
import { Logo } from '../logo';
import { LuMenu, LuMoon, LuSun } from 'react-icons/lu';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MAX_WIDTH, NAV, ROUTES } from '@src/constants';
import { Tooltip, useColorMode } from '../ui';
import { NavLink } from '../ui/nav-link';

const NavDrawer = () => {
  const state = useDisclosure();

  return (
    <Drawer.Root placement={'bottom'} open={state.open} onOpenChange={state.onToggle}>
      <Drawer.Backdrop />
      <Drawer.Trigger>
        <IconButton variant="ghost" aria-label="Open menu">
          <LuMenu />
        </IconButton>
      </Drawer.Trigger>
      <Drawer.Positioner>
        <Drawer.Content borderTopRadius={'md'}>
          <Drawer.Body paddingBlock={2} py={5}>
            <VStack w="100%" align={'start'}>
              <HStack w={'inherit'} justify="space-between" gap={4} px={2}>
                {NAV.map((item, idx) => (
                  <NavLink
                    textUnderlineOffset={'10px'}
                    py={1}
                    onClick={state.onToggle}
                    to={item.to}
                    key={`nav-item-${idx}`}
                  >
                    {item.label || '?'}
                  </NavLink>
                ))}
              </HStack>
            </VStack>
          </Drawer.Body>
          <Drawer.Footer borderTopWidth={1} paddingBlock={2}>
            <HStack w={'100%'}>
              <HStack w="100%">
                <Spacer />
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
                <NavLink to={ROUTES.EMAIL}>
                  <IconButton variant="ghost" aria-label="Github">
                    <FaEnvelope />
                  </IconButton>
                </NavLink>
              </HStack>
            </HStack>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
};

interface ThemeToggleProps extends IconButtonProps {
  tooltip?: boolean;
}

const ThemeToggle = (props: ThemeToggleProps) => {
  const { tooltip, ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip content="Toggle theme" disabled={tooltip} openDelay={1000}>
      <IconButton onClick={toggleColorMode} variant="ghost" aria-label="Toggle theme" {...rest}>
        {colorMode === 'light' ? <LuSun /> : <LuMoon />}
      </IconButton>
    </Tooltip>
  );
};

export type HeaderProps = PropsWithChildren;

export const Header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <Box id="header" w={'100%'}>
      <Container maxW={MAX_WIDTH} py={2}>
        <HStack w={'100%'}>
          <HStack gap={7} display={{ mdDown: 'none', md: 'flex' }}>
            {NAV.map((item, idx) => (
              <NavLink
                textUnderlineOffset={'10px'}
                to={item.to}
                key={`nav-item-${idx}`}
                fontWeight={'bold'}
              >
                {item.label}
              </NavLink>
            ))}
          </HStack>
          <NavLink
            to={'/'}
            _hover={{ opacity: 0.7 }}
            transition={'opacity ease 0.2s'}
            display={{ mdDown: 'block', md: 'none' }}
          >
            <Logo w={{ mdDown: 10, md: 12 }} />
          </NavLink>

          <Spacer>{children}</Spacer>

          {/* Nav bar */}
          <HStack gap={5} display={{ mdDown: 'none', md: 'flex' }}>
            <HStack gap={7} display={{ mdDown: 'flex', md: 'none' }}>
              {NAV.map((item, idx) => (
                <NavLink textUnderlineOffset={'10px'} to={item.to} key={`nav-item-${idx}`}>
                  {item.label}
                </NavLink>
              ))}
            </HStack>

            <ThemeToggle tooltip display={{ mdDown: 'none', md: 'flex' }} />
            <Contact />
          </HStack>

          <HStack display={{ mdDown: 'flex', md: 'none' }}>
            <ThemeToggle tooltip />
            <NavDrawer />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};
