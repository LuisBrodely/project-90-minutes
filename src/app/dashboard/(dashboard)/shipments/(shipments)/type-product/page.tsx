"use client"
import { Header } from "./components/Header";
import ProductData from "./components/ProductData";
import ShipmentDetails from "./components/ShipmentDetails";

const PackageTypePage = () => {
  return (
    <div className='mx-28'>
      <Header />
      <div>
        <ShipmentDetails />
        <ProductData />
      </div>
    </div>
  )
}

export default PackageTypePage;