import React from "react";
import Header from "../Typography/Header";
import Text from "../Typography/Text";
import { techStackDatas } from "../../../Datas/techStackDatas";

interface TechStackProps {
  id: string;
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({ id, className }) => {
  return (
    <section id={id} className={`mb-75 ${className}`}>
      <Header className="font-bold mb-10" size="subtitle">
        TECH STACK
      </Header>
      <div className="flex items-center justify-center bg-primary/50">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 py-5 px-5 ">
          {techStackDatas.map((item) => (
            <div key={item.id}>
              <span className="flex flex-row items-center justify-center rounded-2xl bg-secondary px-6 py-4 ">
                <img className="w-8 lg:w-12 mr-5" src={item.icon} alt="" />
                <Text className="text-xl lg:text-[8px] xl:text-[20px]">
                  {item.label}
                </Text>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
