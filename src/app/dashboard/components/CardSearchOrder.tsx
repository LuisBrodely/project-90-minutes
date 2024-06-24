import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircleHelpIcon } from "lucide-react";
import Link from "next/link";

export const CardSearchOrder = () => {
  return (
    <Card className="w-[897px] h-48 bg-[#FFF] shadow-md flex flex-col items-start gap-10 pt-10 mb-10 ml-1">
      <CardContent>
        <div className="flex w-[900px] justify-around">
          <div className="flex gap-5">
            <Button variant="link" className="text-[#0F172A] font-light hover:duration-300 transition-all text-base hover:text-[#7C3AED]">
              Ver todos
            </Button>
            <Button variant="link" className="text-[#0F172A] font-light hover:duration-300 transition-all text-base hover:text-[#7C3AED]">
              Por pagar
            </Button>
            <Button variant="link" className="text-[#0F172A] font-light hover:duration-300 transition-all text-base hover:text-[#7C3AED]">
              Por Enviar
            </Button>
            <Button variant="link" className="text-[#0F172A] font-light hover:duration-300 transition-all text-base hover:text-[#7C3AED]">
              Finalizado
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Link href="" className="text-[#A9A9A9] ">
              ¿Necesitas ayuda?
            </Link>
            <CircleHelpIcon size={20} />
          </div>
        </div>
        <div className="flex gap-3 ml-24 mt-5">
          <input
            type="text"
            placeholder="Buscar Pedido"
            className="border-2 rounded-sm w-96 pl-2"
          />
          <Button className="hover:bg-[#7C3AED] hover:scale-105 hover:duration-300 transition-all">
            Buscar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
