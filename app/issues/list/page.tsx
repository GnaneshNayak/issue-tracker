import prisma from '@/prisma/client';

import { Status } from '@prisma/client';
import IssueAction from './IssueAction';

import Pagination from '@/app/components/Pagination';
import IssueTable, { IssueQuery, columnNames } from './IssueTable';
import { Flex } from '@radix-ui/themes';

type Props = {
  searchParams: IssueQuery;
};

const IsuuesPage = async ({ searchParams }: Props) => {
  const enumStatus = Object.values(Status);
  const status = enumStatus.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const where = { status };

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: 'asc' }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  const issueCount = await prisma.issue.count({
    where,
  });

  return (
    <Flex direction="column" gap="3">
      <IssueAction />
      <IssueTable searchParams={searchParams} issues={issues} />

      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </Flex>
  );
};

export const dynamic = 'force-dynamic';
// export const revalidate = 0;

export default IsuuesPage;
