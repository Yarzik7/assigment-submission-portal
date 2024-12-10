import React, { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: IInputProps) => {
  return (
    <div>
      <label htmlFor={props.name} className="block mb-[8px]">
        {label}
      </label>
      <input
        id={props.name}
        className="w-full h-[40px] px-[8px] bg-bgSecondary border border-secondary rounded-radius transition-colors hover:border-secondaryLight focus:outline-none focus:outline-blue-500 placeholder:text-secondary"
        {...props}
      />
    </div>
  );
};

export default Input;
