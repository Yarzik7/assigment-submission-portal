import React, { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: IButtonProps) => {
    return (
      <button
        className="w-full h-[40px] px-[8px] bg-bgBtn text-bgPrimary transition-colors hover:bg-hovBtn rounded-radius focus:outline-none focus:outline-blue-500"
        {...props}
      >
        {children}
      </button>
    );
};

export default Button;
