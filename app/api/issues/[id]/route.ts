import { issueSchema } from '@/app/validationSchemas';
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

interface Props {
  params: { id: string };
}
export async function PATCH(req: NextRequest, { params: { id } }: Props) {
  const body = await req.json();
  const validation = issueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issue) {
    return NextResponse.json({ error: 'Invalid issue' }, { status: 400 });
  }

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      ...body,
    },
  });

  return NextResponse.json(updatedIssue);
}
export async function DELETE(req: NextRequest, { params: { id } }: Props) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issue) {
    return NextResponse.json({ error: 'Invalid issue' }, { status: 400 });
  }

  const deleteIssue = await prisma.issue.delete({
    where: { id: issue.id },
  });

  return NextResponse.json({ message: 'deleted' }, { status: 200 });
}
