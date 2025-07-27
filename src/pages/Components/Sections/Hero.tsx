import Text from "../Typography/Text.tsx";
import TextType from "../Typography/TextType.tsx";
import Header from "../Typography/Header.tsx";
import Button from "../Button.tsx";
import PassportCard from "../PassportCard.tsx";

interface HeroProps {
  id: string;
  className?: string;
}
const Hero: React.FC<HeroProps> = ({ id, className }) => {
  return (
    <section
      id={id}
      className={`lg:gap-20 pt-50 flex flex-col lg:flex-row items-center justify-center w-full z-10 mb-65 lg:mb-60${className} `}
    >
      <div className="flex flex-col items-left justify-center">
        <Header
          size="title"
          className="lg:text-left lg:mb-5 h-30 lg:h-50 xl:h-80 w-85 lg:w-100 xl:w-130 "
        >
          <TextType
            text={"hI. mY nAME IS eXEL bOY aLFANSO."}
            typingSpeed={60}
            showCursor={true}
            cursorCharacter="|"
            className="text-accent lg:text-6xl xl:text-7xl "
            loop={true}
          />
        </Header>
        <div className="mb-10 hidden lg:block">
          <Button href="#Footer">CONTACT ME</Button>
        </div>
      </div>
      <div className="mb-10 lg:hidden xl:hidden">
        <Button href="#Footer">CONTACT ME</Button>
      </div>
      <PassportCard></PassportCard>
    </section>
  );
};

export default Hero;
