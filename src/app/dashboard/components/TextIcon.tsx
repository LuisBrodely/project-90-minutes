import Image from "next/image"

interface TextIconProps {
    icon: React.ReactNode
    text: string;
  }

export const TextIcon = ({icon, text}: TextIconProps) => {
    return(
        <div className="flex flex-row gap-2 items-center">
           {icon}
            <h2 className="text-[#FFF] font-semibold text-xs">{text}</h2>
        </div>
    )
} 