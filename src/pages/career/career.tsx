import { useCallback, useState, type PropsWithChildren } from 'react';
import { Page } from '@src/components';
import { LABELS, PRODUCTS } from '@src/constants';
import { Heading, Tabs, Text, VStack, type TabsValueChangeDetails } from '@chakra-ui/react';
import { ProductShowcase } from './components';
import { getTabFromHash } from './utils';
import type { Tab } from '@src/@types';

export type CareerProps = PropsWithChildren;

export const Career = (props: CareerProps) => {
  const { children } = props;
  const [value, setValue] = useState<Tab>(() => getTabFromHash());

  const onValueChange = useCallback((details: TabsValueChangeDetails) => {
    const nextValue = details.value as Tab;

    setValue(nextValue);

    // Update URL hash without reloading
    window.history.replaceState(null, '', `#${nextValue}`);
  }, []);

  return (
    <Page.Root title={LABELS.NAVIGATION.CAREER}>
      <Page.Section variant="secondary">
        <VStack textAlign="center" gap={5} h={48} justify={'center'}>
          <Heading fontSize="4xl">Career</Heading>
          <Text fontSize="lg" lineHeight="1.4" maxW="4xl">
            I build scalable, maintainable full-stack systems using TypeScript, React, and Node.js.
            Experienced in modernizing legacy codebases and owning production features end-to-end.
          </Text>
        </VStack>
      </Page.Section>
      <Page.Section variant="primary">
        <Tabs.Root lazyMount unmountOnExit value={value} onValueChange={onValueChange}>
          <Tabs.List gap={5}>
            {PRODUCTS.map((product, idx) => (
              <Tabs.Trigger value={product.value} key={`tab-${idx}`}>
                {product.label}
                <Text as="span" display={{ lgDown: 'none', lg: 'inline' }}>
                  ({String(product.startDate)} - {String(product.endDate)})
                </Text>
              </Tabs.Trigger>
            ))}
            <Tabs.Indicator />
          </Tabs.List>
          {PRODUCTS.map((product, idx) => (
            <Tabs.Content value={product.value} key={`tab-content-${idx}`}>
              <ProductShowcase
                product={product.label}
                description={product.description}
                link={product.link}
                element={product.element}
                startDate={product.startDate}
                endDate={product.endDate}
                deliverables={product.experience}
                job={product.job}
              />
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </Page.Section>
      {children}
    </Page.Root>
  );
};
