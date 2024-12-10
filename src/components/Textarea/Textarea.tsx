import React, { TextareaHTMLAttributes } from "react";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea = ({ label, ...props }: ITextareaProps) => {
  return (
    <div>
      <label htmlFor={props.name} className="block mb-[8px]">
        {label}
      </label>
      <textarea
        id={props.name}
        className={`w-full h-[100px] px-[8px] bg-bgSecondary border border-secondary rounded-radius transition-colors hover:border-secondaryLight focus:outline-none focus:outline-blue-500 placeholder:text-secondary resize-none`}
        {...props}
      ></textarea>
    </div>
  );
};

export default Textarea;
