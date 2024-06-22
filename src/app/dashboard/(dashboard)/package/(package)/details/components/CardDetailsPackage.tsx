import Image from "next/image";
import box from "@/assets/img/box.png";
import { ButtonCardPackage } from "../../../components/ButtonCardPackage";

export const CardDetailsPackage = () => {
  return (
    <div className="w-full h-56 shadow-md flex items-center justify-between mt-10 pr-10 pl-10">
      <div className="flex flex-col">
        <h2 className="text-[#909090] font-semibold text-xl">
          Paquete en Ruta
        </h2>
        <h2 className="text-[#939393] font-normal text-sm">
          El paquete sigue en ruta de entrega hacia el destino.
        </h2>
        <div className="flex items-center gap-5 mt-5">
          <Image src={box} alt="Img-Box" />
          <div className="flex flex-col">
            <h2 className="text-[#7A7A7A]">
              {"[Numero] Cajas de tamaño [Tipo de tamaño]."}
            </h2>
            <h2 className="text-[#7A7A7A]">{"Peso [Numero] kg."}</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <ButtonCardPackage name="Realizar seguimiento de paquete" />
        <ButtonCardPackage name="Escribir opinión del servicio" />
      </div>
    </div>
  );
};
