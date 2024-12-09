import React, { TextareaHTMLAttributes } from "react";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea = ({ label, ...props }: ITextareaProps) => {
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <textarea
        id={props.name}
        className="w-full resize-none"
        {...props}
      ></textarea>
    </div>
  );
};

export default Textarea;
