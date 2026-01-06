import { type PropsWithChildren } from 'react';
import { Page } from '@src/components';
import { LABELS } from '@src/constants';
import { Heading, SimpleGrid, Spinner, Text, VStack } from '@chakra-ui/react';
import { useGetProjects } from './api';
import { Project } from './components';

export type ProjectsProps = PropsWithChildren;

export const Projects = (props: ProjectsProps) => {
  const { children } = props;
  const { projects, tools, loading } = useGetProjects();

  return (
    <Page.Root title={LABELS.NAVIGATION.PROJECTS} author="">
      <Page.Section variant="secondary">
        <VStack textAlign="center" gap={5} h={48} justify={'center'}>
          <Heading fontSize="4xl">Projects</Heading>
          <Text fontSize="lg" lineHeight="1.4" maxW="4xl">
            A curated selection of projects that highlight how I think, design, and build software —
            not just what I code.
          </Text>
        </VStack>
      </Page.Section>
      <Page.Section>
        <VStack align="start">
          <Heading>Full-Stack Projects</Heading>
          {loading ? (
            <VStack align="start" w="100%">
              <Spinner color={'jg.700'} />
              <Text>Loading latest projects from my GitHub...</Text>
            </VStack>
          ) : (
            <SimpleGrid columns={{ mdDown: 1, lgDown: 2, lg: 4 }} gap={5}>
              {projects.items.map((project, idx) => (
                <Project
                  key={`project-${idx}`}
                  name={project.name}
                  description={project.description}
                  url={project.url}
                  isPrivate={project.isPrivate}
                />
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Page.Section>

      <Page.Section>
        <VStack align="start">
          <Heading>Tools</Heading>
          {loading ? (
            <VStack align="start" w="100%">
              <Spinner color={'jg.700'} />
              <Text>Loading latest tools from my GitHub...</Text>
            </VStack>
          ) : (
            <SimpleGrid w="100%" columns={{ base: 1, md: 2, lg: 4 }} gap={5} alignItems="stretch">
              {tools.items.map((tool, idx) => (
                <Project
                  key={`project-${idx}`}
                  name={tool.name}
                  description={tool.description}
                  url={tool.url}
                  isPrivate={tool.isPrivate}
                />
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Page.Section>
      {children}
    </Page.Root>
  );
};
