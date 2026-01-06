import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';
import { useMemo } from 'react';
import { createListCollection } from '@chakra-ui/react';

export interface GithubProjectsData {
  user: {
    repositories: {
      nodes: Array<{
        name: string;
        description: string;
        url: string;
        isPrivate: boolean;

        // Topics
        repositoryTopics: {
          nodes: Array<{
            topic: {
              name: string;
            };
          }>;
        };
      }>;
    };
  };
}

export interface GithubProjectsVariables {
  login: string;
}

export const QUERY_GITHUB_PROJECTS = gql`
  query TopRepos($login: String!) {
    user(login: $login) {
      repositories(
        first: 5
        orderBy: { field: STARGAZERS, direction: DESC }
        ownerAffiliations: OWNER
        isFork: false
      ) {
        nodes {
          name
          description
          url
          isPrivate
          stargazerCount
          forkCount
          primaryLanguage {
            name
          }
          pushedAt

          # ✅ Topics
          repositoryTopics(first: 10) {
            nodes {
              topic {
                name
              }
            }
          }

          # Latest 5 pull requests
          pullRequests(first: 5, orderBy: { field: UPDATED_AT, direction: DESC }) {
            nodes {
              title
              url
              state
              merged
              updatedAt
            }
          }
        }
      }
    }
  }
`;

export const useGetProjects = () => {
  const { data, ...results } = useQuery<GithubProjectsData, GithubProjectsVariables>(
    QUERY_GITHUB_PROJECTS,
    {
      variables: {
        login: 'knovu',
      },
      context: {
        source: 'GITHUB',
      },
    },
  );

  const projects = useMemo(
    // eslint-disable-next-line react-hooks/preserve-manual-memoization
    () => {
      const allowedTopics = ['app'];

      return createListCollection({
        items:
          data?.user?.repositories.nodes.filter((project) => {
            if (project.name === 'knovu') return false;

            const topics =
              project.repositoryTopics?.nodes.map((n) => n.topic.name.toLowerCase()) ?? [];

            return topics.some((topic) => allowedTopics.includes(topic));
          }) || [],
      });
    },
    [data?.user.repositories.nodes],
  );

  const tools = useMemo(
    // eslint-disable-next-line react-hooks/preserve-manual-memoization
    () => {
      const allowedTopics = ['tool'];

      return createListCollection({
        items:
          data?.user?.repositories.nodes.filter((project) => {
            if (project.name === 'knovu') return false;

            const topics =
              project.repositoryTopics?.nodes.map((n) => n.topic.name.toLowerCase()) ?? [];

            return topics.some((topic) => allowedTopics.includes(topic));
          }) || [],
      });
    },
    [data?.user.repositories.nodes],
  );

  return {
    ...results,
    projects,
    tools,
  };
};
