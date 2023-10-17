'use client';
import { Status } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';
import router from 'next/router';

type Props = {};

const statuses: { label: string; value?: Status }[] = [
  { label: 'All' },
  { label: 'Open', value: 'OPEN' },
  { label: 'In Progress', value: 'ON_PROGRESS' },
  { label: 'Closed', value: 'CLOSED' },
];

const IssueStatusFilter = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select.Root
      defaultValue={searchParams.get('status') || 'null'}
      onValueChange={(status) => {
        const params = new URLSearchParams();
        if (status !== 'null') params.append('status', status);

        if (searchParams.get('orderBy'))
          params.append('orderBy', searchParams.get('orderBy')!);

        const query = params.size ? '?' + params.toString() : '';
        router.push(`/issues/list` + query);
      }}
    >
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item
            key={status.label}
            value={status.value || 'null'}
            placeholder=""
          >
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
