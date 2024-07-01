"use client"

import { useEffect, useState } from 'react';
import Link from "next/link"
import axios from 'axios';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CardPackage } from "./components/CardPackage";

interface Package {
  id: string;
  origin: string;
  destiny: string;
  weight: number;
  distance: number;
  cost: number;
  status: string;
  creationDate: string | null;
  deliveryDate: string | null;
  details: string;
}


const PackagePackage = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const getPackages = async () => {
      try {
        const response = await axios.get('http://dev-90minutos-1292116088.us-east-2.elb.amazonaws.com/package/v1/get');
        const packagesData = response.data.data;
        setPackages(packagesData);
      } catch (error) {
        setError('Failed to fetch packages');
      } finally {
        setLoading(false);
      }
    };

    getPackages();
  }, []);


  return (
    <>
      <div className="ml-28 mr-28 pb-4 border-b-[1px] border-b-[#EEEEEE]">
        <Breadcrumb className="mt-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/dashboard" className="text-[#757575] font-semibold">Cuenta</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
            <BreadcrumbItem>
              <Link href="/dashboard/package" className="text-[#7C3AED] font-semibold">Mis paquetes</Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex gap-2 mt-5">
          <div className="w-[3px] h-9 bg-[#515151]" />
          <h2 className="font-semibold text-2xl text-[#515151]">Mis paquetes</h2>
        </div>
      </div>
      <div className="ml-28 mr-28">
        {packages.map((pkg) => (
          <CardPackage
            key={pkg.id}
            id={pkg.id}
            origin={pkg.origin}
            destiny={pkg.destiny}
            weight={pkg.weight}
            distance={pkg.distance}
            cost={pkg.cost}
            status={pkg.status}
            creationDate={pkg.creationDate}
            deliveryDate={pkg.deliveryDate}
            details={pkg.details}
          />
        ))}
      </div>
    </>
  );
};

export default PackagePackage;
