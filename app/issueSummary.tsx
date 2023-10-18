import { Status } from '@prisma/client';
import { Card, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { IssueStatusBadge } from './components';

type Props = {
  open: number;
  closed: number;
  inProgress: number;
};

const IssueSummary = ({ open, closed, inProgress }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: 'Open Issues', value: open, status: 'OPEN' },
    { label: 'In-Progress Issues', value: inProgress, status: 'ON_PROGRESS' },
    { label: 'Closed Issues', value: closed, status: 'CLOSED' },
  ];
  return (
    <Flex gap="4">
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction="column" gap="1">
            <Link
              className="text-sm font-medium space-y-1"
              href={`issues/list?status=${container.status}`}
            >
              {container.label}
            </Link>
            <Flex gap="1">
              <Text size="5" className="font-bold">
                {container.value}
              </Text>
              <IssueStatusBadge status={container.status} />
            </Flex>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
