import React from "react";
import Header from "../Typography/Header.tsx";
import Text from "../Typography/Text.tsx";
import "../../../../node_modules/swiper/swiper.css";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../../Constants/animationVariants.ts";

import { projectDatas } from "../../../Datas/projectDatas.ts";
import { Link } from "react-router-dom";

interface ProjectsProps {
  id: string;
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id, className }) => {
  return (
    <motion.section
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      id={id}
      className={`mb-10 overflow-hidden ${className} flex flex-col items-center justify-center`}
    >
      <Header className="font-bold mb-10" size="subtitle">
        PROJECTS
      </Header>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-5 items-center justify-center mx-auto">
        {projectDatas.map((item) => (
          <div className="flex flex-col items-center justify-center mb-10 lg:mb-0">
            <Header
              size="description"
              className="text-2xl lg:text-4xl font-bold font-heading"
            >
              {item.name}
            </Header>
            <Header size="description" className="font-accent mb-5">
              {`<--<- ${item.category} >->-->`}
            </Header>
            <Link to={item.href} target="_blank">
              <img
                src={item.img}
                className="max-w-80 xl:max-w-100 rounded-3xl mb-3"
              />
            </Link>

            <Text className="text-center font-p max-w-100 px-15">
              {item.description}
            </Text>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
