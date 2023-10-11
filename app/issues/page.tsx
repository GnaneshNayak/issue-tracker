import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

type Props = {};

const IsuuesPage = (props: Props) => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IsuuesPage;
