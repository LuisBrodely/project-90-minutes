"use client"
import React, { useEffect, useState } from 'react';
import calendar from '@/assets/icons/calendar_clock.png';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface DeliveryDetails{
    tipoEnvio: string;
    diaEntrega: string;
    mesEntrega: string;
    anioEntrega: string;
    diaEnvio: string;
    mesEnvio: string;
    anioEnvio: string;
}

const ShippingDateDetails = () => {
    const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails | null>(null);

    useEffect(() => {
        const deliveryDetails = localStorage.getItem('deliveryDetails');
        if (deliveryDetails) {
            const parsedDeliveryDetails = JSON.parse(deliveryDetails);
            setDeliveryDetails(parsedDeliveryDetails);
        }
    }, []);


    return (
        <Card className="flex justify-between items-start p-8 mt-3 px-12">
            <div>
                <div className="flex items-center">
                    <Image
                        src={calendar}
                        width={24}
                        height={24}
                        alt="Distance"
                        className='mr-2'
                    />
                    <h2 className="text-lg font-semibold text-[#303030]">Fecha de envío</h2>
                </div>
                <p className="text-[#B8B8B8] ml-8">
                    {deliveryDetails?.diaEnvio} de {deliveryDetails?.mesEnvio} del {deliveryDetails?.anioEnvio}
                    <br />
                    Envío {deliveryDetails?.tipoEnvio}
                </p>
            </div>
            <div>
                <div className="flex items-center">
                    <Image
                        src={calendar}
                        width={24}
                        height={24}
                        alt="Distance"
                        className='mr-2'
                    />
                    <h2 className="text-lg font-semibold text-[#303030]">Fecha de entrega</h2>
                </div>
                <p className="text-[#B8B8B8] ml-8">
                    {deliveryDetails?.diaEntrega} de {deliveryDetails?.mesEntrega} del {deliveryDetails?.anioEntrega}
                </p>
            </div>
        </Card>
    );
};

export default ShippingDateDetails;
