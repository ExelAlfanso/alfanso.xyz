import React from "react";
import Header from "../Typography/Header.tsx";
import Text from "../Typography/Text.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import "swiper/css";

import { projectDatas } from "../../../Datas/projectDatas.ts";

interface ProjectsProps {
  id: string;
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id, className }) => {
  return (
    <section id={id} className={`mb-10 overflow-hidden ${className}`}>
      <Header className="font-bold mb-10" size="subtitle">
        PROJECTS
      </Header>
      <Swiper
        modules={[Keyboard]}
        keyboard={{ enabled: true }}
        spaceBetween={10}
        slidesPerView={2}
        slidesPerGroup={1}
        centeredSlides={true}
      >
        {projectDatas.map((item) => (
          <SwiperSlide
            key={item.id}
            className="swiper-slide opacity-40 [&.swiper-slide-active]:opacity-100 transition-opacity duration-300"
          >
            {
              <div className="flex flex-col items-center justify-center">
                <Header
                  size="description"
                  className="text-2xl lg:text-4xl font-bold font-heading"
                >
                  {item.name}
                </Header>
                <Header size="description" className="font-accent mb-5">
                  {`<--<- ${item.category} >->-->`}
                </Header>
                <img src={item.img} className="w-80 rounded-3xl mb-3" />
                <Text className="text-center font-p lg:text-3xl lg:w-100">
                  {item.description}
                </Text>
              </div>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
