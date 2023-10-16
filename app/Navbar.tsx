'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import classnames from 'classnames';
import { AiFillBug } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import { Box, Container, Flex } from '@radix-ui/themes';

type Props = {};

const Navbar = (props: Props) => {
  const currentPath = usePathname();
  const { status } = useSession();
  console.log(status);

  const links = [
    {
      label: 'Dashboard',
      href: '/',
    },
    {
      label: 'Issues',
      href: '/issues/list',
    },
  ];
  return (
    <nav className=" mb-7 px-6 border-b py-3 ">
      <Container>
        <Flex justify={'between'}>
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug size={25} />
            </Link>
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    className={classnames({
                      'text-zinc-500': currentPath !== link.href,
                      'text-zinc-900': currentPath === link.href,
                      'hover:text-zinc-800 transition-colors': true,
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Box className="content-center">
            {status === 'unauthenticated' && (
              <Link href={'/api/auth/signin'}>Login</Link>
            )}
            {status === 'authenticated' && (
              <Link href={'/api/auth/signout'}>Logout</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
