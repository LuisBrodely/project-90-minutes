import Image from "next/image";
import box from "@/assets/img/box.png";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CardPackageProps {
  title: string;
}

export const CardPackage = ({ title }: CardPackageProps) => {
  return (
    <Card className="w-full h-80 shadow-md mt-5">
      <CardHeader className="w-full h-20 bg-[#F3EEFC] flex flex-row justify-between">
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
      </CardHeader>
      <CardContent className="w-full h-[240px] bg-[#FFF] flex justify-between pt-5">
        <div className="flex flex-col ml-10">
          <CardTitle className="text-[#7C3AED] font-semibold text-xl">{title}</CardTitle>
          <CardDescription className="text-[#939393] font-normal text-sm">
            El paquete ha sido entregado al destino correspondiente.
          </CardDescription>
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
          <Link href={'/dashboard/package/details'}>
            <Button variant={'outline'} className="border-[2px] w-72 h-9 border-[#BA9DF1] rounded-[6px] text-[#9D75EB] bg-[#FFFFFF] font-semibold text-sm hover:text-[#FFFFFF] hover:bg-[#7C3AED] hover:border-none">
              Detalle de paquete
            </Button>
          </Link>
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
