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
      <Header className="mb-10 font-bold" size="subtitle">
        Tech Stack
      </Header>
      <div className="flex items-center justify-center py-10 bg-primary/50">
        <div className="grid grid-cols-2 gap-10 px-5 py-5 lg:grid-cols-4 ">
          {techStackDatas.map((item, idx) => (
            <div key={idx}>
              <span className="flex flex-row items-center justify-center px-6 py-4 rounded-2xl bg-secondary ">
                <img
                  className="w-auto mr-5 max-h-8 lg:max-h-12"
                  src={item.icon}
                />
                <Text className="text-[13px] lg:text-xl">{item.label}</Text>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
