import { createSystem, defineConfig, defaultConfig, defineRecipe } from '@chakra-ui/react';

// Add theme overrides here in the system config
const config = defineConfig({
  cssVarsPrefix: 'jg',
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Outfit Variable' },
        body: { value: 'Outfit Variable' },
      },
      colors: {
        jg: {
          50: { value: '#f0fcff' },
          100: { value: '#c3f5fd' },
          200: { value: '#9bf0fb' },
          300: { value: '#74ebfa' },
          400: { value: '#4de6f8' },
          500: { value: '#26e1f7' },
          600: { value: '#1dc3d7' },
          700: { value: '#159cb4' },
          800: { value: '#0d768f' },
          900: { value: '#064f69' },
          950: { value: '#02333f' },
        },
      },
    },
    recipes: {
      button: defineRecipe({
        base: {
          borderRadius: 'lg',
        },
        variants: {
          variant: {
            solid: {
              bg: 'jg.400',
              color: 'black',
              _hover: {
                bg: 'jg.200',
              },
            },
          },
        },
      }),
    },
  },
});

// Extends the default system
const system = createSystem(defaultConfig, config);

export default system;
