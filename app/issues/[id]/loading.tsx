import IssueStatusBadge from '@/app/components/issueStatusBadge';
import { Heading, Flex, Card, Text, Box } from '@radix-ui/themes';
import React from 'react';
import Markdown from 'react-markdown';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import delay from 'delay';

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
