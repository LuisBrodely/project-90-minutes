import { Package } from '../interfaces/package';

interface PackageItemProps{
  pkg: Package;
}

export const StatusPacking: React.FC<PackageItemProps> = ({ pkg }) => {

  const getStatusMessage = (status: string): string => {
    switch (status) {
      case 'Creado':
        return 'El paquete esta a la espera de salir del centro de distribución.';
      case 'Re-programado':
        return 'El paquete ha sido reprogramado por paquetería.';
      case 'En tránsito':
        return 'El paquete está en tránsito hacia su destino.';
      case 'Entregado':
        return 'El paquete ha sido entregado correctamente.';
      case 'Cancelado':
        return 'El envío del paquete ha sido cancelado.';
      default:
        return '';
    }
  };



  return (
    <div className="flex-col w-[1144px] h-[225px] bg-white shadow border border-zinc-100 mt-[30px]">
      <div className="flex-col mt-[20px] ml-[30px] justify-start items-start gap-[5px] inline-flex">
        <p className="text-zinc-800 text-base font-semibold">
          90Minutos [Tipo de membresia] envió.
        </p>
        <p className="text-zinc-800 text-base font-semibold">
          Numero de identificación {" "}
          <span className="text-neutral-500 text-base font-normal">{pkg.id}</span>
        </p>
        <p className="text-zinc-800 text-base font-semibold">
          Envío a{" "}
          <span className="text-zinc-800 text-base font-normal">
            [Nombre de persona], [Numero Telefónico], {pkg.destiny}
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
          <p className="text-black text-base font-semibold">
            Paquete {pkg.status}
          </p>
          {pkg.status && (
            <p className="text-black text-[10px] font-normal">
              {getStatusMessage(pkg.status)}
            </p>
          )}
          <p className="text-zinc-400 text-[10px] font-normal">
            [Fecha entrega], [Hora] (CT)
          </p>
        </div>
      </div>
    </div>
  );
};
