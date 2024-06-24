import { Button } from "@/components/ui/button"

interface ButtonCardProps {
  name: string;
}

export const ButtonCardPackage = ({ name }: ButtonCardProps) => {
  return (
    <Button className="border-[2px] w-72 h-8 border-[#BA9DF1] rounded-[6px] text-[#9D75EB] bg-[#FFFFFF] font-semibold text-sm hover:text-[#FFFFFF] hover:border-none">
      {name}
    </Button>
  );
};
