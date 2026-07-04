import { useEffect, useRef, useState } from "react";
import { navigationItems } from "../Datas/navbarDatas";
import BurgerMenu from "./Icons/BurgerMenu";
import { useScrollSpy } from "../Hooks/useScrollSpy";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const activeSection = useScrollSpy(
    navigationItems.map((item) => item.href),
    300
  );

  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0]);

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
      if (href.startsWith("#Projects") && element) {
        console.log("Scrolling to Projects");
        element.scrollIntoView({ behavior: "smooth", block: "end" });
      } else {
        element?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    setIsOpen(false);
  }
  return (
    <nav className="flex flex-col items-center justify-center w-full mt-10">
      <motion.div
        style={{ opacity: navOpacity }}
        className="md:w-3/4 hidden md:flex justify-center items-center fixed z-10 mt-30 py-5 font-heading xs:text-[10px] xl:text-[32px] rounded-full gap-10 bg-primary transition-all"
      >
        {navigationItems.map((navItem, index) => {
          return (
            <button
              onClick={() => handleNavClick(navItem.href)}
              key={index}
              className={`cursor-pointer top-0 hover:scale-110 text-accent hover:text-accent-two transition-all duration-500 ${
                activeSection === navItem.href
                  ? "text-accent-two"
                  : "text-accent"
              } `}
            >
              {navItem.label}
            </button>
          );
        })}
      </motion.div>
      <div
        ref={sideBarRef}
        className="absolute z-10 flex justify-end w-full p-5 md:hidden"
      >
        {navigationItems.map((navItem, index) => {
          return (
            <button
              onClick={() => handleNavClick(navItem.href)}
              key={index}
              className={`cursor-pointer fixed right-0 top-0 h-full w-80 hover:scale-110 text-accent hover:text-accent-two transition-all duration-500 ${
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
          <BurgerMenu className="transition-all cursor-pointer hover:scale-130"></BurgerMenu>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
