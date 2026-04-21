import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
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
  type ProjectItems,
} from "../../Datas/projectDatas";
interface ExperiencesProps {
  id: string;
  className?: string;
}

const Experiences: React.FC<ExperiencesProps> = ({ id, className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<ProjectItems | null>(null);
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

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  function openProjectModal(project: ProjectItems) {
    setActiveProject(project);
  }

  function getProjectImagePath(imgPath: string) {
    return imgPath.startsWith("/") ? imgPath : `/${imgPath}`;
  }

  return (
    <div ref={sectionRef} className="relative">
      <motion.section
        id={id}
        className={`relative z-0 font-accent h-[700vh] md:h-[600vh] ${className}`}
      >
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <motion.div style={headerMotion}>
            <Header
              className="w-full mx-auto mb-10 font-bold text-center xl:mb-20 "
              size="subtitle"
            >
              Experiences & Achievements
            </Header>
          </motion.div>
          <motion.div className="flex flex-col items-center justify-center w-full px-5 py-5 lg:px-30">
            <motion.img
              src="/me4.png"
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute bottom-0 z-10 hidden w-40 pointer-events-none xl:block md:w-60 lg:w-auto "
              style={{ y: imgMotion }}
            />
            {timelineDatas.map((item, index) => {
              const itemMotion = useTimelineItemMotion(
                scrollYProgress,
                index,
                timelineDatas.length,
              );
              return (
                <motion.div
                  style={{ y: itemMotion }}
                  key={index}
                  className={`text-accent mb-4 md:mb-5 w-full`}
                >
                  <div className="relative w-full transition-all duration-300 cursor-default group hover:scale-105">
                    <div className="flex flex-col items-start justify-between gap-2 md:flex-row-reverse md:items-center md:gap-0">
                      <Text className="font-mono transition-all text-sm md:text-lg lg:text-[24px] text-left md:text-right w-full md:w-1/3">
                        {item.label}
                      </Text>
                      <p className="text-2xl md:text-4xl lg:text-[48px] text-left md:text-center transition-all">
                        {item.year}
                      </p>
                    </div>
                    <div className="w-full border-b border-accent"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <motion.section
          id={"Projects"}
          style={{ y: slideUp }}
          className="sticky top-0 w-full h-screen"
        >
          <div className="absolute left-0 right-0 z-50 w-full h-32 pointer-events-none -top-30 bg-gradient-to-t from-primary to-transparent"></div>

          <motion.div className="relative flex flex-col items-center justify-center w-full h-screen overflow-y-auto px-5 mb-10 md:px-10 lg:px-20 bg-primary no-scrollbar">
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
                    {section.data.map((item) => (
                      <motion.div
                        key={item.name}
                        layout
                        className="flex flex-col items-start justify-center w-full mb-6 md:mb-8 lg:mb-0 group"
                      >
                        <button
                          type="button"
                          onClick={() => openProjectModal(item)}
                          className="relative block w-full overflow-hidden rounded-sm cursor-pointer aspect-video"
                        >
                          <img
                            src={getProjectImagePath(item.img)}
                            alt={`${item.name} project screenshot`}
                            loading="lazy"
                            decoding="async"
                            className="object-cover w-full h-full transition-transform duration-300 rounded-sm group-hover:scale-110"
                          />
                          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black/0 group-hover:bg-black/40">
                            <span className="text-sm font-bold text-white transition-opacity duration-300 opacity-0 md:text-base lg:text-lg font-accent group-hover:opacity-100">
                              View Project
                            </span>
                          </div>
                        </button>
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
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm md:p-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 30 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto border rounded-xl border-accent/20 bg-secondary/95 p-5 shadow-2xl md:p-8 no-scrollbar"
              >
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close project details modal"
                  className="absolute z-10 flex items-center justify-center w-10 h-10 text-xl transition-colors border rounded-full cursor-pointer right-4 top-4 border-accent/40 text-accent hover:text-white hover:border-white"
                >
                  X
                </button>

                <div className="grid items-start grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                  <div>
                    <img
                      src={getProjectImagePath(activeProject.img)}
                      alt={`${activeProject.name} full preview`}
                      className="object-cover w-full rounded-lg aspect-video"
                    />
                  </div>

                  <div className="flex flex-col gap-5">
                    <Text className="text-xs tracking-[0.22em] uppercase md:text-sm text-accent-two">
                      {activeProject.category}
                    </Text>

                    <h3
                      id="project-modal-title"
                      className="text-3xl leading-tight md:text-4xl text-accent"
                    >
                      {activeProject.name}
                    </h3>

                    <p className="text-sm leading-relaxed md:text-base font-mono text-accent/95">
                      {activeProject.description}
                    </p>

                    <div>
                      <p className="mb-2 text-xs tracking-[0.18em] uppercase md:text-sm text-accent/80">
                        Categories
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.categories.map((category) => (
                          <span
                            key={category}
                            className="px-3 py-1 text-xs border rounded-full md:text-sm border-accent/40 bg-primary/60 text-accent font-mono"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-1">
                      <a
                        href={activeProject.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-semibold transition-colors border rounded-full md:text-base border-accent text-accent hover:text-white hover:border-white"
                      >
                        Visit Project
                      </a>
                      <p className="mt-3 text-xs break-all md:text-sm text-accent/70 font-mono">
                        URL: {activeProject.href}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute left-0 right-0 z-50 w-full h-32 pointer-events-none -bottom-30 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.section>
    </div>
  );
};

export default Experiences;
