"use client";

import React, { useState } from "react";
import SelectOption from "./SelectOption/SelectOption";
import type { ILevels } from "@/types/FormState.types";

interface ISelectProps {
  label: string;
  name: string;
  placeholder: string;
  options: ILevels;
}

const Select = ({ label, name, placeholder, options }: ISelectProps) => {
  const [isShowOptions, setIsShowOptions] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>(()=>options.levels[0])

  const onToggleShowOptions = ():void => setIsShowOptions(!isShowOptions);
  const onOptionClick = (option: string): void => {
    console.log(option);
    setCurrentOption(option);
    onToggleShowOptions();
  }

  return (
    <div>
      <label htmlFor={name} className="block mb-[8px]">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          type="text"
          placeholder={placeholder}
          onClick={onToggleShowOptions}
          readOnly
          value={currentOption}
          className="w-full h-[40px] px-[8px] bg-bgSecondary border border-secondary rounded-radius transition-colors hover:border-secondaryLight focus:outline-none focus:outline-blue-500 placeholder:text-secondary"
        />
        {isShowOptions && (
          <ul className="absolute w-full mt-[8px] p-[8px] bg-bgSecondary rounded-radius">
            {options.levels.map(option => (
              <SelectOption key={option} option={option} onClick={() => onOptionClick(option)} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
