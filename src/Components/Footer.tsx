import React from "react";
import { Copyright } from "lucide-react";
import Text from "./Typography/Text";
import { footerDatas } from "../../Datas/footerDatas";
import { Link } from "react-router-dom";

interface FooterProps {
  id: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ id, className }) => {
  return (
    <div
      id={id}
      className={`flex flex-row items-center justify-between px-10 lg:px-50 gap-10 bg-secondary w-full h-80 overflow-hidden ${className} `}
    >
      <div className="flex flex-col items-left">
        <div className="flex flex-row items-left gap-5 font-accent mb-5 ">
          <div className="flex flex-row items-center gap-2">
            <Copyright className="text-accent w-4 my-2" />
            <Text className="text-xs sm:text-base">2025 alfanso.xyz</Text>
          </div>
        </div>
        <Text className="font-accent text-xs sm:text-base">
          Exel Boy Alfanso - Full Stack Developer
        </Text>
        <Text className="font-p text-xs sm:text-base">
          exel.alfanso@gmail.com
        </Text>
      </div>
      <div className="gap-5 grid grid-cols-2">
        {footerDatas.map((data) => (
          <Link
            key={data.id}
            to={data.href}
            target="_blank"
            className="hover:text-white text-accent gap-2 flex flex-row font-heading text-xs sm:text-base"
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
