import { ChakraProvider } from '@chakra-ui/react';
import system from './system';
import type { PropsWithChildren } from 'react';
import { Toaster } from './toaster';
import { ColorModeProvider } from './color-mode';

export type ThemeProviderProps = PropsWithChildren;

export const ThemeProvider = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme={'light'}>
        {/* Bootstrap recipes */}
        <Toaster />
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  );
};
