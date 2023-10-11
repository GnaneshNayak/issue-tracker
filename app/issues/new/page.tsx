'use client';
import { Button, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

type Props = {};

const NewIssue = (props: Props) => {
  return (
    <div className="max-w-2xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button> Submit New Issue</Button>
    </div>
  );
};

export default NewIssue;
