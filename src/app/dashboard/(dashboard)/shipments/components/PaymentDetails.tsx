import React from 'react';
import money from '@/assets/icons/payments.png'
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const PaymentDetails = () => {
    return (
        <Card className="flex justify-between items-start p-8 mt-3 px-12">
            <div>
                <div className="flex items-center">
                    <Image
                        src={money}
                        width={24}
                        height={24}
                        alt="Distance"
                        className='mr-2'
                    />
                    <h2 className="text-lg font-semibold text-[#303030]">Pago de envio</h2>
                </div>
                <p className="text-[#B8B8B8] ml-8">
                    [Dia de semana], [Dia], [Mes], [Año]
                </p>
            </div>
            <div>
                <div className="flex items-center">
                    <Image
                        src={money}
                        width={24}
                        height={24}
                        alt="Distance"
                        className='mr-2'
                    />
                    <h2 className="text-lg font-semibold text-[#303030]">Total</h2>
                </div>
                <p className="text-[#B8B8B8] ml-8">
                    $[Costo total de servicio] MXN
                </p>
            </div>
        </Card>
    );
};

export default PaymentDetails;
