import { profileItems } from "../../Datas/profileCardData.ts";
import Text from "./Typography/Text.tsx";

const PassportCard = () => {
  return (
    <div className="transition-all">
      <div className="max-w-200 max-h-120 flex flex-col items-center justify-center bg-secondary px-5 py-4 rounded-t-2xl ">
        <h1 className="text-xs lg:text-lg 2xl:text-3xl text-accent-two font-bold mb-5">
          PORTFOLIO
        </h1>
        <div className="flex flex-row ">
          <div>
            <h1 className="flex flex-col items-center justify-center text-xs lg:text-2xs 2xl:text-xl text-accent-two">
              PASSPORT
            </h1>
            <span>
              <img
                className="w-20 lg:w-30 2xl:w-60 rounded-2xl border-1 border-accent"
                src="profile.jpg"
              ></img>
            </span>
          </div>
          <div className="ml-10 grid grid-cols-2">
            {profileItems.map((item) => (
              <div
                key={item.id}
                className="text-accent-two w-25 lg:w-45 2xl:w-80"
              >
                <h3 className="text-[5px] lg:text-[10px] 2xl:text-[12px]">
                  {item.label}
                </h3>
                <Text className="text-[8px] lg:text-[14px] 2xl:text-[18px]">
                  {item.subLabel}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="text-[8px] lg:text-xs xl:text-2xs 2xl: text-xl p-5 bg-primary rounded-b-2xl text-accent-two">{`<<<<PALFANSO<<<<<<EXEL<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`}</footer>
    </div>
  );
};

export default PassportCard;
