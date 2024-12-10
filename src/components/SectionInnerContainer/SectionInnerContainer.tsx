import React from "react";

interface ISectionInnerContainerProps {
  children: React.ReactNode;
}

const SectionInnerContainer = ({ children }: ISectionInnerContainerProps) => {
  return <div className="my-0 mx-auto px-[15px] sm:max-w-[480px]">{children}</div>;
};

export default SectionInnerContainer;
