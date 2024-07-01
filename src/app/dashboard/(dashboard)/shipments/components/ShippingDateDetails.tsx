import React from 'react';
import calendar from '@/assets/icons/calendar_clock.png';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const ShippingDateDetails = () => {
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
                    [Dia de semana], [Dia] [Mes], [Año]
                    <br />
                    Envió [Tipo de envió]
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
                    [Dia de semana], [Dia] [Mes], [Año]
                    <br />
                    [Horario de entrega]
                </p>
            </div>
        </Card>
    );
};

export default ShippingDateDetails;
