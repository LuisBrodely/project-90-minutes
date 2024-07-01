'use client'
import React, { useEffect, useState } from 'react';
import distance from '@/assets/icons/distance.png'
import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface OriginDetails {
    pais: string;
    direccion: string;
    codigoPostal: string;
    ciudad: string;
    estado: string;
    correo: string;
    telefono: string;
}

interface DestinationDetails {
    pais: string;
    direccion: string;
    codigoPostal: string;
    ciudad: string;
    estado: string;
    correo: string;
    telefono: string;
}

const DirectionDetails = () => {
    const [origin, setOrigin] = useState<OriginDetails>({
        pais: 'México',
        direccion: '',
        codigoPostal: '',
        ciudad: '',
        estado: '',
        correo: '',
        telefono: '',
    });

    const [destination, setDestination] = useState<DestinationDetails>({
        pais: 'México',
        direccion: '',
        codigoPostal: '',
        ciudad: '',
        estado: '',
        correo: '',
        telefono: '',
    });

    useEffect(() => {
        const originStorage = localStorage.getItem('origin');
        const destinationStorage = localStorage.getItem('destination');
        if (originStorage) {
            setOrigin(JSON.parse(originStorage));
        }
        if (destinationStorage) {
            setDestination(JSON.parse(destinationStorage));
        }
    }, []);


    return (
        <Card className="flex justify-between items-start p-8 mt-3 px-12">
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
                    {origin.direccion} {origin.ciudad} {origin.estado} {origin.codigoPostal}
                    <br />
                    {origin.pais}
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
                    {destination.direccion} {destination.ciudad} {destination.estado} {destination.codigoPostal}
                    <br />
                    {destination.pais}
                </p>
            </div>
        </Card>
    );
};

export default DirectionDetails;
