import { type PropsWithChildren } from 'react';
import { ApolloClient, ApolloLink } from '@apollo/client';
import { ApolloProvider as ApolloClientProvider } from '@apollo/client/react';
import { InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';
import type { Datasource } from '@src/@types';
import { config } from '@src/config';

export interface ApolloContext extends Readonly<ApolloLink.OperationContext> {
  source?: Datasource;
}

const githubLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${config.github.token}`,
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.split(
    (op) => (op.getContext() as ApolloContext).source === 'GITHUB',
    githubLink,
  ),
});

export type ApolloProviderProps = PropsWithChildren;

export const ApolloProvider = (props: ApolloProviderProps) => {
  const { children } = props;

  return <ApolloClientProvider client={client}>{children}</ApolloClientProvider>;
};
