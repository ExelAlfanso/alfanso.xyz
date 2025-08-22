import { useEffect, useRef, useState } from "react";
import { navigationItems } from "../Datas/navbarDatas";
import BurgerMenu from "./Icons/BurgerMenu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }
  function handleNavClick(href: string) {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    setIsOpen(false);
  }
  return (
    <nav ref={sideBarRef} className="w-full flex justify-end p-5 absolute z-10">
      {navigationItems.map((navItem, index) => {
        return (
          <button
            onClick={() => handleNavClick(navItem.href)}
            key={index}
            className={`cursor-pointer fixed right-0 top-0 h-full w-80 hover:scale-110 text-accent hover:text-accent-two transition-transform duration-500 ${
              navItem.bg
            } ${isOpen ? navItem.translate : "translate-x-full"}`}
          >
            <h1 className="-rotate-90 origin-top-left z-10 absolute top-180 text-[2rem] lg:text-[3rem] font-accent">
              {`<<<<<<${navItem.label.toUpperCase()}>>>>>>`}
            </h1>
          </button>
        );
      })}
      <button onClick={handleClick}>
        <BurgerMenu className="hover:scale-130  cursor-pointer transition-all"></BurgerMenu>
      </button>
    </nav>
  );
};

export default Navbar;
