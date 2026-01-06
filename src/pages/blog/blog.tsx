import { type PropsWithChildren } from 'react';
import { Page } from '@src/components';
import { LABELS } from '@src/constants';
import { Heading, Text, VStack } from '@chakra-ui/react';

export type BlogProps = PropsWithChildren;

export const Blog = (props: BlogProps) => {
  const { children } = props;

  return (
    <Page.Root title={LABELS.NAVIGATION.BLOG}>
      <Page.Section variant="secondary">
        <VStack textAlign="center" gap={5} h={48} justify={'center'}>
          <Heading fontSize="4xl">Blog</Heading>
          <Text fontSize="lg" lineHeight="1.4" maxW="4xl">
            Writing about full-stack architecture, real-world tradeoffs, and lessons learned
            building production systems.
          </Text>
        </VStack>
      </Page.Section>
      <Page.Section>
        <VStack align="start" textAlign="start" gap={5} h={48} justify={'center'}>
          <Heading fontSize="4xl">Recent Blog Posts</Heading>
          <Text fontSize="lg" lineHeight="1.4" maxW="4xl">
            Writing in progress. Check back for upcoming posts on engineering, system design, and
            growing into a top-tier software engineer...
          </Text>
        </VStack>
      </Page.Section>
      {children}
    </Page.Root>
  );
};
