import Image from 'next/image';
import Link from 'next/link';
import Pagination from './components/Pagination';
import LatestIssues from './LatestIssues';
import IssueSummary from './issueSummary';
import prisma from '@/prisma/client';

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: 'OPEN' } });
  const inProgress = await prisma.issue.count({
    where: { status: 'ON_PROGRESS' },
  });
  const closed = await prisma.issue.count({ where: { status: 'CLOSED' } });
  return (
    <>
      {/* <LatestIssues /> */}
      <IssueSummary open={open} closed={closed} inProgress={inProgress} />
    </>
  );
}
