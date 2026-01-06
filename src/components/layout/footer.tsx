import { Box, Container, HStack, IconButton, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import { MAX_WIDTH, NAV, ROUTES } from '@src/constants';
import { NavLink } from '../ui';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Logo } from '../logo';
import { Contact } from '../contact';

export const Footer = () => {
  return (
    <Box
      id="footer"
      bgColor={'blackAlpha.900'}
      _dark={{ bgColor: 'blackAlpha.300' }}
      w={'100%'}
      py={5}
      borderTopRadius={'md'}
    >
      <Container maxW={MAX_WIDTH}>
        <VStack w="100%">
          <Stack direction={{ mdDown: 'column', md: 'row' }} align={'center'} w={'inherit'}>
            <HStack justify={'center'} align="center" gap={5}>
              <NavLink to={ROUTES.INDEX} _hover={{ opacity: 0.7 }} transition={'opacity ease 0.2s'}>
                <Logo w={{ mdDown: '38px', md: '48px' }} />
              </NavLink>

              {NAV.filter((item) => item.to !== ROUTES.INDEX).map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.to}
                  textUnderlineOffset="10px"
                  color={'gray.200'}
                  fontWeight={'bold'}
                >
                  {item.label}
                </NavLink>
              ))}
            </HStack>

            <Spacer display={{ mdDown: 'block', md: 'none' }} />

            <VStack
              flex={1}
              gap={1}
              h="100%"
              justify="center"
              color={'gray.200'}
              display={{ mdDown: 'none', md: 'flex' }}
            >
              <Text fontSize="xs" opacity={0.6}>
                Senior Software Engineer • Building thoughtful software
              </Text>
              <Text fontSize="xs" opacity={0.5}>
                © {new Date().getFullYear()} Jess Graham
              </Text>
            </VStack>

            <VStack align={{ mdDown: 'center', md: 'end' }} gap={1}>
              <Text fontSize="sm" fontWeight="medium" color={'gray.200'}>
                Let’s connect.
              </Text>
              <HStack gap={3}>
                <NavLink to={ROUTES.LINKEDIN}>
                  <IconButton
                    variant="ghost"
                    aria-label="Linkedin"
                    color={'gray.200'}
                    _hover={{ bgColor: 'gray.900' }}
                  >
                    <FaLinkedin />
                  </IconButton>
                </NavLink>
                <NavLink to={ROUTES.GITHUB}>
                  <IconButton
                    variant="ghost"
                    aria-label="Github"
                    color={'gray.200'}
                    _hover={{ bgColor: 'gray.900' }}
                  >
                    <FaGithub />
                  </IconButton>
                </NavLink>

                <Contact iconButton color={'gray.200'} _hover={{ bgColor: 'gray.900' }} />
              </HStack>
            </VStack>
          </Stack>

          <VStack gap={1} w={'inherit'} color={'gray.200'} display={{ mdDown: 'flex', md: 'none' }}>
            <Text fontSize="xs" opacity={0.6}>
              Senior Software Engineer • Building thoughtful software
            </Text>
            <Text fontSize="xs" opacity={0.5}>
              © {new Date().getFullYear()} Jess Graham
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
