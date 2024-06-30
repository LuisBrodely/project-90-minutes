import box from "@/assets/img/box.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircleHelpIcon } from "lucide-react";
import Image from "next/image";

export const CardOrder = () => {

  return (
    <Card className="w-[897px] h-72 bg-[#FFF] flex flex-col gap-10 mt-5">
      <CardContent className="p-0">
        <div className="flex flex-row items-center justify-around gap-20 border-b-2 border-b-[#EEEEEE] h-20">
          <h2 className="text-[#0F172A] font-semibold">Finalizado</h2>
          <div className="flex gap-6">
            <a href="" className="text-[#A9A9A9]">
              Pedido entregado el: 23 de mayo del 2024
            </a>
            <CircleHelpIcon size={20} />
          </div>
        </div>
        <div className="flex flex-row justify-around gap-14 items-center h-full">
          <div>
            <Image src={box} alt="Img-Productos" />
          </div>
          <div className="flex flex-col gap-2">
            <Button className="text-[#FFFFFF] font-semibold h-9 w-72 hover:bg-[#7C3AED] hover:scale-105 hover:duration-300 transition-all">
              <a href="/dashboard/package">Detalle de paquete</a>
            </Button>
            <Button className="text-[#FFFFFF] font-semibold h-9 w-72 hover:bg-[#7C3AED] hover:scale-105 hover:duration-300 transition-all">
              Seguimiento de paquete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
