import { Dot } from "lucide-react";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ children, className }) => {
  return (
    <div
      className={`flex items-center justiy-center rounded-3xl h-10 w-30 bg-accent ${className}`}
    >
      <Dot />
      {children}
    </div>
  );
};

export default Chip;
