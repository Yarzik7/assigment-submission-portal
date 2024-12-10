"use client";

import React, { useState } from "react";
import SelectOption from "./SelectOption/SelectOption";
import type { ILevels } from "@/types/FormState.types";
import { FieldValues, FieldErrors,UseFormRegister, Path } from 'react-hook-form';
import FieldMessage from "../FieldMessage/FieldMessage";

interface ISelectProps<T extends FieldValues> {
  label: string;
  placeholder: string;
  options: ILevels;
  name: Path<T>;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
}

const Select = <T extends FieldValues>({ label, name, placeholder, options, register, errors }: ISelectProps<T>) => {
  const [isShowOptions, setIsShowOptions] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>(()=>options.levels[0])

  const onToggleShowOptions = ():void => setIsShowOptions(!isShowOptions);
  const onOptionClick = (option: string): void => {
    console.log(option);
    setCurrentOption(option);
    onToggleShowOptions();
  }

  return (
    <div className="relative flex flex-col gap-[8px]">
      <label htmlFor={name}>{label}</label>
      <div className="relative">
        <input
          id={name}
          type="text"
          placeholder={placeholder}
          onClick={onToggleShowOptions}
          readOnly
          value={currentOption}
          className="w-full h-[40px] px-[8px] bg-bgSecondary border border-secondary rounded-radius transition-colors hover:border-secondaryLight focus:border-secondaryLight focus:outline-none focus:outline-blue-500 placeholder:text-secondary"
          {...register(name)}
        />
        {isShowOptions && (
          <ul className="absolute w-full mt-[8px] p-[8px] bg-bgSecondary rounded-radius">
            {options.levels.map(option => (
              <SelectOption key={option} option={option} onClick={() => onOptionClick(option)} />
            ))}
          </ul>
        )}
      </div>
      {errors[name] && <FieldMessage message={errors[name]?.message?.toString() ?? ''} />}
    </div>
  );
};

export default Select;
