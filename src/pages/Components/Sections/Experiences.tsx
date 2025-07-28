import React from "react";
import Header from "../Typography/Header";
import Text from "../Typography/Text";
import { experiencesDatas } from "../../../Datas/experiencesDatas";

interface ExperiencesProps {
  id: string;
  className?: string;
}

const Experiences: React.FC<ExperiencesProps> = ({ id, className }) => {
  return (
    <section
      id={id}
      className={`font-accent mx-15 lg:mx-60 mb-60 ${className}`}
    >
      <Header className="font-bold mb-10 " size="subtitle">
        EXPERIENCES
      </Header>
      <Text>
        {experiencesDatas.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:${
              index % 2 != 0
                ? "flex-row-reverse text-right"
                : "flex-row text-left"
            } items-center justify-center text-xl lg:text-2xl text-center `}
          >
            <div className="flex flex-row lg:block font-heading lg:text-4xl xl:text-5xl">
              <span className="font-bold mx-2">{item.labelOne}</span>
              <span className="font-accent">{item.labelAccent}</span>
              <span className="font-bold mx-2 ">{item.labelTwo}</span>
            </div>
            <div className=" font-bold mx-2 lg:text-3xl xl:text-8xl mb-6 lg:mb-12 font-heading">
              {item.year}
            </div>
          </div>
        ))}
      </Text>
    </section>
  );
};

export default Experiences;
