import { Card, CardContent } from "@/components/ui/card";
import { TextIcon } from "../TextIcon";
import { CircleCheckBig } from 'lucide-react';
import PayPalButton from "../PayPalButton";

export const MembershipsSection = () => {
  return (
    <>
      <h2 className="font-semibold text-2xl text-[#7C3AED]">Membresías</h2>
      <Card className="bg-[#441D87] w-[940px] h-[310px]">
        <CardContent className="flex flex-row justify-around">
          <div className="flex flex-col mt-5 gap-5">
            <h2 className="text-[#FFFFFF] font-semibold text-xl">Plan anual</h2>
            <h2 className="text-[#FFFFFF] font-semibold text-5xl">$999.00</h2>
            <h2 className="text-[#909090] font-medium text-sm">Realizar pago anual*</h2>
            <PayPalButton/>
          </div>
          <div className="flex flex-col mt-16 gap-5">
            <TextIcon icon={<CircleCheckBig className="invert" />} text="25% de descuento al enviar paquetes."/>
            <TextIcon icon={<CircleCheckBig className="invert" />} text="Acceso a envíos internacionales sin costo extra."/>
            <TextIcon icon={<CircleCheckBig className="invert" />} text="Aseguramiento de extravió de paquetes en el extranjero."/>
            <TextIcon icon={<CircleCheckBig className="invert" />} text="Recolección de paquetes gratuito."/>
          </div>
          <div className="flex flex-col mt-16">
            <TextIcon icon={<CircleCheckBig className="invert" />} text="Recolección de paquetes gratuito."/>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-[#F3EEFC] w-[940px] h-[310px]">
        <CardContent className="flex flex-row justify-around">
          <div className="flex flex-col mt-5 gap-5">
            <h2 className="text-[#262626] font-semibold text-xl">Plan mensual</h2>
            <h2 className="text-[#262626] font-semibold text-5xl">$120.00</h2>
            <h2 className="text-[#909090] font-medium text-sm">Realizar pago anual*</h2>
            <PayPalButton/>
          </div>
          <div className="flex flex-col mt-16 gap-5">
            <div className="flex flex-row gap-2 items-center">
              {<CircleCheckBig />}
              <h2 className="text-[#000] font-semibold text-xs">15% de descuento al enviar paquetes.</h2>
            </div>
            <div className="flex flex-row gap-2 items-center">
              {<CircleCheckBig />}
              <h2 className="text-[#000] font-semibold text-xs">Acceso a envíos internacionales sin costo extra.</h2>
            </div>
            <div className="flex flex-row gap-2 items-center">
              {<CircleCheckBig />}
              <h2 className="text-[#000] font-semibold text-xs">Recolección de paquetes gratuito.</h2>
            </div>
            <div className="flex flex-row gap-2 items-center">
              {<CircleCheckBig />}
              <h2 className="text-[#000] font-semibold text-xs">75% de descuento solamente en el primer envió.</h2>
            </div>
          </div>
          <div className="flex flex-col mt-16">
          <div className="flex flex-row gap-2 items-center">
              {<CircleCheckBig />}
              <h2 className="text-[#000] font-semibold text-xs">75% de descuento solamente en el primer envió.</h2>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
