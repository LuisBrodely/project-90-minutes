import React from 'react';
import distance from '@/assets/icons/distance.png'
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const ShipmentDetails = () => {
    return (
        <Card className="flex justify-between items-start p-8 mt-6 px-12">
            <div>
                <div className="flex items-center">
                    <Image
                        src={distance}
                        width={24}
                        height={24}
                        alt="Distance"
                        className='mr-2'
                    />
                    <h2 className="text-lg font-semibold text-[#303030]">Lugar de origen:</h2>
                </div>
                <p className="text-[#B8B8B8] ml-8">
                    [Dirección] [Ciudad] [Estado] [Código Postal]
                    <br />
                    [País]
                </p>
            </div>
            <div>
                <div className="flex items-center">
                    <Image
                        src={distance}
                        width={24}
                        height={24}
                        alt="Distance"
                        className='mr-2'
                    />
                    <h2 className="text-lg font-semibold text-[#303030]">Lugar de destino:</h2>
                </div>
                <p className="text-[#B8B8B8] ml-8">
                    [Dirección] [Ciudad] [Estado] [Código Postal]
                    <br />
                    [País]
                </p>
            </div>
        </Card>
    );
};

export default ShipmentDetails;
