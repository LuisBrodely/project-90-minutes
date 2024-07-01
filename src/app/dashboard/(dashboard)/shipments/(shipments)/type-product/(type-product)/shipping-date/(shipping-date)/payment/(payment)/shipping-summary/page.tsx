import React from 'react'
import { Header } from './components/Header'
import DirectionDetails from '../../../../../../../../components/DirectionDetails'
import TypeProductDetails from '../../../../../../../../components/TypeProductDetails'
import ShippingDateDetails from '../../../../../../../../components/ShippingDateDetails'
import PaymentDetails from '../../../../../../../../components/PaymentDetails'
import PackageDetails from '../../../../../../../../components/PackageDetails'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const PackagePaymentPage = () => {
    return (
        <div className='mx-28 mb-32'>
            <Header />
            <div className='mt-6'>
                <div>
                    <div>
                        <h3 className='text-4xl font-semibold text-[#7C3AED]'>
                            ¡Pago exitoso!
                        </h3>
                    </div>
                    <div className='flex gap-x-3 mt-3'>
                        <h5 className='text-lg font-semibold text-[#686868]'>
                            Código de seguimiento:
                        </h5>
                        <p className='text-lg text-[#9D75EB]'>
                            ID: [ID que se genere]
                        </p>
                    </div>
                </div>
                <div>
                    <DirectionDetails />
                    <TypeProductDetails />
                    <ShippingDateDetails />
                    <PaymentDetails />
                </div>
                <div className='mt-6'>
                    <div>
                        <h3 className='text-3xl font-semibold text-[#7C3AED]'>
                            Paquetes
                        </h3>
                    </div>
                    <PackageDetails />
                    <div className='flex justify-end my-8'>
                        <Button className='px-24'>
                            <Link
                                href={'/dashboard/shipments'}
                            >
                                Salir
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackagePaymentPage