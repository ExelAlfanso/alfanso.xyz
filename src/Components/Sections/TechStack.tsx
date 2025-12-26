import React, { useRef, Suspense } from "react";
import Header from "../Typography/Header";
import Text from "../Typography/Text";
import { techStackDatas } from "../../Datas/techStackDatas";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Exel from "../../../public/textures/Exel";
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
    offset: ["start center", "end center"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  const sectionSlideLeft = useSpring(
    useTransform(scrollYProgress, [0, 0.1], ["-110vw", "0"]),
    {
      stiffness: 80,
      damping: 20,
      mass: 0.8,
    }
  );

  const rotationY = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 1, Math.PI * 1.5]),
    {
      stiffness: 80,
      damping: 20,
      mass: 0.8,
    }
  );
  const rotationX = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 1, 0]),
    {
      stiffness: 80,
      damping: 20,
      mass: 0.8,
    }
  );
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 10]), {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });

  const cardsAnimation = techStackDatas.map((_, index) => {
    const angle = (index / techStackDatas.length) * Math.PI * 2;
    const distance = 300;
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;

    return {
      opacity: useSpring(useTransform(scrollYProgress, [0.1, 0.3], [0, 1]), {
        stiffness: 100,
        damping: 20,
      }),
      scale: useSpring(useTransform(scrollYProgress, [0.1, 0.3], [0.5, 1]), {
        stiffness: 100,
        damping: 20,
      }),
      x: useSpring(useTransform(scrollYProgress, [0.1, 0.5], [0, offsetX]), {
        stiffness: 80,
        damping: 20,
      }),
      y: useSpring(useTransform(scrollYProgress, [0.1, 0.5], [0, offsetY]), {
        stiffness: 80,
        damping: 20,
      }),
    };
  });

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`h-[200vh]  z-50  ${className}`}
    >
      <div className="sticky top-0 w-full h-screen flex items-center justify-evenly overflow-hidden">
        <motion.div
          style={{ x: sectionSlideLeft }}
          className="mb-10 z-20 w-1/3 my-20"
        >
          <Header className="font-bold text-left" size="subtitle">
            The stack powering my work.
          </Header>
          <Text className="text-xl">
            The tools and technologies behind how I build, ship, and scale
            products.
          </Text>
        </motion.div>
        <motion.div
          style={{ x: sectionSlideLeft }}
          className="flex flex-col items-center justify-center my-20"
        >
          {techStackDatas.map((tech, index) => (
            <motion.div
              key={index}
              style={{
                opacity: cardsAnimation[index].opacity,
                scale: cardsAnimation[index].scale,
                x: cardsAnimation[index].x,
                y: cardsAnimation[index].y,
              }}
              className="absolute bg-primary rounded-lg p-3"
            >
              <img src={tech.icon} alt={tech.label} className="w-12 h-12" />
            </motion.div>
          ))}
          <Canvas className="absolute w-full h-full -z-10">
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <OrbitControls enabled={false}></OrbitControls>
            {/* <Suspense fallback={null}>
              <Exel
                rotationX={rotationX}
                rotationY={rotationY}
                scale={scale}
              ></Exel>
            </Suspense> */}
            <mesh
              rotation={[rotationX.get(), rotationY.get(), 0]}
              scale={scale.get()}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#646cff" />
            </mesh>
            <Environment preset="sunset"></Environment>
          </Canvas>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechStack;
