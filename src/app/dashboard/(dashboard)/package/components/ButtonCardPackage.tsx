interface ButtonCardProps {
  name: string;
}

export const ButtonCardPackage = ({ name }: ButtonCardProps) => {
  return (
    <button className="border-[2px] w-72 h-8 border-[#BA9DF1] rounded-[6px] text-[#9D75EB] font-semibold text-sm">
      {name}
    </button>
  );
};
