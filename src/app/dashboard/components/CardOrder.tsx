import box from "@/assets/img/box.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircleHelpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardOrderProps {
  id: string;
  status: string;
}



export const CardOrder = ({
  id,
  status,
}: CardOrderProps) => {

  return (
    <Card className="w-[897px] h-72 bg-[#FFF] flex flex-col gap-10 mt-5">
      <CardContent className="p-0">
        <div className="flex flex-row items-center justify-around gap-20 border-b-2 border-b-[#EEEEEE] h-20">
          <h2 className="text-[#0F172A] font-semibold">{status}</h2>
          <div className="flex gap-6">
            <h2 className="text-[#A9A9A9]">
              ID del pedido: {id}
            </h2>
            <CircleHelpIcon size={20} />
          </div>
        </div>
        <div className="flex flex-row justify-around gap-14 items-center h-full">
          <div>
            <Image src={box} alt="Img-Productos" />
          </div>
          <div className="flex flex-col gap-2">
            <Link href={`/dashboard/package/details/${id}`}>
              <Button className="text-[#FFFFFF] font-semibold h-9 w-72 hover:bg-[#7C3AED] hover:scale-105 hover:duration-300 transition-all">
                Detalle de paquete
              </Button>
            </Link>
            <Link href={`/dashboard/package/tracking/${id}`}>
              <Button className="text-[#FFFFFF] font-semibold h-9 w-72 hover:bg-[#7C3AED] hover:scale-105 hover:duration-300 transition-all">
                Seguimiento de paquete
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
