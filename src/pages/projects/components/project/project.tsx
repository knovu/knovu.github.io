import { Button, Card, Text, VStack } from '@chakra-ui/react';
import { NavLink } from '@src/components';
import { FaGithub } from 'react-icons/fa';

export interface ProjectProps {
  name?: string;
  description?: string;
  url?: string;
  isPrivate?: boolean;
}

export const Project = (props: ProjectProps) => {
  const { name, description, url, isPrivate } = props;

  return (
    <Card.Root w="100%">
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Header>
      <Card.Body>
        <VStack justify="end" align="start" h="100%">
          {isPrivate && <Text color={'red.400'}>Currently private — public release planned.</Text>}
        </VStack>
      </Card.Body>
      <Card.Footer>
        {isPrivate ? (
          <Button disabled={isPrivate}>
            <FaGithub />
            Project
          </Button>
        ) : (
          <NavLink target="_blank" tooltip={`Visit ${name} repo`} to={url || '/'}>
            <Button disabled={isPrivate}>
              <FaGithub />
              Project
            </Button>
          </NavLink>
        )}
      </Card.Footer>
    </Card.Root>
  );
};
