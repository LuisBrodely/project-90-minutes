import { Button } from "@/components/ui/button";

interface ButtonCardProps {
  name: string;
}

export const ButtonCardPackage = ({ name }: ButtonCardProps) => {
  return (
    <Button variant={"outline"}>
      {name}
    </Button>
  );
};
