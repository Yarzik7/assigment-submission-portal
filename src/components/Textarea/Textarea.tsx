import React, { TextareaHTMLAttributes } from "react";
import { FieldValues, FieldErrors,UseFormRegister, Path } from 'react-hook-form';
import FieldMessage from "../FieldMessage/FieldMessage";

interface ITextareaProps<T extends FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: Path<T>;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
}

const Textarea = <T extends FieldValues>({ label, name, register, errors, ...props }: ITextareaProps<T>) => {
  return (
    <div className="relative flex flex-col gap-[8px]">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        className={`w-full h-[100px] px-[8px] bg-bgSecondary border border-secondary rounded-radius transition-colors hover:border-secondaryLight focus:border-secondaryLight focus:outline-none focus:outline-blue-500 placeholder:text-secondary resize-none`}
        {...register(name)}
        {...props}
      ></textarea>
      {errors[name] && <FieldMessage message={errors[name]?.message?.toString() ?? ''} />}
    </div>
  );
};

export default Textarea;
