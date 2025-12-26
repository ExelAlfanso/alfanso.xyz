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

  const projectSections = [
    { title: "Personal Works", data: personalProjectDatas },
    { title: "Collaborative Works", data: collaborativeProjectDatas },
  ];

  return (
    <motion.section
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      id={id}
      className={`mb-10 px-5 md:px-10 lg:px-20 overflow-hidden ${className} flex flex-col items-center justify-center`}
    >
      <div className="flex flex-col w-full gap-10 lg:flex-row md:gap-16 lg:gap-20">
        <AnimatePresence>
          {projectSections.map((section) => (
            <div key={section.title} className="flex-1">
              <Header
                className="mb-6 font-bold text-center md:mb-8 lg:mb-10 lg:text-left"
                size="subtitle"
              >
                {section.title}
              </Header>
              <div className="flex flex-col items-center justify-center gap-5 mx-auto md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-6 lg:gap-5">
                {section.data.slice(0, 4).map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={cardAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    layout
                    className="flex flex-col items-start justify-center w-full mb-6 md:mb-8 lg:mb-0 group"
                  >
                    <Link
                      to={item.href}
                      target="_blank"
                      className="relative block w-full overflow-hidden rounded-sm aspect-video"
                    >
                      <img
                        src={item.img}
                        className="object-cover w-full h-full transition-transform duration-300 rounded-sm group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black/0 group-hover:bg-black/40">
                        <span className="text-sm font-bold text-white transition-opacity duration-300 opacity-0 md:text-base lg:text-lg font-accent group-hover:opacity-100">
                          View Project
                        </span>
                      </div>
                    </Link>
                    <Header
                      size="description"
                      className="w-full mt-2 font-mono text-base text-left transition-colors duration-300 md:mt-3 md:text-lg lg:text-xl group-hover:text-accent"
                    >
                      {item.name}
                    </Header>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projects;
