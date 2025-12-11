import React from "react";
import Header from "../Typography/Header";
import Text from "../Typography/Text";
import { experiencesDatas } from "../../Datas/experiencesDatas";
import { motion } from "framer-motion";
import {
  slideInRightAnimation,
  slideInLeftAnimation,
} from "../../Constants/animationVariants";
interface ExperiencesProps {
  id: string;
  className?: string;
}

const Experiences: React.FC<ExperiencesProps> = ({ id, className }) => {
  return (
    <section
      id={id}
      className={`font-accent mx-15 lg:mx-60 mb-60 ${className} overflow-hidden`}
    >
      <Header className="font-bold mb-10 " size="subtitle">
        EXPERIENCES
      </Header>
      <Text>
        {experiencesDatas.map((item, index) => {
          const layoutClass =
            index % 2 == 0
              ? "lg:flex-row-reverse lg:text-right"
              : "lg:flex-row lg:text-left";
          return (
            <motion.div
              variants={
                index % 2 == 0 ? slideInLeftAnimation : slideInRightAnimation
              }
              initial="initial"
              whileInView="animate"
              key={index}
              className={`flex flex-col ${layoutClass} items-center justify-center text-xl lg:text-2xl text-center mb-5 `}
            >
              <div className="flex flex-col items-center justify-center lg:block font-heading lg:text-2xl xl:text-4xl w-80 lg:w-150">
                <span className="font-bold mx-2">{item.labelOne}</span>
                <span className="font-accent">{item.labelAccent}</span>
                <span className="font-bold mx-2 ">{item.labelTwo}</span>
              </div>
              <div className=" font-bold mx-2 lg:text-3xl xl:text-6xl mb-6 lg:mb-12 font-heading">
                {item.year}
              </div>
            </motion.div>
          );
        })}
      </Text>
    </section>
  );
};

export default Experiences;
