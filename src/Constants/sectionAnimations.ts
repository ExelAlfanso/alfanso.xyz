import { MotionValue, useSpring, useTransform } from "motion/react";

export const useAboutAnimations = (scrollYProgress: MotionValue<number>) => {
  const slideFromLeft = useSpring(
    useTransform(scrollYProgress, [0, 0.6], ["-40vw", "0vw"]),
    { stiffness: 120, damping: 20 }
  );

  const slideFromRight = useSpring(
    useTransform(scrollYProgress, [0, 0.6], ["40vw", "0vw"]),
    { stiffness: 120, damping: 25 }
  );

  const imageLeftFast = slideFromLeft;
  const imageLeftSlow = useSpring(
    useTransform(scrollYProgress, [0, 0.35], ["-40vw", "0vw"]),
    { stiffness: 120, damping: 25 }
  );
  const imageRight = slideFromRight;
  const textMotion = useSpring(
    useTransform(scrollYProgress, [0, 0.7], [1000, 0]),
    {
      stiffness: 150,
      damping: 20,
    }
  );
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

  return { headerMotion, imageLeftFast, imageLeftSlow, imageRight, textMotion };
};

export const useExperiencesAnimations = (
  scrollYProgress: MotionValue<number>
) => {
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

  const slideUp = useSpring(
    useTransform(scrollYProgress, [0.5, 0.8], [1000, 0]),
    {
      stiffness: 150,
      damping: 20,
    }
  );
  const cardsAnimation = useSpring(
    useTransform(scrollYProgress, [0.6, 0.8], [500, 0]),
    {
      stiffness: 150,
      damping: 20,
    }
  );
  const imgMotion = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [500, 0]),
    {
      stiffness: 150,
      damping: 20,
    }
  );

  return { headerMotion, headerY, slideUp, cardsAnimation, imgMotion };
};

export const useTimelineItemMotion = (
  scrollYProgress: MotionValue<number>,
  index: number,
  total: number
) => {
  const startProgress = (index / total) * 0.4;
  const endProgress = ((index + 1) / total) * 0.4;

  return useSpring(
    useTransform(
      scrollYProgress,
      [startProgress, endProgress, 0.4],
      [500, 0, 0]
    ),
    {
      stiffness: 150,
      damping: 20,
    }
  );
};

export const useProjectsAnimations = (scrollYProgress: MotionValue<number>) => {
  const headerY = useSpring(useTransform(scrollYProgress, [0, 0.2], [24, 0]), {
    stiffness: 120,
    damping: 20,
  });

  const itemsOpacity = useSpring(
    useTransform(scrollYProgress, [0.1, 0.4], [0, 1]),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  return { headerY, itemsOpacity, cardAnimation };
};

export const useTechStackAnimations = (
  scrollYProgress: MotionValue<number>,
  totalCards: number,
  radius = 150
) => {
  const sectionSlideLeft = useSpring(
    useTransform(scrollYProgress, [0, 0.5], ["-1000vw", "0"]),
    {
      stiffness: 80,
      damping: 20,
      mass: 0.8,
    }
  );

  const sectionSlideUp = useSpring(
    useTransform(scrollYProgress, [0, 0.5], ["100vh", "0vh"]),
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

  const scale = useSpring(useTransform(scrollYProgress, [0, 0.7], [1, 3]), {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });

  const cardMotions = Array.from({ length: totalCards }, (_, index) => {
    const angle = (index / totalCards) * Math.PI * 2;
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;

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

  return {
    sectionSlideLeft,
    sectionSlideUp,
    rotationX,
    rotationY,
    scale,
    cardMotions,
  };
};
