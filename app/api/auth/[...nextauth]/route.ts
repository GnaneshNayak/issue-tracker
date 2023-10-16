import authOptions from '@/app/auth/authOptions';
import prisma from '@/prisma/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
