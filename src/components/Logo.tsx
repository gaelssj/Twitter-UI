import { Icon, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { BsTwitter } from 'react-icons/bs';

const Logo: React.FC = (props) => {
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue('primary.500', undefined);
  return (
    <Icon
      color={logoColor}
      as={BsTwitter}
      width={7}
      height={7}
      onClick={toggleColorMode}
      {...props}
    />
  );
};

export default Logo;
