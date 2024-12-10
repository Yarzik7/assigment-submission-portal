import React, { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    caption: string;
}

const Button = ({ caption, ...props }: IButtonProps) => {
    return (
      <button
        className="w-full h-[40px] px-[8px] bg-bgBtn text-bgPrimary transition-colors hover:bg-hovBtn rounded-radius focus:outline-none focus:outline-blue-500"
        {...props}
      >
        {caption}
      </button>
    );
};

export default Button;
