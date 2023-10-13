import { Skeleton } from '@/app/components';
import { Box, Card, Flex, Heading } from '@radix-ui/themes';

type Props = {};

const LoadingIssueDetailPage = (props: Props) => {
  return (
    <Box className="max-w-xl">
      <Heading>
        <Skeleton />
      </Heading>
      <Flex gap="3" my={'2'}>
        <Skeleton width={'5rem'} />

        <Skeleton width={'8rem'} />
      </Flex>
      <Card className="prose" mt="5">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
