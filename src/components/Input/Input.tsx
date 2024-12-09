import React, { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: IInputProps) => {
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <input id={props.name} className="w-full" {...props} />
    </div>
  );
};

export default Input;
