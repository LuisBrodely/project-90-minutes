import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@radix-ui/react-select'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import calendar from '@/assets/icons/calendar_clock.png'
import clock from '@/assets/icons/acute.svg'
import car from '@/assets/icons/local_shipping.svg'
import money from '@/assets/icons/payments.png'
import { get } from 'http'

interface DestinationDetails {
    pais: string;
    direccion: string;
    codigoPostal: string;
    ciudad: string;
    estado: string;
    correo: string;
    telefono: string;
}

interface Package {
    id: number;
    quantity: number;
    weight: number;
    length: number;
    width: number;
    height: number;
}

interface DeliveryDetails{
    tipoEnvio: string;
    diaEntrega: string;
    mesEntrega: string;
    anioEntrega: string;
    diaEnvio: string;
    mesEnvio: string;
    anioEnvio: string;
}



const getFormattedDate = (daysToAdd: number) => {
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const today = new Date();
    const day = today.getDate() + daysToAdd;
    const month = months[today.getMonth()];
    return `${day} de ${month}`;
}

const getMonth = () => {
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const today = new Date();
    return months[today.getMonth()];
}
const getDay = () => {
    const today = new Date();
    return today.getDate();
}

const getYear = () => {
    const today = new Date();
    return today.getFullYear();
}


export function PackageShippingDate() {
    const [packages, setPackages] = useState<Package[]>([]);
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
        const destinationStorage = localStorage.getItem('destination');
        if (destinationStorage) {
            setDestination(JSON.parse(destinationStorage));
        }
        const packagesStorage = localStorage.getItem('packages');
        if (packagesStorage) {
            setPackages(JSON.parse(packagesStorage));
        }
    }, []);

    const handleSubmit = () => {
        // Hacer un localstorage con los datos de envio
        const deliveryDetails: DeliveryDetails = {
            tipoEnvio: 'Express',
            diaEntrega: getFormattedDate(15),
            mesEntrega: getMonth(),
            anioEntrega: getYear().toString(),
            diaEnvio: getFormattedDate(0),
            mesEnvio: getMonth(),
            anioEnvio: getYear().toString(),
        }
        localStorage.setItem('deliveryDetails', JSON.stringify(deliveryDetails));
    }

    return (
        <div className="space-y-6 w-full mt-8">
            <Card className="bg-white shadow-lg rounded-sm p-6 w-full">
                <CardHeader>
                    <CardTitle className="text-[#7C3AED] text-lg">
                        Fecha de envío de paquete
                    </CardTitle>
                    <div className="flex space-x-2 mt-4">
                        <Button variant={"default"} className='py-6 px-8'>
                            {getFormattedDate(0)} <br />
                            Hoy
                        </Button>
                    </div>
                    <Separator className="my-4" />
                </CardHeader>
                <div className="flex space-x-4 text-sm">
                    <CardContent>
                        <p>Fecha de entrega estimada del paquete</p>
                        <CardDescription>
                            {getFormattedDate(15)} del 2024
                        </CardDescription>
                    </CardContent>
                    <CardContent>
                        <p>Dirección de recolección del paquete</p>
                        <CardDescription>
                            {destination.direccion}, {destination.ciudad}, {destination.estado}, {destination.codigoPostal}, {destination.pais}
                        </CardDescription>
                    </CardContent>
                </div>
                <div className="flex space-x-4 text-sm">
                    <CardContent>
                        <div className='flex gap-x-4'>
                            <Image
                                src={calendar}
                                alt="calendar"
                                width={24}
                                height={24}
                            />
                            <p>Fecha de entrega</p>
                        </div>
                        <CardDescription className="text-xl text-[#7C3AED] font-semibold">
                            {getFormattedDate(15)} del 2024
                        </CardDescription>
                    </CardContent>
                    <CardContent>
                        <div className='flex gap-x-4'>
                            <Image
                                src={clock}
                                alt="calendar"
                                width={24}
                                height={24}
                            />
                            <p>Horario de entrega</p>
                        </div>
                        <CardDescription className="text-xl text-[#7C3AED] font-semibold">
                            Al final del día
                        </CardDescription>
                    </CardContent>
                    <CardContent>
                        <div className='flex gap-x-4'>
                            <Image
                                src={car}
                                alt="calendar"
                                width={24}
                                height={24}
                            />
                            <p>Tipo de servicio</p>
                        </div>
                        <CardDescription className="text-xl text-[#7C3AED] font-semibold">
                            Express
                        </CardDescription>
                    </CardContent>
                    <CardContent>
                        <div className='flex gap-x-4'>
                            <Image
                                src={money}
                                alt="calendar"
                                width={24}
                                height={24}
                            />
                            <p>Precio estimado</p>
                        </div>
                        <CardDescription className="text-xl text-[#7C3AED] font-semibold">
                            {/* Calcular un precio estimado con los kg por 10 */}
                            $ {packages.reduce((acc, pkg) => acc + pkg.weight, 0) * 10}.00 MXN
                        </CardDescription>
                    </CardContent>
                </div>
                <CardFooter className="flex justify-end pt-6">
                    <Button 
                    onClick={handleSubmit}
                    className="pl-20 pr-20">
                        <Link
                            href="/dashboard/shipments/type-product/shipping-date/payment"
                        >
                            Siguiente
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>

    )
}
