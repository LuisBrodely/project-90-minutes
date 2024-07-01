import React from 'react';
import box from '@/assets/img/box.png'
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const PackageDetails = () => {
    return (
        <Card className="flex justify-between items-start p-8 mt-3 px-12">
            <div className='text-[#7A7A7A]'>
                <div className="flex items-center">
                    <Image
                        src={box}
                        width={90}
                        height={94}
                        alt="Distance"
                        className='mr-2'
                    />
                    <div className='flex flex-col gap-y-2'>
                        <h2 className="ml-8">[Tipo de paquete]</h2>
                        <p className="ml-8">
                            [Numero] Cajas de tamaño [Tipo de tamaño].
                        </p>
                        <p className="ml-8">
                            Peso [Numero] kg.
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default PackageDetails;
