import React from 'react';
import {
  Stack,
  Icon,
  Text,
  Image,
  type StackProps,
  Box
} from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';

const ProfileButton: React.FC<StackProps> = (props) => {
  return (
    <Box height="100%">
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        padding={4}
        {...props}
      >
        <Stack alignItems="center" direction="row" spacing={3}>
          <Image
            borderRadius="50%"
            height={10}
            src="//placehold.it/64x64"
            width={10}
          />
          <Stack spacing={0}>
            <Text fontSize="sm" fontWeight="bold" lineHeight="normal">
              jufa
            </Text>
            <Text fontSize="xs" lineHeight="normal" textStyle="translucid">
              @jufa205
            </Text>
          </Stack>
        </Stack>
        <Icon as={BsThreeDots} />
      </Stack>
    </Box>
  );
};

export default ProfileButton;
