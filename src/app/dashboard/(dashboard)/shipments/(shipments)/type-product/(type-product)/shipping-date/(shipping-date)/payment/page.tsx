import React from 'react'
import { Header } from './components/Header'
import DirectionDetails from '../../../../../../components/DirectionDetails'
import TypeProductDetails from '../../../../../../components/TypeProductDetails'
import ShippingDateDetails from '../../../../../../components/ShippingDateDetails'
import { CostResumeSummary } from './components/CostResumeSummary'

const PackagePaymentPage = () => {
  return (
    <div className='mx-28'>
      <Header />
      <div className=''>
        <div>
          <DirectionDetails />
          <TypeProductDetails />
          <ShippingDateDetails />
        </div>
        <div>
          <CostResumeSummary/>
        </div>
      </div>
    </div>
  )
}

export default PackagePaymentPage