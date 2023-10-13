import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: { id: string };
};

const IssueDetailPage = async ({ params: { id } }: Props) => {
  if (typeof id !== 'number') notFound();
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.createdAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailPage;
