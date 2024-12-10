import React from "react";

interface ISelectOptionProps {
  option: string;
  onClick: ()=>void
}

const SelectOption = ({ option, onClick }: ISelectOptionProps) => {
  return (
    <li onClick={onClick} className="p-[5px] rounded-radius transition-colors cursor-pointer hover:bg-secondary">
      {option}
    </li>
  );
};

export default SelectOption;
