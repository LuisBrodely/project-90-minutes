import Image from "next/image";
import logo from "@/assets/icons/logo.svg";

interface Props {
  children: React.ReactNode;
}

const PackageLayout = ({ children }: Props) => {
  return (
    <div>
      <div className="flex gap-2 border-b-[1px] border-b-[#EEEEEE] h-28 pl-20">
        <Image src={logo} alt="Logo-90minutos" className="w-10" />
        <h2 className="flex items-center">
          <span className="text-2xl font-semibold text-[#7C3AED]">90</span>
          <span className="text-2xl font-light text-[#7C3AED]">Minutos</span>
        </h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PackageLayout;
