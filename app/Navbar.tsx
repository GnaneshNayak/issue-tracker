'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import classnames from 'classnames';
import { AiFillBug } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from '@radix-ui/themes';
import { Skeleton } from '@/app/components';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" mb-7 px-6 border-b py-3 ">
      <Container>
        <Flex justify={'between'}>
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug size={25} />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();

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
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            className={classnames({
              'nav-link': true,
              '!text-zinc-900': currentPath === link.href,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') return <Skeleton width="3rem" />;

  if (status === 'unauthenticated')
    return (
      <Link className="nav-link" href={'/api/auth/signin'}>
        Login
      </Link>
    );

  return (
    <Box className="content-center">
      {status === 'authenticated' && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar
              size="2"
              radius="full"
              src={session.user!.image!}
              fallback="?"
              className="cursor-pointer"
              // referrerPolicy="no-referrer"
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              <Text size="2">{session.user!.email}</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href={'/api/auth/signout'}>Logout</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        // <Link href={'/api/auth/signout'}>Logout</Link>
      )}
    </Box>
  );
};

export default Navbar;
