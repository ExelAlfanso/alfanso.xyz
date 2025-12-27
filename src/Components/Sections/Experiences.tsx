import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "motion/react";
import {
  useExperiencesAnimations,
  useTimelineItemMotion,
} from "../../Constants/sectionAnimations";
import Header from "../Typography/Header";
import Text from "../Typography/Text";
import { timelineDatas } from "../../Datas/timelineDatas";
import {
  personalProjectDatas,
  collaborativeProjectDatas,
} from "../../Datas/projectDatas";
interface ExperiencesProps {
  id: string;
  className?: string;
}

const Experiences: React.FC<ExperiencesProps> = ({ id, className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const { headerMotion, headerY, slideUp, cardsAnimation, imgMotion } =
    useExperiencesAnimations(scrollYProgress);
  const projectSections = [
    { title: "Personal Works", data: personalProjectDatas },
    { title: "Collaborative Works", data: collaborativeProjectDatas },
  ];
  return (
    <div ref={sectionRef} className="relative">
      <motion.section
        id={id}
        className={`relative z-0 font-accent h-[600vh] ${className}`}
      >
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <motion.div style={headerMotion}>
            <Header
              className="w-full mx-auto mb-10 font-bold text-center md:mb-16 lg:mb-20 "
              size="subtitle"
            >
              Experiences & Achievements
            </Header>
          </motion.div>
          <motion.div className="flex flex-col items-center justify-center w-full px-5 py-5 md:py-8 lg:py-10 md:px-20 lg:px-30">
            <motion.img
              src="/me4.png"
              alt=""
              className="absolute bottom-0 z-10 hidden w-40 pointer-events-none xl:block md:w-60 lg:w-auto "
              style={{ y: imgMotion }}
            />
            {timelineDatas.map((item, index) => {
              const itemMotion = useTimelineItemMotion(
                scrollYProgress,
                index,
                timelineDatas.length
              );
              return (
                <motion.div
                  style={{ y: itemMotion }}
                  key={index}
                  className={`text-accent mb-4 md:mb-5 w-full`}
                >
                  <button className="relative w-full transition-all duration-300 group hover:scale-105">
                    <div className="flex flex-col items-start justify-between gap-2 md:flex-row-reverse md:items-center md:gap-0">
                      <Text className="font-mono transition-all text-sm md:text-lg lg:text-[24px] text-left md:text-right w-full md:w-1/3">
                        {item.label}
                      </Text>
                      <p className="text-2xl md:text-4xl lg:text-[48px] text-left md:text-center transition-all">
                        {item.year}
                      </p>
                    </div>
                    <div className="w-full border-b border-accent"></div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <motion.section
          id={"Projects"}
          style={{ y: slideUp }}
          className="sticky top-0 w-full h-screen overflow-hidden"
        >
          <div className="absolute left-0 right-0 z-50 w-full h-32 pointer-events-none -top-30 bg-gradient-to-t from-primary to-transparent"></div>

          <motion.div className="relative flex flex-col items-center justify-center w-full h-screen px-5 mb-10 overflow-hidden md:px-10 lg:px-20 bg-primary">
            <motion.div className="flex flex-col w-full gap-10 lg:flex-row md:gap-16 lg:gap-20 ">
              {projectSections.map((section) => (
                <motion.div
                  key={section.title}
                  style={{ y: cardsAnimation }}
                  className="flex-1 "
                >
                  <motion.div style={{ y: headerY }}>
                    <Header
                      className="mb-6 font-bold text-center md:mb-8 lg:mb-10 lg:text-left"
                      size="subtitle"
                    >
                      {section.title}
                    </Header>
                  </motion.div>
                  <div className="grid grid-cols-2 gap-5 mx-auto md:gap-6 lg:gap-5 ">
                    {section.data.slice(0, 4).map((item) => (
                      <motion.div
                        key={item.name}
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>
        <div className="absolute left-0 right-0 z-50 w-full h-32 pointer-events-none -bottom-30 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.section>
    </div>
  );
};

export default Experiences;
