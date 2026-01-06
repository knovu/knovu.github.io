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
              <Box w={{ mdDown: '100%', md: '60%' }}>
                <VStack
                  align={{ mdDown: 'center', md: 'start' }}
                  gap={14}
                  w={{ mdDown: '100%', md: 'xl' }}
                >
                  <VStack w="100%" align={{ mdDown: 'center', md: 'start' }} gap={10}>
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

                  <VStack align={{ mdDown: 'center', md: 'inherit' }} w="100%" gap={5}>
                    <VStack align={{ mdDown: 'center', md: 'inherit' }} w="100%">
                      <Heading fontSize="2xl" fontWeight={'semibold'}>
                        Senior Software Engineer
                      </Heading>
                      <Text
                        fontSize="lg"
                        color="gray.500"
                        maxW={'sm'}
                        textAlign={{ mdDown: 'center' }}
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
                    direction={{ mdDown: 'column', md: 'row' }}
                    align={{ mdDown: 'center', md: 'start' }}
                    w="100%"
                    gap={{ mdDown: 5, md: 10 }}
                  >
                    <VStack align="start">
                      <HStack fontSize="lg">
                        <LuMail />
                        <Heading>Email</Heading>
                      </HStack>
                      <Text>jess.graham.biz@gmail.com</Text>
                    </VStack>

                    <VStack align="start">
                      <HStack fontSize="lg">
                        <LuMapPin />
                        <Heading>Location</Heading>
                      </HStack>
                      <Text>United States</Text>
                    </VStack>
                  </Stack>
                </VStack>
              </Box>

              <Box justifyContent={'center'} display={{ mdDown: 'none', md: 'flex' }}>
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
