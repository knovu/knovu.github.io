import { forwardRef, useRef } from 'react';
import { Link as ChakraLink, mergeRefs, type LinkProps } from '@chakra-ui/react';
import { Link, useMatch, type To } from 'react-router';
import { Tooltip } from './tooltip';

export interface NavLinkProps extends LinkProps {
  to: To;
  tooltip?: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
  const { children, to, tooltip, ...rest } = props;
  const linkRef = useRef<HTMLAnchorElement>(null);
  const matches = useMatch(String(to));

  return (
    <Tooltip content={tooltip} disabled={!tooltip}>
      <ChakraLink
        {...rest}
        ref={mergeRefs(ref, linkRef)}
        asChild
        color={typeof children === 'string' && matches ? 'jg.600' : rest.color}
      >
        <Link to={to}>{children}</Link>
      </ChakraLink>
    </Tooltip>
  );
});
