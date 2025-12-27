import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { motion, useScroll } from "motion/react";
import { useTechStackAnimations } from "../../Constants/sectionAnimations";
import { techStackDatas } from "../../Datas/techStackDatas";
import Exel from "../Exel";
import Text from "../Typography/Text";
interface TechStackProps {
  id: string;
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({ id, className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isXL, setIsXL] = React.useState(false);

  React.useEffect(() => {
    const checkXL = () => setIsXL(window.innerWidth >= 1000);
    checkXL();
    window.addEventListener("resize", checkXL);
    return () => window.removeEventListener("resize", checkXL);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const { sectionSlideLeft, rotationX, rotationY, scale, cardMotions } =
    useTechStackAnimations(
      scrollYProgress,
      techStackDatas.length,
      isXL ? 250 : 150
    );

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`h-[400vh] z-50  ${className}`}
    >
      <div className="sticky top-0 flex flex-col items-center w-full h-screen overflow-hidden lg:flex-row justify-evenly">
        <motion.div
          style={{ x: sectionSlideLeft }}
          className="z-20 flex flex-col items-start justify-start gap-10 my-20 mb-10 lg:justify-center lg:items-center lg:w-1/3"
        >
          <h1 className="text-5xl font-bold text-center text-accent lg:text-left ">
            The stack powering my work.
          </h1>
          <Text className="text-xl text-center lg:pr-20 xl:pr-40 lg:text-left">
            The tools and technologies behind how I build, ship, and scale
            products.
          </Text>
        </motion.div>
        <motion.div
          style={{ x: sectionSlideLeft }}
          className="flex flex-col items-center justify-center w-screen h-auto my-20 lg:w-1/2 aspect-square"
        >
          {techStackDatas.map((tech, index) => (
            <motion.div
              key={index}
              style={{
                opacity: cardMotions[index].opacity,
                scale: cardMotions[index].scale,
                x: cardMotions[index].x,
                y: cardMotions[index].y,
              }}
              className="absolute p-3 rounded-lg bg-primary"
            >
              <img
                src={tech.icon}
                alt={tech.label}
                className="w-5 h-5 lg:w-12 lg:h-12"
              />
            </motion.div>
          ))}
          <Canvas>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <OrbitControls enabled={false}></OrbitControls>
            <Suspense fallback={null}>
              <Exel
                rotationX={rotationX}
                rotationY={rotationY}
                scale={scale}
              ></Exel>
            </Suspense>
            <Environment preset="sunset"></Environment>
          </Canvas>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechStack;
