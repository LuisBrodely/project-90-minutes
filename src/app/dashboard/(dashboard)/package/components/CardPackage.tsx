import Image from "next/image";
import box from "@/assets/img/box.png";
import { ButtonCardPackage } from "./ButtonCardPackage";

interface CardPackageProps {
  name: string;
}

export const CardPackage = ({ name }: CardPackageProps) => {
  return (
    <div className="w-full h-80 shadow-md mt-5">
      <div className="w-full h-20 bg-[#F3EEFC] flex justify-between items-center">
        <div className="flex gap-10 ml-10">
          <div className="flex flex-col">
            <h2 className="text-[#686868] font-normal text-sm">
              Paquete Enviado
            </h2>
            <h2 className="text-[#686868] font-semibold text-xs">
              {"[Fecha de envio]"}
            </h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[#686868] font-normal text-sm">Enviar a</h2>
            <h2 className="text-[#686868] font-semibold text-xs">
              {"[Nombre]"}
            </h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[#686868] font-normal text-sm">Total</h2>
            <h2 className="text-[#686868] font-semibold text-xs">
              {"$[Cantidad]"}
            </h2>
          </div>
        </div>
        <div className="mr-10 text-[#686868] font-semibold text-xs">
          <h2>ID {"[ID del Paquete]"}</h2>
        </div>
      </div>
      <div className="w-full h-[240px] bg-[#FFF] flex justify-between pt-5">
        <div className="flex flex-col ml-10">
          <h2 className="text-[#7C3AED] font-semibold text-xl">{name}</h2>
          <h2 className="text-[#939393] font-normal text-sm">
            El paquete ha sido entregado al destino correspondiente.
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
        <div className="flex flex-col mr-10 gap-5 mt-6">
          <ButtonCardPackage name="Detalle de paquete" />
          <ButtonCardPackage name="Realizar seguimiento de paquete" />
          <ButtonCardPackage name="Escribir opinión del servicio" />
        </div>
      </div>
    </div>
  );
};
