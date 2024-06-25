import { Articles } from "./components/Article";
import { StatusPacking } from "./components/StatusPacking";
import { TimeTracking } from "./components/TimeTracking";

const PackageTrackingPage = () => {
  return (
    <div className="flex flex-row justify-center mt-8 ">
      <div className="flex flex-col w-[1144px] h-[673px]">
        {/* BREADCRUMB */}
        <span className="text-neutral-600 text-2xl font-semibold mt-[50px]">
          | Monitoreo de paquete
        </span>
        <TimeTracking />
        <StatusPacking />
        <Articles />
      </div>
    </div>
  );
};

export default PackageTrackingPage;