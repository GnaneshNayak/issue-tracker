import { Avatar, Table } from '@radix-ui/themes';
import { IssueStatusBadge, Links } from '../../components';
import Link from 'next/link';
import { ArrowUpIcon } from '@radix-ui/react-icons';
import { Issue, Status, User } from '@prisma/client';

export interface IssueQuery {
  status: Status;
  orderBy: keyof Issue;
  page: string;
}

type Props = {
  searchParams: IssueQuery;
  issues: Issue[];
};

const IssueTable = ({ searchParams, issues }: Props) => {
  return (
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
                  query: {
                    ...searchParams,
                    orderBy: column.value,
                    type: 'asc',
                  },
                }}
              >
                {column.label}
              </Link>
              {column.value === searchParams.orderBy && (
                <ArrowUpIcon className="inline" />
              )}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue: any) => (
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
            <Table.Cell className="hidden md:table-cell ">
              {issue.assignedToUser && (
                <Avatar
                  src={issue.assignedToUser.image!}
                  fallback="?"
                  size="2"
                  radius="full"
                />
              )}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default IssueTable;

const columns: { label: string; value?: keyof Issue; className?: string }[] = [
  { label: 'Issue', value: 'title' },
  { label: 'Status', value: 'status', className: 'hidden md:table-cell' },
  { label: 'Created', value: 'createdAt', className: 'hidden md:table-cell' },
  {
    label: 'Assigned to',
    value: 'assignedToUserId',
    className: 'hidden md:table-cell',
  },
];

export const columnNames = columns.map((column) => column.value);
