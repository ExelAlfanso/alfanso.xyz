import React, { useState } from "react";
import Header from "../Typography/Header.tsx";
import Text from "../Typography/Text.tsx";
import "../../../node_modules/swiper/swiper.css";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInAnimation } from "../../Constants/animationVariants.ts";
import { projectDatas } from "../../Datas/projectDatas.ts";
import { Link } from "react-router-dom";
import Chip from "../Chip.tsx";
import { ChevronsDown, ChevronsUp } from "lucide-react";

interface ProjectsProps {
  id: string;
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id, className }) => {
  const [viewAll, setViewAll] = useState(false);
  const visibleProjects = viewAll ? projectDatas : projectDatas.slice(0, 3);
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
      <Header className="font-bold mb-10" size="subtitle">
        PROJECTS
      </Header>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-5 items-center justify-center mx-auto">
        <AnimatePresence>
          {visibleProjects.map((item, index) => (
            <motion.div
              key={item.name}
              variants={cardAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4, delay: index * 0.1 }}
              layout
              className="flex flex-col items-center justify-center mb-10 lg:mb-0 h-150 bg-primary/50 rounded-3xl"
            >
              <Header
                size="description"
                className="text-2xl lg:text-3xl font-bold font-heading"
              >
                {item.name}
              </Header>
              <Header size="description" className="font-accent mb-5 text-xl">
                {`<--<- ${item.category} >->-->`}
              </Header>
              <Link
                to={item.href}
                target="_blank"
                className="w-80 lg:w-90 lg:h-56"
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover rounded-3xl mb-3"
                />
              </Link>
              <Text className="text-center font-p max-w-100 px-15 mt-5">
                {item.description.toUpperCase()}
              </Text>
              <div className="grid grid-cols-2 items-center justify-center gap-2 mt-3">
                {item.categories.map((cat, index) => (
                  <Chip
                    key={index}
                    className="text-black text-xs font-p px-3 py-2 mb-2"
                  >
                    {cat.toUpperCase()}
                  </Chip>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="mt-10 cursor-pointer"
        onClick={() => setViewAll(!viewAll)}
      >
        {!viewAll ? (
          <ChevronsDown className=" text-accent hover:text-accent-two hover:scale-110 transition-normal duration-300 size-20" />
        ) : (
          <ChevronsUp className=" text-accent hover:text-accent-two hover:scale-110 transition-normal duration-300 size-20" />
        )}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
