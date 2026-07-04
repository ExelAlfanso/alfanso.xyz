import { type MotionValue, motion, useScroll } from "motion/react";
import type React from "react";
import { useRef, useState } from "react";
import Header from "../../../Components/typography/header";
import Text from "../../../Components/typography/text";
import {
  useExperiencesAnimations,
  useTimelineItemMotion,
} from "../../../constants/section-animations";
import ProjectsSection from "../../projects/components/projects-section";
import {
  collaborativeProjectDatas,
  personalProjectDatas,
} from "../../projects/data/project-data";
import type { ProjectItem } from "../../projects/types/project";
import { timelineDatas } from "../data/timeline-data";

interface ExperiencesProps {
  className?: string;
  id: string;
}

const Experiences: React.FC<ExperiencesProps> = ({ id, className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
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

  function openProjectModal(project: ProjectItem, trigger: HTMLButtonElement) {
    projectTriggerRef.current = trigger;
    setActiveProject(project);
  }

  function closeProjectModal() {
    setActiveProject(null);
    requestAnimationFrame(() => projectTriggerRef.current?.focus());
  }

  return (
    <div className="relative" ref={sectionRef}>
      <motion.section
        className={`relative z-0 h-[700vh] font-accent md:h-[600vh] ${className}`}
        id={id}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div style={headerMotion}>
            <Header
              className="mx-auto mb-10 w-full text-center font-bold xl:mb-20"
              size="subtitle"
            >
              Experiences & Achievements
            </Header>
          </motion.div>
          <motion.div className="flex w-full flex-col items-center justify-center px-5 py-5 lg:px-30">
            <motion.img
              alt=""
              className="pointer-events-none absolute bottom-0 z-10 hidden w-40 md:w-60 lg:w-auto xl:block"
              decoding="async"
              loading="lazy"
              src="/me4.png"
              style={{ y: imgMotion }}
            />
            {timelineDatas.map((item, index) => (
              <TimelineRow
                index={index}
                item={item}
                key={`${item.year}-${item.label}`}
                scrollYProgress={scrollYProgress}
                total={timelineDatas.length}
              />
            ))}
          </motion.div>
        </div>

        <ProjectsSection
          activeProject={activeProject}
          cardsAnimation={cardsAnimation}
          headerY={headerY}
          onCloseProject={closeProjectModal}
          onOpenProject={openProjectModal}
          sections={projectSections}
          slideUp={slideUp}
        />

        <div className="pointer-events-none absolute right-0 -bottom-30 left-0 z-50 h-32 w-full bg-gradient-to-b from-primary to-transparent" />
      </motion.section>
    </div>
  );
};

function TimelineRow({
  item,
  index,
  total,
  scrollYProgress,
}: {
  item: (typeof timelineDatas)[number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const itemMotion = useTimelineItemMotion(scrollYProgress, index, total);

  return (
    <motion.div
      className="mb-4 w-full text-accent md:mb-5"
      style={{ y: itemMotion }}
    >
      <div className="relative w-full cursor-default transition-transform duration-300 hover:scale-105">
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row-reverse md:items-center md:gap-0">
          <Text className="w-full text-left font-mono text-sm md:w-1/3 md:text-right md:text-lg lg:text-[24px]">
            {item.label}
          </Text>
          <p className="text-left text-2xl md:text-center md:text-4xl lg:text-[48px]">
            {item.year}
          </p>
        </div>
        <div className="w-full border-accent border-b" />
      </div>
    </motion.div>
  );
}

export default Experiences;
