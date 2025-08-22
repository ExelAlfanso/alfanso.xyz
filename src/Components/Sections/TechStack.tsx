import React from "react";
import Header from "../Typography/Header";
import Text from "../Typography/Text";
import { techStackDatas } from "../../Datas/techStackDatas";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../Constants/animationVariants";

interface TechStackProps {
  id: string;
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({ id, className }) => {
  return (
    <motion.section
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      id={id}
      className={`mb-75 ${className} overflow-hidden`}
    >
      <Header className="font-bold mb-10" size="subtitle">
        TECH STACK
      </Header>
      <div className="flex items-center justify-center py-10 bg-primary/50">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-5 px-5 ">
          {techStackDatas.map((item) => (
            <div key={item.id}>
              <span className="flex flex-row items-center justify-center rounded-2xl bg-secondary px-6 py-4 ">
                <img
                  className="max-h-8 w-auto lg:max-h-12 mr-5"
                  src={item.icon}
                  alt=""
                />
                <Text className="text-xl lg:text-[8px] xl:text-[20px]">
                  {item.label}
                </Text>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
