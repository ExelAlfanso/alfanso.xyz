import React from "react";
import Text from "./Typography/Text.tsx";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  href: string;
  isExternal?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  href = "#Hero",
  isExternal = false,
}) => {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (href.startsWith("#") && !isExternal) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else if (isExternal) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = href;
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`lg:text-3xl xl:text-5xl xl:border-2 z-10 ${className} text-accent hover:text-white cursor-pointer rounded-full font-bold border-1 border-accent hover:border-white bg-transparent px-5 lg:px-7 py-1 lg:py-3`}
    >
      <h1>{children}</h1>
    </button>
  );
};

export default Button;
