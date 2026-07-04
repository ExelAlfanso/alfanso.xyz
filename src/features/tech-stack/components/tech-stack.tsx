import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { type MotionValue, motion, useScroll } from "motion/react";
import React, { Suspense, useRef } from "react";
import Text from "../../../Components/typography/text";
import {
  useTechStackAnimations,
  useTechStackCardMotion,
} from "../../../constants/section-animations";
import { techStackDatas } from "../data/tech-stack-data";
import type { TechStackItem } from "../types/tech-stack";
import Exel from "./exel";

interface TechStackProps {
  className?: string;
  id: string;
}

const TechStack: React.FC<TechStackProps> = ({ id, className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isXL, setIsXL] = React.useState(false);
  const [isMdUp, setIsMdUp] = React.useState(false);

  React.useEffect(() => {
    const updateBreakpoints = () => {
      const width = window.innerWidth;
      setIsXL(width >= 1000);
      setIsMdUp(width >= 768);
    };

    updateBreakpoints();
    window.addEventListener("resize", updateBreakpoints);
    return () => window.removeEventListener("resize", updateBreakpoints);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const { sectionSlideLeft, sectionSlideUp, rotationX, rotationY, scale } =
    useTechStackAnimations(scrollYProgress);

  const sectionMotionStyle = isMdUp
    ? { x: sectionSlideLeft }
    : { y: sectionSlideUp };

  return (
    <motion.section
      className={`z-50 h-[400vh] ${className}`}
      id={id}
      ref={sectionRef}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-evenly lg:flex-row">
        <motion.div
          className="z-20 my-20 mb-10 flex flex-col items-center justify-start gap-10 px-20 md:px-0 lg:w-1/3 lg:items-start lg:justify-center"
          style={sectionMotionStyle}
        >
          <h1 className="text-center font-bold text-4xl text-accent lg:text-left">
            The stack powering my work.
          </h1>
          <Text className="text-center text-xl lg:pr-20 lg:text-left xl:pr-40">
            The tools and technologies behind how I build, ship, and scale
            products.
          </Text>
        </motion.div>
        <motion.div
          className="flex aspect-square h-auto w-screen flex-col items-center justify-center md:mb-20 lg:w-1/2"
          style={sectionMotionStyle}
        >
          {techStackDatas.map((tech, index) => (
            <TechStackIcon
              index={index}
              key={tech.label}
              radius={isXL ? 250 : 150}
              scrollYProgress={scrollYProgress}
              tech={tech}
              total={techStackDatas.length}
            />
          ))}
          <Canvas>
            <ambientLight intensity={0.8} />
            <directionalLight intensity={1} position={[5, 5, 5]} />
            <OrbitControls enabled={false} />
            <Suspense fallback={null}>
              <Exel rotationX={rotationX} rotationY={rotationY} scale={scale} />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </motion.div>
      </div>
    </motion.section>
  );
};

function TechStackIcon({
  tech,
  index,
  total,
  radius,
  scrollYProgress,
}: {
  tech: TechStackItem;
  index: number;
  total: number;
  radius: number;
  scrollYProgress: MotionValue<number>;
}) {
  const cardMotion = useTechStackCardMotion(
    scrollYProgress,
    index,
    total,
    radius
  );

  return (
    <motion.div
      className="absolute rounded-lg bg-primary p-3"
      style={cardMotion}
    >
      <img
        alt={tech.label}
        className="h-5 w-5 lg:h-12 lg:w-12"
        src={tech.icon}
      />
    </motion.div>
  );
}

export default TechStack;
