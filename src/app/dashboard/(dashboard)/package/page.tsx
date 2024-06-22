import { CardPackage } from "./components/CardPackage";

const PackagePackage = () => {
  return (
    <>
      <div className="ml-28 mr-28 pb-4 border-b-[1px] border-b-[#EEEEEE]">
        <h2 className=" mt-5 font-semibold">
          <span className="mr-5">Mi cuenta</span>
          {">"}
          <span className="ml-5 text-[#7C3AED]">Mis paquetes</span>
        </h2>
        <div className="flex gap-2 mt-5">
          <div className="w-[3px] h-9 bg-[#515151]" />
          <h2 className="font-semibold text-2xl text-[#515151]">
            Mis paquetes
          </h2>
        </div>
      </div>
      <div className="ml-28 mr-28">
        <CardPackage name="Paquete entregado" />
        <CardPackage name="Paquete entregado" />
        <CardPackage name="Paquete entregado" />
        <CardPackage name="Paquete entregado" />
      </div>
    </>
  );
};

export default PackagePackage;
