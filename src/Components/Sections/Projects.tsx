import React from "react";
import Header from "../Typography/Header.tsx";
import "../../../node_modules/swiper/swiper.css";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInAnimation } from "../../Constants/animationVariants.ts";
import {
  collaborativeProjectDatas,
  personalProjectDatas,
} from "../../Datas/projectDatas.ts";
import { Link } from "react-router-dom";

interface ProjectsProps {
  id: string;
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id, className }) => {
  const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  return (
    <motion.section
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      id={id}
      className={`mb-10 overflow-hidden ${className} flex flex-col items-center justify-center`}
    >
      <div className="flex flex-row">
        <div>
          <AnimatePresence>
            <Header className="mb-10 font-bold" size="subtitle">
              Personal Works
            </Header>
            <div className="flex flex-col items-center justify-center mx-auto lg:grid lg:grid-cols-3 lg:gap-5">
              {personalProjectDatas.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={cardAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  layout
                  className="flex flex-col items-center justify-center mb-10 lg:mb-0"
                >
                  <Link
                    to={item.href}
                    target="_blank"
                    className="w-80 lg:w-60 lg:h-30"
                  >
                    <img
                      src={item.img}
                      className="object-cover w-full h-full mb-3 rounded-sm"
                    />
                  </Link>
                  <Header
                    size="description"
                    className="w-full font-mono text-xl text-left"
                  >
                    {item.name}
                  </Header>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
        <div>
          <AnimatePresence>
            <Header className="mb-10 font-bold" size="subtitle">
              Collaborative Works
            </Header>
            <div className="flex flex-col items-center justify-center mx-auto lg:grid lg:grid-cols-3 lg:gap-5">
              {collaborativeProjectDatas.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={cardAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  layout
                  className="flex flex-col items-center justify-center mb-10 lg:mb-0"
                >
                  <Link
                    to={item.href}
                    target="_blank"
                    className="w-85 lg:w-60 lg:h-30"
                  >
                    <img
                      src={item.img}
                      className="object-cover w-full h-full mb-3 rounded-sm"
                    />
                  </Link>
                  <Header
                    size="description"
                    className="w-full font-mono text-xl text-left"
                  >
                    {item.name}
                  </Header>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
