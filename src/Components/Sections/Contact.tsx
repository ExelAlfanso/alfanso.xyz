import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../Constants/animationVariants";
import Text from "../Typography/Text";
import Button from "../Button";
interface ContactProps {
  id: string;
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ id, className }) => {
  return (
    <motion.section
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      id={id}
      className={`mb-75 ${className} flex flex-col items-center justify-center my-60`}
    >
      <h1 className="px-20 mb-10 text-4xl font-bold text-center text-accent lg:text-5xl">
        Have a Big Idea? Let’s Build It Together.
      </h1>
      <Text className="w-1/2 text-[16px] lg:text-[24px] text-center mb-10 ">
        I love turning complex problems into elegant solutions. From the first
        sketch to the final launch, I’m here to help you navigate the journey.
      </Text>
      <Button href="#Footer">Contact Me</Button>
    </motion.section>
  );
};

export default Contact;
