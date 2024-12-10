'use client';

import React, { FormEvent } from 'react';
import Input from '@/components/Input/Input';
import Textarea from '@/components/Textarea/Textarea';
import Select from '@/components/Select/Select';
import Button from '@/components/Button/Button';
import { levels } from '@/constants/formConstants';

const Form = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('onSubmit');
  };

  return (
    <form className="flex flex-col gap-[15px]" onSubmit={onSubmit}>
      <Input label="Name" name="name" type="text" placeholder="Enter name" />
      <Input label="Email" name="email" type="email" placeholder="Enter email" />
      <Textarea
        label="Assignment Description"
        name="assignment_description"
        placeholder="Enter assignment description"
      />
      <Input
        label="Github repository URL"
        name="github_repo_url"
        type="url"
        placeholder="Enter Github repository URL"
      />
      <Select label="Candidate Level" name="candidate_level" placeholder="Enter Candidate Level" options={levels} />
      <Button caption="Submit" type="submit" />
    </form>
  );
};

export default Form;
