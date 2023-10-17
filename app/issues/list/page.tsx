import prisma from '@/prisma/client';
import { Table } from '@radix-ui/themes';

import IssueAction from './IssueAction';
import { IssueStatusBadge, Links } from '../../components';
import { Issue, Status } from '@prisma/client';
import Link from 'next/link';
import { ArrowUpIcon } from '@radix-ui/react-icons';

type Props = {
  searchParams: { status: Status; orderBy: keyof Issue };
};

const IsuuesPage = async ({ searchParams }: Props) => {
  const enumStatus = Object.values(Status);
  const status = enumStatus.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
  });

  const columns: { label: string; value: keyof Issue; className?: string }[] = [
    { label: 'Issue', value: 'title' },
    { label: 'Status', value: 'status', className: 'hidden md:table-cell' },
    { label: 'Created', value: 'createdAt', className: 'hidden md:table-cell' },
  ];

  return (
    <div>
      <IssueAction />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell
                key={column.label}
                className={column.className}
              >
                <Link
                  href={{
                    query: { ...searchParams, orderBy: column.value },
                  }}
                >
                  {column.label}
                </Link>
                {column.value === searchParams.orderBy && (
                  <ArrowUpIcon className="inline" />
                )}
              </Table.ColumnHeaderCell>
            ))}

            {/* <Table.ColumnHeaderCell className="hidden md:table-cell ">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell ">
              Created
            </Table.ColumnHeaderCell> */}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Links href={`/issues/${issue.id}`}>{issue.title}</Links>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell ">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell ">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export const dynamic = 'force-dynamic';
// export const revalidate = 0;

export default IsuuesPage;
