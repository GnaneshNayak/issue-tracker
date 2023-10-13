import IssueStatusBadge from '@/app/components/issueStatusBadge';
import prisma from '@/prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: { id: string };
};

const IssueDetailPage = async ({ params: { id } }: Props) => {
  // if (typeof id !== 'number') return notFound();

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="3" my={'2'}>
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        <p>{issue.status}</p>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
