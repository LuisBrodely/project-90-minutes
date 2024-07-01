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
  id: string;
  origin: string;
  destiny: string;
  weight: number;
  distance: number;
  cost: number;
  status: string;
  creationDate: string | null;
  deliveryDate: string | null;
  details: string;
}

export const CardPackage = ({
  id,
  origin,
  destiny,
  weight,
  distance,
  cost,
  status,
  creationDate,
  deliveryDate,
  details,
}: CardPackageProps) => {
  return (
    <Card className="w-full h-80 shadow-md mt-5">
      <CardHeader className="w-full h-20 bg-[#F3EEFC] flex flex-row justify-between">
        <div className="flex gap-10 ml-10">
          <div className="flex flex-col">
            <h2 className="text-[#686868] font-normal text-sm">Paquete {status}</h2>
            <h2 className="text-[#686868] font-semibold text-xs">{deliveryDate ? deliveryDate : "Null"}</h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[#686868] font-normal text-sm">Enviar a</h2>
            <h2 className="text-[#686868] font-semibold text-xs">{destiny}</h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[#686868] font-normal text-sm">Total</h2>
            <h2 className="text-[#686868] font-semibold text-xs">${cost}</h2>
          </div>
        </div>
        <div className="mr-10 text-[#686868] font-semibold text-xs">
          <h2>ID {id}</h2>
        </div>
      </CardHeader>
      <CardContent className="w-full h-[240px] bg-[#FFF] flex justify-between pt-5">
        <div className="flex flex-col ml-10">
          <CardTitle className="text-[#7C3AED] font-semibold text-xl">{status}</CardTitle>
          <CardDescription className="text-[#939393] font-normal text-sm">
            {details}
          </CardDescription>
          <div className="flex items-center gap-5 mt-5">
            <Image src={box} alt="Img-Box" />
            <div className="flex flex-col">
              <h2 className="text-[#7A7A7A]">Peso {weight} kg.</h2>
              <h2 className="text-[#7A7A7A]">Distancia {distance} km.</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col mr-10 gap-5 mt-6">
          <Link href={`/dashboard/package/details`}>
            <Button variant="outline" className="border-[2px] w-72 h-9 border-[#BA9DF1] rounded-[6px] text-[#9D75EB] bg-[#FFFFFF] font-semibold text-sm hover:text-[#FFFFFF] hover:bg-[#7C3AED] hover:border-none">
              Detalle de paquete
            </Button>
          </Link>
          <Link href={`/dashboard/package/tracking/${id}`}>
          <Button variant="outline" className="border-[2px] w-72 h-9 border-[#BA9DF1] rounded-[6px] text-[#9D75EB] bg-[#FFFFFF] font-semibold text-sm hover:text-[#FFFFFF] hover:bg-[#7C3AED] hover:border-none">
            Realizar seguimiento de paquete
          </Button>
          </Link>
          <Button variant="outline" className="border-[2px] w-72 h-9 border-[#BA9DF1] rounded-[6px] text-[#9D75EB] bg-[#FFFFFF] font-semibold text-sm hover:text-[#FFFFFF] hover:bg-[#7C3AED] hover:border-none">
            Escribir opinión del servicio
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

