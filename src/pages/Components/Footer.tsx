import React from "react";
import { Copyright } from "lucide-react";
import Text from "./Typography/Text";
import { footerDatas } from "../../Datas/footerDatas";
import { div } from "three/tsl";
import { Link } from "react-router-dom";

interface FooterProps {
  id: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ id, className }) => {
  return (
    <div
      id={id}
      className={`flex flex-row items-center justify-center px-10 gap-10 lg:gap-200 bg-secondary w-full h-80 overflow-hidden ${className} `}
    >
      <div>
        <div className="flex flex-row gap-5 font-accent mb-5 ">
          <Copyright className="text-accent w-5" />
          <Text>2025 alfanso.xyz</Text>
        </div>
        <Text className="font-accent">
          Exel Boy Alfanso - Full Stack Developer
        </Text>
        <Text className="font-p">exel.alfanso@gmail.com</Text>
      </div>
      <div className="gap-5 grid grid-cols-2">
        {footerDatas.map((data) => (
          <Link
            key={data.id}
            to={data.href}
            target="_blank"
            className="hover:text-white text-accent gap-2 flex flex-row font-heading"
          >
            <p>0{data.id}</p>
            <p>{data.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
