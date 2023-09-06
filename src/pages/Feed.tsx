import {
  Button,
  CircularProgress,
  Divider,
  Icon,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  StackDivider,
  Text,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { BsStar } from 'react-icons/bs';
import {
  AiOutlineCalendar,
  AiOutlineFileImage,
  AiOutlineGif,
  AiOutlineSmile
} from 'react-icons/ai';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import React from 'react';

const Feed: React.FC = () => {
  const [tweets, setTweets] = React.useState<string[]>([]);

  const progressColor = useColorModeValue('gray.100', 'whiteAlpha.300');
  return (
    <Stack direction="row" divider={<StackDivider />} spacing={0} width="100%">
      <Stack divider={<StackDivider />} spacing={0} width="100%" maxWidth={600}>
        <Stack
          paddingX={4}
          paddingY={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontWeight="bold" fontSize="xl">
            Inicio
          </Text>
          <Icon color="primary.500" width={5} height={5} as={BsStar} />
        </Stack>
        <Stack direction="row" paddingY={2} paddingX={4} spacing={4}>
          <Image
            borderRadius="50%"
            height={12}
            width={12}
            src="//placehold.it/64x64"
          />
          <Stack divider={<StackDivider />} width="100%" spacing={3}>
            <Textarea variant="unstyled" fontSize="xl" fontWeight="500" />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" color="primary.400" spacing={5}>
                <Icon as={AiOutlineFileImage} height={5} width={5} />
                <Icon as={AiOutlineGif} height={5} width={5} />
                <Icon as={RiBarChartHorizontalLine} height={5} width={5} />
                <Icon as={AiOutlineSmile} height={5} width={5} />
                <Icon as={AiOutlineCalendar} height={5} width={5} />
              </Stack>
              <Stack direction="row" spacing={3}>
                <Stack
                  direction="row"
                  divider={<StackDivider />}
                  alignItems="center"
                  spacing={4}
                >
                  <CircularProgress
                    color="primary.500"
                    size={6}
                    trackColor={progressColor}
                    value={20}
                  />
                  <Button
                    fontSize="3xl"
                    fontWeight="normal"
                    width={10}
                    height={10}
                    colorScheme="primary"
                    borderRadius="50%"
                    variant="outline"
                    paddingBottom={1.5}
                  >
                    +
                  </Button>
                </Stack>
                <Button
                  colorScheme="primary"
                  onClick={() => {
                    setTweets((tweets) => tweets.concat(String(+new Date())));
                  }}
                >
                  Twittear
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider borderTopWidth={6} borderBottomWidth={6}></Divider>
        <Stack
          divider={<StackDivider />}
          flex={1}
          maxHeight="100vh"
          overflowY="auto"
          spacing={0}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <AnimatePresence>
            {tweets.map((id) => (
              <Stack
                onClick={() => {
                  setTweets((tweets) => tweets.filter((tweet) => tweet !== id));
                }}
                as={motion.div}
                key={id}
                layoutId={String(id)}
                spacing={4}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                direction="row"
                maxWidth={480}
                padding={4}
                width="100%"
              >
                <SkeletonCircle
                  startColor="whiteAlpha.200"
                  endColor="whiteAlpha.200"
                  height={12}
                  minHeight={12}
                  minWidth={12}
                  width={12}
                />
                <Stack spacing={4} width="100%">
                  <Stack alignItems="flex-end" direction="row" spacing={2}>
                    <Skeleton
                      startColor="whiteAlpha.200"
                      endColor="whiteAlpha.200"
                      height={6}
                      width="120px"
                    />
                    <Skeleton
                      startColor="whiteAlpha.200"
                      endColor="whiteAlpha.200"
                      height={3}
                      width="80px"
                    />
                  </Stack>
                  <SkeletonText height="100%" noOfLines={6} spacing={2} />
                </Stack>
              </Stack>
            ))}
          </AnimatePresence>
        </Stack>
      </Stack>
      <Text maxWidth={350} width="100%">
        {''}
      </Text>
    </Stack>
  );
};

export default Feed;
