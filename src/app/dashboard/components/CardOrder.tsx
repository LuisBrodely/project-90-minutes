import box from "@/assets/img/box.png";
import { CircleHelpIcon } from "lucide-react";
import Image from "next/image";

export const CardOrder = () => {
  return (
    <div className="w-[897px] h-72 shadow-md bg-[#FFF] flex flex-col gap-10 ml-1 mt-5">
      <div className="flex items-center justify-around gap-20 border-b-2 border-b-[#EEEEEE] h-12">
        <h2 className="text-[#0F172A] font-semibold">Finalizado</h2>
        <div className="flex gap-6">
          <a href="" className="text-[#A9A9A9] ">
            Pedido entregado el: 23 de mayo del 2024
          </a>
          <CircleHelpIcon size={20} />
        </div>
      </div>
      <div className="flex justify-center items-center gap-14">
        <div>
          <Image src={box} alt="Img-Productos" />
        </div>
        <div className="flex flex-col gap-2">
          <button className="hover:scale-105 hover:duration-300 text-[#FFF] bg-[#7C3AED] font-semibold text-sm h-8 w-72 rounded-md">
            Detalle de paquete
          </button>
          <button className="hover:scale-105 hover:duration-300 text-[#FFF] bg-[#7C3AED] font-semibold text-sm h-8 w-72 rounded-md">
            Seguimiento de paquete
          </button>
        </div>
      </div>
    </div>
  );
};
