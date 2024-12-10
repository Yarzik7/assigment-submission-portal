import React from 'react';

interface IFieldMessageProps {
  message: string;
}

const FieldMessage = ({ message }: IFieldMessageProps) => {
  return <p className='absolute top-[104%] text-xs text-error leading-none'>{message}</p>;
};

export default FieldMessage;
