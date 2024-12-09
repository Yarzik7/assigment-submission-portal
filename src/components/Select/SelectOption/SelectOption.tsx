import React from "react";

interface ISelectOptionProps {
  option: string;
}

const SelectOption = ({ option }: ISelectOptionProps) => {
  return <li>{option}</li>;
};

export default SelectOption;
