import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { CardPackage } from "./components/CardPackage";

const PackagePackage = () => {
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
          <h2 className="font-semibold text-2xl text-[#515151]">
            Mis paquetes
          </h2>
        </div>
      </div>
      <div className="ml-28 mr-28">
        <CardPackage title="Paquete entregado" />
        <CardPackage title="Paquete entregado" />
        <CardPackage title="Paquete entregado" />
        <CardPackage title="Paquete entregado" />
      </div>
    </>
  );
};

export default PackagePackage;
