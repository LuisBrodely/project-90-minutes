"use client";

import { useEffect, useState } from "react";
import { Articles } from "../components/Article";
import { StatusPacking } from '../components/StatusPacking';
import { TimeTracking } from "../components/TimeTracking";
import { Package, PackageResponse } from "../interfaces/package";
import axios from "axios";
import { useParams } from "next/navigation";

const PackageTrackingPage = () => {
  const [userPackage, setUserPackage] = useState<Package | null>(null);
  const { id } = useParams()

  const url =`http://dev-90minutos-1292116088.us-east-2.elb.amazonaws.com/package/v1/get/${id}`;

  const fetchPackage = async () => {
    const { data } = await axios.get<PackageResponse>(url);
    setUserPackage(data.data as Package) 
    console.log(userPackage)
  };

  useEffect(() => {
    fetchPackage();
  }, []);

  return (
    <div className="flex flex-row justify-center mt-8 ">
      <div className="flex flex-col w-[1144px] h-[673px]">
        {/* BREADCRUMB */}
        <span className="text-neutral-600 text-2xl font-semibold mt-[50px]">
          | Monitoreo de paquete
        </span>
        {userPackage && <TimeTracking pkg={userPackage}/>}
        {userPackage && <StatusPacking pkg={userPackage}/>}
        {userPackage && <Articles pkg={userPackage} />}
      </div>
    </div>
  );
};

export default PackageTrackingPage;
