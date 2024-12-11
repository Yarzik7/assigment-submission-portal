import React from 'react';
import clsx from 'clsx';

type TMessageTypes = 'success' | 'error' | 'info';

interface IAppMessageProps {
    children: React.ReactNode;
    type?: TMessageTypes
}

const AppMessage = ({ children, type = 'success' }: IAppMessageProps) => {
  return (
    <p
      role="alert"
      className={clsx('py-[10px] text-[16px] leading-none text-center', {
        'text-success': type === 'success',
        'text-error': type === 'error',
        'text-info': type === 'info',
      })}
    >
      {children}
    </p>
  );
};

export default AppMessage;
