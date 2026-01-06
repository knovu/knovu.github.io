import { forwardRef, useRef } from 'react';
import {
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Image,
  List,
  mergeRefs,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { NavLink } from '@src/components';
import { LuCircleCheck } from 'react-icons/lu';

export interface ProductShowcaseProps {
  product?: string;
  description?: string;
  link?: string;
  deliverables?: string[];
  element?: string;
  startDate?: Date | string;
  endDate?: Date | string;
  job?: string;
}

export const ProductShowcase = forwardRef<HTMLDivElement, ProductShowcaseProps>((props, ref) => {
  const { product, description, job, link, deliverables, element, startDate, endDate } = props;
  const innerRef = useRef<HTMLDivElement>(null);

  return (
    <Box ref={mergeRefs(ref, innerRef)} py={5}>
      <Stack
        w="100%"
        direction={{ lgDown: 'column', lg: 'row' }}
        gap={{ lgDown: 5 }}
        justify="space-evenly"
      >
        <VStack align="start" gap={5}>
          <VStack align="start" display={{ lgDown: 'block', lg: 'none' }}>
            <Heading>
              {product}
              <Text as="span" display={{ lgDown: 'inline', lg: 'none' }}>
                {' '}
                | {String(startDate)} - {String(endDate)}
              </Text>
            </Heading>

            <Text maxW={{ lgDown: 'lg', lg: 'lg' }}>{description}</Text>
          </VStack>

          <Image src={element} alt={product} />
        </VStack>

        {/* Product information */}
        <VStack align="start">
          <VStack align="start">
            <VStack align="start" display={{ lgDown: 'none', lg: 'block' }}>
              <Heading>{product}</Heading>
              <Heading fontSize={'lg'} color={'jg.700'}>
                {job}
              </Heading>
              <Text maxW={{ lgDown: 'lg', lg: 'lg' }}>{description}</Text>
            </VStack>

            <Box bgColor={'gray.100'} _dark={{ bgColor: 'gray.200' }} borderRadius={'lg'}>
              <Card.Root w={{ lgDown: 'xs', lg: 'lg' }}>
                <Card.Header>Experience</Card.Header>
                <Card.Body>
                  <List.Root variant="plain" gap={2}>
                    {deliverables ? (
                      deliverables.map((task) => (
                        <List.Item>
                          <HStack>
                            <List.Indicator color="jg.600">
                              <LuCircleCheck />
                            </List.Indicator>
                            {task}
                          </HStack>
                        </List.Item>
                      ))
                    ) : (
                      <List.Item>
                        <List.Indicator asChild color="jg.600">
                          <LuCircleCheck />
                        </List.Indicator>
                        Unavailable
                      </List.Item>
                    )}
                  </List.Root>
                </Card.Body>
              </Card.Root>
            </Box>
          </VStack>

          <NavLink to={link || '/'} target="_blank" tooltip={`Visit ${product} website`}>
            <Button>See more for info</Button>
          </NavLink>
        </VStack>
      </Stack>
    </Box>
  );
});
