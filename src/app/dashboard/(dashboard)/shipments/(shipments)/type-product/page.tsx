"use client"
import DirectionDetails from "../../components/DirectionDetails";
import { Header } from "./components/Header";
import ProductData from "./components/ProductData";

const PackageTypePage = () => {
  return (
    <div className='mx-28'>
      <Header />
      <div>
        <DirectionDetails/>
        <ProductData />
      </div>
    </div>
  )
}

export default PackageTypePage;