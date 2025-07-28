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
        font-accent mx-15 mb-60 ${className}`}
    >
      <Header
        className="lg:text-6xl xl:text-8xl font-bold mb-10"
        size="subtitle"
      >
        ABOUT
      </Header>
      <div className="flex flex-col items-center justify-center ">
        <Text className="lg:text-left text-center lg:text-[24px] xl:text-[36px] lg:w-120 xl:w-180">
          <Header
            className="font-accent lg:text-left lg:text-5xl xl:text-6xl"
            size="description"
          >
            hELLO i’M eXEL,
          </Header>
          I'm a developer experienced in
          <span className="font-bold mx-2">WEB, APP, AND GAME DEVELOPMENT</span>
          for 3 years. Current exploring the world of
          <span className=" font-bold mx-2">WEB DEVELOPMENT</span>
          and i'm open to collaborations that blend design and code.
        </Text>
      </div>
    </motion.section>
  );
};

export default About;
