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
    <section id={id} className={`font-accent mx-15 mb-60 ${className}`}>
      <Header className="font-bold mb-10  " size="subtitle">
        EXPERIENCES
      </Header>
      <Text>
        {experiencesDatas.map((item) => (
          <div className="flex flex-col items-center justify-center text-xl lg:text-2xl text-center ">
            <span className="font-bold mx-2">{item.labelOne}</span>
            {item.labelAccent}
            <span className="font-bold mx-2 ">{item.labelTwo}</span>
            <div className="font-heading font-bold mx-2 text-3xl mb-6">
              {item.year}
            </div>
          </div>
        ))}
      </Text>
    </section>
  );
};

export default Experiences;
