import { Image, type ImageProps } from '@chakra-ui/react';
import LogoPNG from '../../assets/logo.png';
import { Tooltip } from '../ui';

export type LogoProps = Omit<ImageProps, 'src' | 'alt'>;

export const Logo = (props: LogoProps) => {
  const { ...rest } = props;

  return (
    <Tooltip content="Logo design by @madwrote">
      <Image {...rest} src={LogoPNG} alt={'Personal logo'} />
    </Tooltip>
  );
};
