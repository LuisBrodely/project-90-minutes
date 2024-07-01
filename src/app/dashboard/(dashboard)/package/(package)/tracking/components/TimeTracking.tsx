import { Package } from '../interfaces/package';
interface PackageItemProps{
  pkg: Package;
}

export const TimeTracking: React.FC<PackageItemProps> = ({ pkg }) =>{

  const dateObj = new Date(pkg.deliveryDate)
  const date = dateObj.toISOString().split('T')[0];
  // Formatear la hora en formato de 24 horas
  const hours = dateObj.getUTCHours().toString().padStart(2, '0');
  const minutes = dateObj.getUTCMinutes().toString().padStart(2, '0');
  const seconds = dateObj.getUTCSeconds().toString().padStart(2, '0');
  const time = `${hours}:${minutes}:${seconds}`;

  console.log(pkg)
  return (
    <div className="flex-col w-[1144px] h-[100px] bg-white shadow border border-zinc-100 mt-[30px]">
      <p className="text-zinc-800 text-base font-semibold ml-[30px] mt-[20px]">
        Entrega estimada para el {date} {time}. (CT)
      </p>
      <p className="text-zinc-400 text-base font-semibold ml-[30px] mt-[8px]">
        {/* Membresia | [Tipo de Membresia] */} Servicio de envio 90Minutos
      </p>
    </div>
  );
};
