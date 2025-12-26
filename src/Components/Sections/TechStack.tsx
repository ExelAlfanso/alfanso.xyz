import React, { useRef } from "react";
import Header from "../Typography/Header";
import Text from "../Typography/Text";
import { techStackDatas } from "../../Datas/techStackDatas";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

interface TechStackProps {
  id: string;
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({ id, className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  const sectionSlideUp = useSpring(
    useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]),
    {
      stiffness: 80,
      damping: 20,
      mass: 0.8,
    }
  );
  return (
    <>
      <div ref={sectionRef} className="h-[150vh]"></div>
      <motion.section
        id={id}
        style={{ y: sectionSlideUp }}
        className={`mb-75 fixed inset-x-0 z-50 ${className} overflow-hidden bg-primary/50`}
      >
        <Header className="mb-10 font-bold" size="subtitle">
          Tech Stack
        </Header>
        <motion.div
          style={{
            y: sectionSlideUp,
          }}
          className="flex items-center justify-center py-10 "
        >
          <motion.div className="grid grid-cols-2 gap-10 px-5 py-5 lg:grid-cols-4 ">
            {techStackDatas.map((item, idx) => (
              <motion.div key={idx}>
                <span className="flex flex-row items-center justify-center px-6 py-4 rounded-2xl bg-secondary ">
                  <img
                    className="w-auto mr-5 max-h-8 lg:max-h-12"
                    src={item.icon}
                  />
                  <Text className="text-[13px] lg:text-xl">{item.label}</Text>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default TechStack;
