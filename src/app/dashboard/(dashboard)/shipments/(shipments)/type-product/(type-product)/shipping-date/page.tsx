"use client"
import DirectionDetails from "../../../../components/DirectionDetails";
import TypeProductDetails from "../../../../components/TypeProductDetails";
import { Header } from "./components/Header";
import { PackageShippingDate } from "./components/PackageShippingDate";

const PackageDatePage = () => {
  return (
    <div className='mx-28'>
      <Header />
      <div>
        <DirectionDetails/>
        <TypeProductDetails/>
        <PackageShippingDate/>
      </div>
    </div>
  )
}

export default PackageDatePage;