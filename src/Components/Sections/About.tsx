import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { useAboutAnimations } from "../../Constants/sectionAnimations";
import Header from "../Typography/Header";
import { useIsMobile } from "../../Hooks/useIsMobile";

interface AboutProps {
  id: string;
  className?: string;
}

const About: React.FC<AboutProps> = ({ id, className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const isMobile = useIsMobile();
  const {
    headerMotion,
    imageLeftFast,
    imageLeftFastMobile,
    imageLeftSlow,
    imageLeftSlowMobile,
    imageRight,
    textMotion,
  } = useAboutAnimations(scrollYProgress);
  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`
        font-accent h-[700vh] text-center mt-10 ${className} `}
    >
      <div className="sticky top-0 h-[200vh] overflow-hidden">
        <motion.div style={headerMotion}>
          <Header
            className="font-bold mb-10 lg:mb-0 text-4xl lg:text-6xl xl:text-8xl"
            size="subtitle"
          >
            About
          </Header>
        </motion.div>
        <div className="relative flex flex-col items-center justify-center w-full px-10  md:gap-15 md:flex-row md:justify-evenly ">
          <div className="relative w-100 aspect-square md:w-150">
            <motion.img
              initial={{ visibility: "hidden" }}
              animate={{ visibility: "visible" }}
              style={{ x: isMobile ? imageLeftFastMobile : imageLeftFast }}
              src="/me1.png"
              alt="Portrait of Exel Boy Alfanso"
              loading="lazy"
              decoding="async"
              className="max-w-1/3 md:max-w-2/3 lg:max-w-3/4 object-cover"
            />
            <motion.img
              style={{ x: isMobile ? imageLeftSlowMobile : imageLeftSlow }}
              src="/me3.png"
              alt="Exel Boy Alfanso working on projects"
              className="absolute right-0 bottom-20 md:right-10 md:-bottom-10 max-w-1/3 md:max-w-2/3 lg:max-w-3/4 object-cover"
              loading="lazy"
              decoding="async"
            />
            <motion.div
              className="z-10 text-left lg:w-1/2 flex flex-col items-start ml-15 md: ml-0"
              style={{ y: textMotion }}
            >
              <h3 className="text-[16px] font-bold xl:text-[30px] ">
                Exel Boy Alfanso,
              </h3>
              <p className="text-[12px] xl:text-[16px] font-light w-1/3 lg:w-2/3 xl:w-2/3">
                He is a third-year Computer Science student at University of
                Brawijaya
              </p>
            </motion.div>
          </div>
          <div className="relative flex items-center justify-center">
            <motion.img
              style={{ x: imageRight }}
              src="/me2.png"
              alt="Exel Boy Alfanso - Game Developer and Software Engineer"
              loading="lazy"
              decoding="async"
              className="max-w-1/2 md:max-w-2/3 lg:max-w-3/4 object-cover"
            />

            <motion.div
              style={{ y: textMotion }}
              className="absolute -bottom-10 md:bottom-0 flex flex-col left-10 xl:-left-40"
            >
              <p className="text-[24px] xl:text-[36px] text-left font-bold m-0 leading-tight">
                SOFTWARE ENGINEER
              </p>
              <p className="text-[24px] xl:text-[36px] text-left font-bold m-0 leading-tight">
                GAME DEVELOPER
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
