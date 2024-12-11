import React from "react";

interface ISelectOptionProps {
  option: string;
  ariaSelected: boolean;
  onClick: ()=>void
}

const SelectOption = ({ option, ariaSelected, onClick }: ISelectOptionProps) => {
  return (
    <li
      role="option"
      aria-selected={ariaSelected}
      onClick={onClick}
      className="p-[5px] rounded-radius transition-colors cursor-pointer hover:bg-secondaryLight"
    >
      {option}
    </li>
  );
};

export default SelectOption;
