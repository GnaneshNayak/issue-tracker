'use client';
import { Status } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import React from 'react';

type Props = {};

const statuses: { label: string; value?: Status }[] = [
  { label: 'All' },
  { label: 'Open', value: 'OPEN' },
  { label: 'In Progress', value: 'ON_PROGRESS' },
  { label: 'Closed', value: 'CLOSED' },
];

const IssueStatusFilter = (props: Props) => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item
            key={status.value}
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
