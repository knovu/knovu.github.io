import { type PropsWithChildren } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { Header } from './header';
import { Content } from './content';
import { Footer } from './footer';
import { Sidebar } from './sidebar';

export type LayoutProps = PropsWithChildren;

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <Box>
      <Sidebar /> {/* fixed, no longer part of HStack */}
      <Box ml={{ mdDown: 0, md: 85 }}>
        {/* push content right of sidebar */}
        <VStack w="100%" minH="100vh" gap={0}>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </VStack>
      </Box>
    </Box>
  );
};
