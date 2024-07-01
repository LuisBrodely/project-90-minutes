import React from 'react';
import cube from '@/assets/icons/deployed_code.png'
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const TypeProductDetails = () => {
    return (
        <Card className="flex justify-between items-start p-8 mt-3 px-12">
            <div>
                <div className="flex items-center">
                    <Image
                        src={cube}
                        width={24}
                        height={24}
                        alt="Distance"
                        className='mr-2'
                    />
                    <h2 className="text-lg font-semibold text-[#303030]">Tipo de producto</h2>
                </div>
                <p className="text-[#B8B8B8] ml-8">
                    [Tipo de producto] - [Cantidad] piezas - [Peso]kg ([Longitud]x[Ancho]x[Alto] cm)
                </p>
            </div>
        </Card>
    );
};

export default TypeProductDetails;
