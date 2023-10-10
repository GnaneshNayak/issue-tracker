'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import classnames from 'classnames';
import { AiFillBug } from 'react-icons/ai';

type Props = {};

const Navbar = (props: Props) => {
  const currentPath = usePathname();

  const links = [
    {
      label: 'Dashboard',
      href: '/',
    },
    {
      label: 'Issues',
      href: '/issues',
    },
  ];
  return (
    <nav className="flex space-x-6 mb-7 px-6 border-b h-14 items-center ">
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
    </nav>
  );
};

export default Navbar;
