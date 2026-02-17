import { type PropsWithChildren } from 'react';
import { Contact, Logo, Page } from '@src/components';
import { LABELS } from '@src/constants';
import { Box, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { LuCoffee, LuMail, LuMapPin } from 'react-icons/lu';

export type HomeProps = PropsWithChildren;

export const Home = (props: HomeProps) => {
  const { children } = props;

  return (
    <Page.Root title={LABELS.NAVIGATION.HOME} author="">
      <Page.Section h={'calc(100vh - 56px)'}>
        <Box w="100%" h="100%" display="flex" justifyContent={'center'}>
          <VStack
            w={{ md: '6xl' }}
            align="center"
            justify="center"
            h="100%"
            gap={{ mdDown: 5, md: 50 }}
          >
            <Stack
              direction={{ mdDown: 'column', md: 'row' }}
              w="100%"
              gap={20}
              justify={'space-between'}
            >
              <Box w={{ lgDown: '100%', lg: '60%' }}>
                <VStack
                  align={{ lgDown: 'center', lg: 'start' }}
                  gap={14}
                  w={{ lgDown: '100%', lg: 'xl' }}
                >
                  <VStack w="100%" align={{ lgDown: 'center', lg: 'start' }} gap={10}>
                    <Heading fontSize={'2xl'} fontWeight={'semibold'}>
                      Hi there!
                    </Heading>
                    <Heading
                      fontSize={{ mdDown: '6xl', md: '9xl' }}
                      fontWeight={'bold'}
                      textIndent="-0.05em"
                    >
                      I am J
                      <Text as="span" color="jg.500">
                        e
                      </Text>
                      ss,
                    </Heading>
                  </VStack>

                  <VStack align={{ lgDown: 'center', lg: 'inherit' }} w="100%" gap={5}>
                    <VStack align={{ lgDown: 'center', lg: 'inherit' }} w="100%">
                      <Heading fontSize="2xl" fontWeight={'semibold'}>
                        Senior Full Stack Engineer
                      </Heading>
                      <Text
                        fontSize="lg"
                        color="gray.500"
                        maxW={'sm'}
                        textAlign={{ lgDown: 'center' }}
                      >
                        I build scalable, production-grade systems with a focus on performance,
                        reliability, and real business impact.
                      </Text>
                    </VStack>

                    <Contact size="2xl">
                      Let’s talk over coffee
                      <LuCoffee />
                    </Contact>
                  </VStack>

                  <Stack
                    direction={{ lgDown: 'column', lg: 'row' }}
                    align={{ lgDown: 'center', lg: 'start' }}
                    w="100%"
                    gap={{ lgDown: 5, lg: 10 }}
                  >
                    <VStack align={{ lgDown: 'center', lg: 'start' }}>
                      <HStack fontSize="lg">
                        <LuMail />
                        <Heading>Email</Heading>
                      </HStack>
                      <Text>jess.graham.biz@gmail.com</Text>
                    </VStack>

                    <VStack align={{ lgDown: 'center', lg: 'start' }}>
                      <HStack fontSize="lg">
                        <LuMapPin />
                        <Heading>Location</Heading>
                      </HStack>
                      <Text>United States</Text>
                    </VStack>
                  </Stack>
                </VStack>
              </Box>

              <Box justifyContent={'center'} display={{ lgDown: 'none', lg: 'flex' }}>
                <Logo w={{ mdDown: '300px', md: '600px' }} />
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Page.Section>
      {children}
    </Page.Root>
  );
};
