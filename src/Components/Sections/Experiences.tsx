import React from "react";
import Header from "../Typography/Header";
import Text from "../Typography/Text";
import { experiencesDatas } from "../../Datas/experiencesDatas";
import { motion } from "framer-motion";
import {
  slideInRightAnimation,
  slideInLeftAnimation,
} from "../../Constants/animationVariants";
import { achievementDatas } from "../../Datas/achievementsDatas";
interface ExperiencesProps {
  id: string;
  className?: string;
}

const Experiences: React.FC<ExperiencesProps> = ({ id, className }) => {
  return (
    <section
      id={id}
      className={`  font-accent mx-30 my-60 ${className} overflow-hidden flex-col flex items-center justify-center`}
    >
      <Header
        className="w-full mx-auto mb-20 font-bold text-center"
        size="subtitle"
      >
        Experiences
      </Header>
      <div className="flex flex-col items-center justify-center w-full ">
        {/* <Header className="mb-10 font-bold " size="subtitle">
          Achievements
        </Header> */}
        <img src="/me4.png" alt="" className="absolute" />
        {experiencesDatas.map((item, index) => {
          return (
            <motion.div
              initial="initial"
              whileInView="animate"
              key={index}
              className={`text-accent mb-5 w-full`}
            >
              <div className="flex flex-row-reverse items-center justify-between ">
                <Text className="font-mono text-[24px] text-right w-1/3">
                  {item.label}
                </Text>
                <p className="text-[48px] text-center ">{item.year}</p>
              </div>
              <div className="w-full border-b border-accent"></div>
            </motion.div>
          );
        })}
        {achievementDatas.map((item, index) => {
          return (
            <motion.div
              initial="initial"
              whileInView="animate"
              key={index}
              className={`text-accent mb-5 w-full  `}
            >
              <div className="flex flex-row-reverse items-center justify-between ">
                <Text className="font-mono text-[24px] text-right w-1/3">
                  {item.label}
                </Text>
                <p className="text-[48px] text-center ">{item.year}</p>
              </div>
              <div className="w-full border-b border-accent"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;
