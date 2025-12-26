import React, { useRef } from "react";
import Header from "../Typography/Header";
import Text from "../Typography/Text";
import { timelineDatas } from "../../Datas/timelineDatas";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
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

  const headerY = useTransform(scrollYProgress, [0, 0.15], [24, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const headerMotion = {
    y: useSpring(headerY, {
      stiffness: 120,
      damping: 20,
    }),
    opacity: useSpring(headerOpacity, {
      stiffness: 120,
      damping: 20,
    }),
  };
  const imgMotion = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [500, 0]),
    {
      stiffness: 150,
      damping: 20,
    }
  );

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`relative z-0font-accent h-[400vh] mx-5 md:mx-20 lg:mx-30 ${className}`}
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
            className="absolute z-10 bottom-0 hidden w-40 pointer-events-none xl:block md:w-60 lg:w-auto "
            style={{ y: imgMotion }}
          />
          {timelineDatas.map((item, index) => {
            const itemMotion = useSpring(
              useTransform(
                scrollYProgress,
                [
                  0,
                  index === 0 ? 0.1 : index / timelineDatas.length,
                  (index + 1) / timelineDatas.length,
                  1,
                ],
                [500, 0, 0, 0]
              ),
              {
                stiffness: 150,
                damping: 20,
              }
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
    </motion.section>
  );
};

export default Experiences;
