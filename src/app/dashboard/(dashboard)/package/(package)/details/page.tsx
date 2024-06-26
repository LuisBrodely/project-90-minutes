import { CardDetailsPackage } from "./components/CardDetailsPackage";

const PackageDetailsPage = () => {
  return (
    <>
      <div className="ml-28 mr-28 pb-4 border-b-[1px] border-b-[#EEEEEE]">
        <h2 className=" mt-5 font-semibold">
          <span className="mr-5">Mi cuenta</span>
          {">"}
          <span className="ml-5 mr-5">Mis paquetes</span>
          {">"}
          <span className="ml-5 text-[#7C3AED]">Detalles de mi paquete</span>
        </h2>
        <div className="flex gap-2 mt-5">
          <div className="w-[3px] h-9 bg-[#515151]" />
          <h2 className="font-semibold text-2xl text-[#515151]">
            Detalles de mi paquete
          </h2>
        </div>
      </div>
      <div className="ml-28 mr-28">
        <div className="flex gap-20 mt-5">
          <h2 className="text-[#5F5F5F] font-semibold text-sm">
            Paquete enviado el {"[Fecha de envio]"}
          </h2>
          <h2 className="text-[#5F5F5F] font-semibold text-sm">
            {"ID [ID de Paquete]"}
          </h2>
        </div>
        <div className="w-full h-64 bg-white shadow-md pt-5 mt-5 flex justify-between">
          <div className="flex flex-col gap-5 ml-10">
            <h2 className="flex flex-col">
              <span className="text-[#303030] font-semibold">
                Dirección de envió
              </span>
              <span className="text-[#B8B8B8] font-semibold">
                {"[Dirección]"}
              </span>
            </h2>
            <h2 className="flex flex-col">
              <span className="text-[#303030] font-semibold">
                Método de pago
              </span>
              <span className="text-[#B8B8B8] font-semibold">
                {"[Icono] [Nombre Tarjeta] que termina en [Últimos 4 dígitos]"}
              </span>
            </h2>
            <h2 className="flex flex-col">
              <span className="text-[#303030] font-semibold">
                Horario de entrega
              </span>
              <span className="text-[#B8B8B8] font-semibold">
                {"Al final del dia"}
              </span>
            </h2>
          </div>
          <div className="flex flex-col mr-10">
            <h2 className="font-semibold">Resumen de paquete</h2>
            <h2 className="flex gap-32">
              <span className="text-[#B8B8B8]">Peso:</span>
              <span className="text-[#B8B8B8]">{"[Kilogramos]kg"}</span>
            </h2>
            <h2 className="flex gap-24">
              <span className="text-[#B8B8B8]">Distancia:</span>
              <span className="text-[#B8B8B8]">{"[Distancia]km"}</span>
            </h2>
            <h2 className="flex gap-[74px]">
              <span className="text-[#B8B8B8]">Recolección:</span>
              <span className="text-[#B8B8B8]">{"$[Costo]"}</span>
            </h2>
            <h2 className="flex gap-[120px]">
              <span className="text-[#B8B8B8]">Envío:</span>
              <span className="text-[#B8B8B8]">{"$[Costo]"}</span>
            </h2>
            <h2 className="flex gap-20">
              <span className="text-[#B8B8B8]">Descuento:</span>
              <span className="text-[#B8B8B8]">{"%[Descuento]"}</span>
            </h2>
            <h2 className="flex gap-[100px]">
              <span className="text-[#B8B8B8]">Subtotal:</span>
              <span className="text-[#B8B8B8]">{"$[Subtotal]"}</span>
            </h2>
            <h2 className="flex gap-5">
              <span className="text-[#303030] font-semibold">
                Total (IVA incluido):
              </span>
              <span className="text-[#303030] font-semibold">{"$[Total]"}</span>
            </h2>
          </div>
        </div>
        <CardDetailsPackage />
        <CardDetailsPackage />
        <CardDetailsPackage />
      </div>
    </>
  );
};

export default PackageDetailsPage;
