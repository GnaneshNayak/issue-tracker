'use client';
import { Button, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssue = () => {
  const router = useRouter();

  const { handleSubmit, register, control } = useForm<IssueForm>();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues', data);
        router.push('/issues');
      })}
      className="max-w-2xl space-y-3"
    >
      {/* Title */}
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register('title')} />
      </TextField.Root>

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      <Button> Submit New Issue</Button>
    </form>
  );
};

export default NewIssue;
