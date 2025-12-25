import React from "react";
import Header from "../Typography/Header";
import Text from "../Typography/Text";
import { motion } from "framer-motion";

interface AboutProps {
  id: string;
  className?: string;
}

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
    duration: 1000,
  },
  animate: {
    opacity: 1,
    y: 0,
    duration: 1000,
  },
};
const About: React.FC<AboutProps> = ({ id, className }) => {
  return (
    <motion.section
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id={id}
      className={`
        font-accent xl:mx-40 mb-30 text-center ${className}`}
    >
      <Header className="font-bold lg:text-6xl xl:text-8xl" size="subtitle">
        About
      </Header>
      <div className="relative flex flex-col items-center justify-center w-full gap-30 md:gap-15 lg:flex-row lg:justify-between h-200 xl:px-20">
        <div className="relative w-100 xl:w-150 md:w-150 ">
          <img
            src="/me1.png"
            alt="Me"
            loading="lazy"
            className="max-w-1/2 md:max-w-2/3 lg:max-w-3/4"
          />
          <img
            src="/me3.png"
            alt="Me"
            className="absolute right-5 -bottom-10 max-w-1/2 md:max-w-2/3 lg:max-w-3/4"
            loading="lazy"
          />
          <div className="text-left lg:w-1/2">
            <Text className="text-[16px] font-bold xl:text-[30px] ">
              Exel Boy Alfanso,
            </Text>
            <Text className="text-[12px] xl:text-[16px] font-light w-1/3 lg:w-2/3 xl:w-2/3">
              He is a third-year Computer Science student at University of
              Brawijaya
            </Text>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-80 lg:w-100 xl:w-110">
          <img src="/me2.png" alt="Me" loading="lazy" />
          <div className="absolute bottom-0 flex flex-col -left-10 xl:-left-40">
            <Text className="text-[24px] xl:text-[36px] text-left font-bold">
              FULL STACK DEVELOPER
            </Text>
            <Text className="text-[24px] xl:text-[36px] text-left font-bold">
              GAME DEVELOPER
            </Text>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
