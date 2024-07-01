import { Card } from "@/components/ui/card";
import { ButtonCardSection } from "./ButtonCardSection";

interface ButtonCardProps {
  name: string;
}

interface CardSectionsProps {
  buttons: ButtonCardProps[];
  activeButton: string;
  onButtonClick: (name: string) => void;
}

export const CardSections: React.FC<CardSectionsProps> = ({
  buttons,
  activeButton,
  onButtonClick,
}) => {
  return (
    <Card className="flex flex-col bg-[#FFF] w-72 h-80 shadow-md ml-4">
      {buttons.map((buttonProps, index) => (
        <ButtonCardSection
          key={index}
          name={buttonProps.name}
          isActive={buttonProps.name === activeButton}
          onClick={() => onButtonClick(buttonProps.name)}
        />
      ))}
    </Card>
  );
};
