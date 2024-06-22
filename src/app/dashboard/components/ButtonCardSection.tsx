interface ButtonCardProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export const ButtonCardSection = ({
  name,
  isActive,
  onClick,
}: ButtonCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 transition-all duration-500 ${
        isActive ? "text-[#7C3AED] font-semibold text-lg" : "text-[#5F5F5F]"
      } hover:text-[#7C3AED] hover:font-semibold hover:text-lg group`}
    >
      <div
        className={`w-[5px] h-12 transition-all duration-500 ${
          isActive ? "bg-[#7C3AED]" : "bg-[#EEEEEE]"
        } group-hover:bg-[#7C3AED]`}
      />
      {name}
    </button>
  );
};
