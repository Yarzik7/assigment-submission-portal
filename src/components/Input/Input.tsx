import React, { InputHTMLAttributes } from "react";
import { FieldValues, FieldErrors,UseFormRegister, Path } from "react-hook-form";
import FieldMessage from "../FieldMessage/FieldMessage";

interface IInputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<T>;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
}

const Input = <T extends FieldValues>({ label, register, name, errors, ...props }: IInputProps<T>) => {
  return (
    <div className="relative flex flex-col gap-[8px]">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        className="w-full h-[40px] px-[8px] bg-bgSecondary border border-secondary rounded-radius transition-colors hover:border-secondaryLight focus:border-secondaryLight focus:outline-none focus:outline-blue-500 placeholder:text-secondary"
        {...register(name)}
        {...props}
      />
      {errors[name] && <FieldMessage message={errors[name]?.message?.toString() ?? ''} />}
    </div>
  );
};

export default Input;
