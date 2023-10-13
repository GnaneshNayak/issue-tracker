import NextLink from 'next/link';
import { Link as RadixLink } from '@radix-ui/themes';

import React from 'react';

type Props = {
  href: string;
  children: string;
};

const Links = ({ href, children }: Props) => {
  return (
    <div>
      <NextLink href={href} passHref legacyBehavior>
        <RadixLink>{children}</RadixLink>
      </NextLink>
    </div>
  );
};

export default Links;
