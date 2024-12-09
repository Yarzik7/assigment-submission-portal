"use client";

import React from "react";
// import { useState } from "react";
import SelectOption from "./SelectOption/SelectOption";
import type { ILevels } from "@/types/FormState.types";

interface ISelectProps {
  label: string;
  name: string;
  placeholder: string;
  options: ILevels;
}

const Select = ({ label, name, placeholder, options }: ISelectProps) => {
  //   const [isShowSelectOptions, setIsShowSelectOptions] =
  //     useState<boolean>(false);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="relative">
        <input
          id={name}
          type="text"
          placeholder={placeholder}
          readOnly
          className="w-full"
        />
        <ul>
          {options.levels.map((option) => (
            <SelectOption key={option} option={option} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
