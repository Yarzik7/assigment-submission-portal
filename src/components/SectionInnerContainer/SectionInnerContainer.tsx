import React from "react";

interface ISectionInnerContainerProps {
  children: React.ReactNode;
}

const SectionInnerContainer = ({ children }: ISectionInnerContainerProps) => {
  return <div>{children}</div>;
};

export default SectionInnerContainer;
