import Image from 'next/image';
import Link from 'next/link';
import Pagination from './components/Pagination';
import LatestIssues from './LatestIssues';
import IssueSummary from './issueSummary';
import prisma from '@/prisma/client';
import IssueChart from './IssueChart';
import { Flex, Grid } from '@radix-ui/themes';
import { Metadata } from 'next';

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: 'OPEN' } });
  const inProgress = await prisma.issue.count({
    where: { status: 'ON_PROGRESS' },
  });
  const closed = await prisma.issue.count({ where: { status: 'CLOSED' } });
  return (
    <Grid columns={{ initial: '1', md: '2' }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary open={open} closed={closed} inProgress={inProgress} />
        <IssueChart open={open} closed={closed} inProgress={inProgress} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

export const metadata: Metadata = {
  title: 'Issue Tracker - Dashboard',
  description: 'View a summary of project issues',
};
