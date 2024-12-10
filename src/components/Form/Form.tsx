'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Input from '@/components/Input/Input';
import Textarea from '@/components/Textarea/Textarea';
import Select from '@/components/Select/Select';
import Button from '@/components/Button/Button';
import { levels } from '@/constants/formConstants';
import { IFormState } from '@/types/FormState.types';
import { formSchema } from '@/utils/validation/formValidationSchema';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormState>({
    resolver: joiResolver(formSchema),
    mode: 'all',
  });

  const onSubmit = (data: IFormState): void => {
    console.log('Form data: ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="flex flex-col gap-[18px] mb-[30px]">
        <Input<IFormState>
          label="Name"
          name="name"
          type="text"
          placeholder="Enter name"
          register={register}
          errors={errors}
        />

        <Input<IFormState>
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          register={register}
          errors={errors}
        />

        <Textarea<IFormState>
          label="Assignment Description"
          name="assignment_description"
          placeholder="Enter assignment description"
          register={register}
          errors={errors}
        />

        <Input<IFormState>
          label="Github repository URL"
          name="github_repo_url"
          type="url"
          placeholder="Enter Github repository URL"
          register={register}
          errors={errors}
        />
        
        <Select<IFormState>
          label="Candidate Level"
          name="candidate_level"
          placeholder="Enter Candidate Level"
          options={levels}
          register={register}
          errors={errors}
        />
      </fieldset>

      <Button caption="Submit" type="submit" />
    </form>
  );
};

export default Form;
