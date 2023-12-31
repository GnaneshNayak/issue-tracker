import prisma from '@/prisma/client';
import { Box, Flex, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import EditIssueButton from './EditIssueButton';
import IssueDetail from './IssueDetail';
import DeleteIssueButton from './DeleteIssueButton';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/auth/authOptions';
import AssigneeSelect from './AssigneeSelect';
import { Metadata } from 'next';
import { cache } from 'react';

type Props = {
  params: { id: string };
};

const fetchUser = cache((issueId: number) => {
  return prisma.issue.findUnique({
    where: {
      id: issueId,
    },
  });
});

const IssueDetailPage = async ({ params: { id } }: Props) => {
  // if (typeof id !== 'number') return notFound();
  const session = await getServerSession(authOptions);

  // const issue = await prisma.issue.findUnique({
  //   where: {
  //     id: parseInt(id),
  //   },
  // });
  const issue = await fetchUser(parseInt(id));

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: '1', sm: '5' }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetail issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect issue={issue} />
            <EditIssueButton issueId={parseInt(id)} />
            <DeleteIssueButton issueId={parseInt(id)} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export default IssueDetailPage;

export async function generateMetadata({ params }: Props) {
  const issue = await fetchUser(parseInt(params.id));
  return {
    title: issue?.title,
    description: 'Details of issues' + issue?.id,
  };
}
