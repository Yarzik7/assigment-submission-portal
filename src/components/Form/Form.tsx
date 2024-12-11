'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Input from '@/components/Input/Input';
import Textarea from '@/components/Textarea/Textarea';
import Select from '@/components/Select/Select';
import Button from '@/components/Button/Button';
import Loader from '../Loader/Loader';
import AppMessage from '../AppMessage/AppMessage';
import { TLevels } from '@/types/FormState.types';
import { IFormState } from '@/types/FormState.types';
import { formSchema } from '@/utils/validation/formValidationSchema';
import { onPostAssignment } from '@/utils/api/onPostAssignment';
import { IPostAssignmentResponse, IPostAssignmentError } from '@/utils/api/onPostAssignment';

interface IFormProps {
  levels: TLevels[];
}

const Form = ({ levels }: IFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormState>({
    resolver: joiResolver(formSchema),
    mode: 'all',
  });

  const onSubmit = async (data: IFormState): Promise<void> => {
    setIsError(false);
    setIsSubmitting(true);

    const postAssignmentResponse: IPostAssignmentResponse | IPostAssignmentError = await onPostAssignment(data);

    setIsSubmitting(false);

    if ('errors' in postAssignmentResponse || 'error' in postAssignmentResponse) {
      setIsError(true);
      return;
    }

    router.push('thank-you');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={isSubmitting} className="flex flex-col gap-[18px] mb-[30px]">
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

      {isError && <AppMessage type="error">Failed to send assignment data!</AppMessage>}

      <Button type="submit" disabled={isSubmitting}>
        Submit
        {isSubmitting && <Loader />}
      </Button>
    </form>
  );
};

export default Form;
