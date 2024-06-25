import { Articles } from "./components/Article";
import { StatusPacking } from "./components/StatusPacking";
import { TimeTracking } from "./components/TimeTracking";
import { Package } from "./interfaces/package";

const PackageTrackingPage = () => {

  const examplePackage: Package = {
    id: 'efc73128-8bf4-465d-9fab-752abc5ba2fe',
    origin: 'Carretera Villaflores s/n, Los Arbolitos, Berriozabal, Chis',
    destiny: 'Carretera Villaflores 650, CHIS 133 592, El Mirador, El Suspiro, 29100 Suchiapa, Chis.',
    weight: 9,
    distance: 477,
    cost: 1049.87,
    status: 'Re-programado',
    creationDate: null,
    deliveryDate: null,
    details: 'roto'
  }
  
  return (
    <div className="flex flex-row justify-center mt-8 ">
      <div className="flex flex-col w-[1144px] h-[673px]">
        {/* BREADCRUMB */}
        <span className="text-neutral-600 text-2xl font-semibold mt-[50px]">
          | Monitoreo de paquete
        </span>
        <TimeTracking />
        <StatusPacking pkg={examplePackage}/>
        <Articles pkg={examplePackage} />
      </div>
    </div>
  );
};

export default PackageTrackingPage;