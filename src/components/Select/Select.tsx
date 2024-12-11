'use client';

import React, { useState, useRef, useEffect } from 'react';
import SelectOption from './SelectOption/SelectOption';
import { FaChevronDown } from 'react-icons/fa6';
import type { TLevels } from '@/types/FormState.types';
import { FieldValues, FieldErrors, UseFormRegister, Path } from 'react-hook-form';
import FieldMessage from '../FieldMessage/FieldMessage';

interface ISelectProps<T extends FieldValues> {
  label: string;
  placeholder: string;
  options: TLevels[];
  name: Path<T>;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
}

const Select = <T extends FieldValues>({ label, name, placeholder, options, register, errors }: ISelectProps<T>) => {
  const [isShowOptions, setIsShowOptions] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>(() => options[0]);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const onToggleShowOptions = (): void => setIsShowOptions(!isShowOptions);

   const handleOutsideClick = (event: MouseEvent) => {
     if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
       setIsShowOptions(false);
     }
   };

  const onOptionClick = (option: string): void => {
    setCurrentOption(option);
    onToggleShowOptions();
  };

   useEffect(() => {
     document.addEventListener('mousedown', handleOutsideClick);

     return () => {
       document.removeEventListener('mousedown', handleOutsideClick);
     };
   }, []);

  return (
    <div ref={selectRef} className="relative flex flex-col gap-[8px]">
      <label htmlFor={name}>{label}</label>
      <div className="relative">
        <input
          id={name}
          type="text"
          placeholder={placeholder}
          onClick={onToggleShowOptions}
          readOnly
          role="select"
          value={currentOption}
          className="w-full h-[40px] px-[8px] bg-bgSecondary border border-secondary rounded-radius transition-colors hover:border-secondaryLight focus:border-secondaryLight focus:outline-none focus:outline-blue-500 placeholder:text-secondary"
          {...register(name)}
        />

        {isShowOptions && (
          <ul className="absolute w-full mt-[8px] p-[8px] bg-secondary rounded-radius">
            {options.map(option => (
              <SelectOption
                key={option}
                ariaSelected={currentOption === option}
                option={option}
                onClick={() => onOptionClick(option)}
              />
            ))}
          </ul>
        )}
      </div>

      <button type="button" onClick={onToggleShowOptions} className="absolute w-[40px] h-[40px] bottom-0 right-0 rounded-radius">
        <FaChevronDown />
      </button>
      {errors[name] && <FieldMessage message={errors[name]?.message?.toString() ?? ''} />}
    </div>
  );
};

export default Select;
