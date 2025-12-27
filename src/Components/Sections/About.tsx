import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { useAboutAnimations } from "../../Constants/sectionAnimations";
import Header from "../Typography/Header";
import Text from "../Typography/Text";

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
  const { headerMotion, imageLeftFast, imageLeftSlow, imageRight, textMotion } =
    useAboutAnimations(scrollYProgress);
  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`
        font-accent h-[400vh] text-center mt-10 ${className} `}
    >
      <div className="sticky top-0 h-[200vh] overflow-hidden">
        <motion.div style={headerMotion}>
          <Header
            className="font-bold mb-30 lg:mb-0 lg:text-6xl xl:text-8xl"
            size="subtitle"
          >
            About
          </Header>
        </motion.div>
        <div className="relative flex flex-col items-center justify-center w-full gap-30 md:gap-15 lg:flex-row lg:justify-evenly h-200 xl:px-20">
          <div className="relative lg:relative w-100 aspect-square xl:w-150 md:w-150 ">
            <motion.img
              initial={{ visibility: "hidden" }}
              animate={{ visibility: "visible" }}
              style={{ x: imageLeftFast }}
              src="/me1.png"
              alt="Me"
              loading="lazy"
              className="max-w-1/2 md:max-w-2/3 lg:max-w-3/4"
            />
            <motion.img
              style={{ x: imageLeftSlow }}
              src="/me3.png"
              alt="Me"
              className="absolute right-10 -bottom-10 max-w-1/2 md:max-w-2/3 lg:max-w-3/4"
              loading="lazy"
            />
            <motion.div
              className="text-left lg:w-1/2"
              style={{ y: textMotion }}
            >
              <Text className="text-[16px] font-bold xl:text-[30px] ">
                Exel Boy Alfanso,
              </Text>
              <Text className="text-[12px] xl:text-[16px] font-light w-1/3 lg:w-2/3 xl:w-2/3">
                He is a third-year Computer Science student at University of
                Brawijaya
              </Text>
            </motion.div>
          </div>
          <div className="relative flex items-center justify-center">
            <motion.img
              style={{ x: imageRight }}
              src="/me2.png"
              alt="Me"
              loading="lazy"
              className="max-w-1/2 md:max-w-2/3 lg:max-w-3/4"
            />

            <motion.div
              style={{ y: textMotion }}
              className="absolute bottom-0 flex flex-col left-10 xl:-left-40"
            >
              <Text className="text-[24px] xl:text-[36px] text-left font-bold">
                FULL STACK DEVELOPER
              </Text>
              <Text className="text-[24px] xl:text-[36px] text-left font-bold">
                GAME DEVELOPER
              </Text>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
