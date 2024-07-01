import Image from "next/image";
import box from "@/assets/img/box.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CardDetailsPackage = () => {
  return (
    <Card className="w-full h-56 shadow-md flex items-center justify-between mt-10 pr-10 pl-10">
      <CardContent className="w-full flex flex-row items-center justify-between">
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
          <Button variant={'outline'} className="border-[2px] w-72 h-9 border-[#BA9DF1] rounded-[6px] text-[#9D75EB] bg-[#FFFFFF] font-semibold text-sm hover:text-[#FFFFFF] hover:bg-[#7C3AED] hover:border-none">
              Realizar seguimiento de paquete
          </Button>
          <Button variant={'outline'} className="border-[2px] w-72 h-9 border-[#BA9DF1] rounded-[6px] text-[#9D75EB] bg-[#FFFFFF] font-semibold text-sm hover:text-[#FFFFFF] hover:bg-[#7C3AED] hover:border-none">
            Escribir opinión del servicio
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
