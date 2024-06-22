export const StatusPacking = () => {
  return (
    <div className="flex-col w-[1144px] h-[225px] bg-white shadow border border-zinc-100 mt-[30px]">
      <div className="flex-col mt-[20px] ml-[30px] justify-start items-start gap-[5px] inline-flex">
        <p className="text-zinc-800 text-base font-semibold font-['Inter']">
          90Minutos [Tipo de membresia] envió.
        </p>
        <p className="text-zinc-800 text-base font-semibold font-['Inter']">
          Numero de identificación{" "}
          <span className="text-neutral-500 text-base font-normal font-['Inter']">
            [Numero de ID]
          </span>
        </p>
        <p className="text-zinc-800 text-base font-semibold font-['Inter']">
          Envío a{" "}
          <span className="text-zinc-800 text-base font-normal font-['Inter']">
            [Nombre de persona], [Numero Telefónico], [Dirección]
          </span>
        </p>
      </div>
      <div className="w-[1084px] h-[0px] border border-zinc-300 mt-[20px] ml-[30px]"></div>
      <div className="flex flex-row mt-[20px] ml-[30px]">
        <div className="w-5 h-[58px] relative">
          <div className="w-[5px] h-[43px] left-[8px] top-[15px] absolute bg-gray-200 rounded-[10px]" />
          <div className="w-5 h-5 left-0 top-0 absolute bg-violet-600 rounded-full" />
        </div>
        <div className="flex-col ml-[15px]">
          <p className="text-black text-base font-semibold font-['Inter']">
            Paquete entregado
          </p>
          <p className="text-black text-[10px] font-normal font-['Inter']">
            Paquete entregado en el destino correspondiente.
          </p>
          <p className="text-zinc-400 text-[10px] font-normal font-['Inter']">
            [Fecha entrega], [Hora] (CT)
          </p>
        </div>
      </div>
    </div>
  );
};
