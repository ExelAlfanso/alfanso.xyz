import React from "react";

interface TextProps {
  children?: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <div className={`text-accent text-base ${className}`}>{children} </div>
  );
};

export default Text;
