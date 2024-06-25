import box from "@/assets/img/box.png";
import Image from "next/image";

export const Articles = () => {
  return (
    <div className="flex w-[1144px] h-40 bg-white shadow border border-zinc-100 mt-[30px]">
      <div className="flex-col mt-[20px] ml-[30px]">
        <p className="text-zinc-800 text-base font-semibold">
          Artículos empaquetados
        </p>
        <div className="flex flex-row flex-wrap  items-center mt-[10px] ">
          <div className="flex flex-row">
            <Image src={box} alt="" className="w-[90px] h-[93.70px]" />
            <div className="flex-col mt-[10px] ml-[30px]">
              <p className="text-zinc-800 text-base font-normal">
                [Numero] Cajas de tamaño [Tipo de tamaño].
              </p>
              <p className="text-zinc-800 text-base font-normal">
                Peso [Numero] kg.
              </p>
            </div>
          </div>
          <span className="text-black text-base font-normal ml-[423px]"> x[Numero de paquetes] </span>
        </div>
      </div>
    </div>
  );
};
