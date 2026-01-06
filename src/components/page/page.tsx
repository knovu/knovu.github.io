import { forwardRef, useMemo, useRef } from 'react';
import {
  Box,
  Container,
  mergeRefs,
  VStack,
  type ContainerProps,
  type StackProps,
} from '@chakra-ui/react';
import { LABELS, MAX_WIDTH } from '@src/constants';

export interface PageSectionProps extends ContainerProps {
  variant?: 'primary' | 'secondary';
}

export const PageSection = (props: PageSectionProps) => {
  const { id, children, variant, ...rest } = props;

  const bgColor = useMemo(() => {
    let value = undefined;

    switch (variant) {
      case 'primary': {
        break;
      }
      case 'secondary': {
        value = 'gray.100';
        break;
      }
    }

    return value;
  }, [variant]);

  const dark = useMemo(() => {
    let value = undefined;

    switch (variant) {
      case 'primary': {
        break;
      }
      case 'secondary': {
        value = {
          _dark: {
            color: 'gray.200',
            bgColor: 'gray.600',
          },
        };

        break;
      }
    }

    return value;
  }, [variant]);

  return (
    <Box id={id} w={'100%'} py={5} bgColor={bgColor} {...dark}>
      <Container maxW={MAX_WIDTH} {...rest}>
        {children}
      </Container>
    </Box>
  );
};

export interface PageProps extends StackProps {
  /**
   * The title of the page. Displayed in the browser tab and used for SEO.
   * Example: "About Me | Jess Graham Portfolio"
   */
  title?: string;

  /**
   * A short description of the page. Used in meta description for search engines.
   * Example: "Portfolio page of Jess Graham, React and TypeScript developer."
   */
  description?: string;

  /**
   * The author of the page. Can be a name or URL pointing to author's profile.
   * Example: "Jess Graham" or "https://jessgraham.dev"
   */
  author?: string;

  /**
   * An array of keywords relevant to this page. Used in meta keywords for SEO.
   * Example: ["React", "TypeScript", "portfolio", "web developer"]
   */
  keywords?: string[];

  /**
   * URL of an image representing this page. Used for Open Graph and Twitter cards.
   * Example: "https://jessgraham.dev/assets/og-image.png"
   */
  imageUrl?: string;

  /**
   * Canonical URL for the page to avoid duplicate content issues.
   * Example: "https://jessgraham.dev/about"
   */
  canonicalUrl?: string;
}

export const PageRoot = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  const {
    title = 'Page',
    description,
    author,
    keywords,
    imageUrl,
    canonicalUrl,
    children,
    ...rest
  } = props;
  const pageRef = useRef(null);

  return (
    <Box w="100%">
      {/* React 19+ now supports document metadata. See: https://react.dev/blog/2024/12/05/react-19#support-for-metadata-tags */}
      <>
        <title>{title === LABELS.NAVIGATION.HOME ? 'Jess Graham' : `${title} - Jess Graham`}</title>
        {author && <meta name="author" content={author} />}
        {author && <link rel="author" href={author} />}
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords.join(', ')} />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        {imageUrl && <meta property="og:image" content={imageUrl} />}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        {description && <meta name="twitter:description" content={description} />}
        {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      </>

      {/* Page content */}
      <VStack ref={mergeRefs(ref, pageRef)} {...rest}>
        {children}
      </VStack>
    </Box>
  );
});

export const Page = {
  Root: PageRoot,
  Section: PageSection,
};
