'use client'
import React, { useEffect, useState } from 'react';
import cube from '@/assets/icons/deployed_code.png'
import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface Package {
    id: number;
    quantity: number;
    weight: number;
    length: number;
    width: number;
    height: number;
}

const TypeProductDetails = () => {
    const [packages, setPackages] = useState<Package[]>([]);

    useEffect(() => {
        const packagesStorage = localStorage.getItem('packages');
        if (packagesStorage) {
            setPackages(JSON.parse(packagesStorage));
        }
    }, []);

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
                {packages.map((pkg, index) => (
                    <p 
                    key={index}
                    className="text-[#B8B8B8] ml-8">
                        Paquete - {pkg.quantity} piezas - {pkg.weight}kg ({pkg.length} x {pkg.width} x {pkg.height} cm)
                    </p>
                ))}
            </div>
        </Card>
    );
};

export default TypeProductDetails;
