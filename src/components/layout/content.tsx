import { type PropsWithChildren } from 'react';
import { Box, VStack } from '@chakra-ui/react';

export type ContentProps = PropsWithChildren;

export const Content = (props: ContentProps) => {
  const { children } = props;

  return (
    <Box id="content" w={'100%'} flex={1}>
      <VStack w="100%">{children}</VStack>
    </Box>
  );
};
