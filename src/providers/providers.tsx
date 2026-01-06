import { type PropsWithChildren } from 'react';
import { ThemeProvider } from '../components';
import { ApolloProvider } from './apollo';
import { RouterProvider } from './router';

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <ThemeProvider>
      <ApolloProvider>
        <RouterProvider />
        {children}
      </ApolloProvider>
    </ThemeProvider>
  );
};
