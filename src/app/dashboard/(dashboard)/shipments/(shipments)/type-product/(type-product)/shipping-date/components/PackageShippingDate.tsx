import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@radix-ui/react-select'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import calendar from '@/assets/icons/calendar_clock.png'
import clock from '@/assets/icons/acute.svg'
import car from '@/assets/icons/local_shipping.svg'
import money from '@/assets/icons/payments.png'

export function PackageShippingDate() {
    return (
        <div className="space-y-6 w-full mt-8">
            <Card className="bg-white shadow-lg rounded-sm p-6 w-full">
                <CardHeader>
                    <CardTitle className="text-[#7C3AED] text-lg">
                        Fecha de envío de paquete
                    </CardTitle>
                    <div className="flex space-x-2 mt-4">
                        <Button variant={"default"}>[Dia] de [Mes]</Button>
                        <Button variant={"outline"}>[Dia] de [Mes]</Button>
                        <Button variant={"outline"}>[Dia] de [Mes]</Button>
                        <Button variant={"outline"}>[Dia] de [Mes]</Button>
                        <Button variant={"outline"}>[Dia] de [Mes]</Button>
                    </div>
                    <Separator className="my-4" />
                </CardHeader>
                <div className="flex space-x-4 text-sm">
                    <CardContent>
                        <p>Fecha de recolección del paquete</p>
                        <CardDescription>32 de Mayo de 2024</CardDescription>
                    </CardContent>
                    <CardContent className="flex items-center">
                        <p>Hora de recolección</p>
                        <CardDescription>
                            9:00 a.m. (CT) - 18:00 p.m. (CT)
                        </CardDescription>
                    </CardContent>
                    <CardContent>
                        <p>Dirección de recolección del paquete</p>
                        <CardDescription>
                            [Dirección], [Ciudad], [Estado], [Código Postal], [País]
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
                        <CardDescription className="text-xl text-purple-600 font-semibold">
                            26 de Mayo del 2024
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
                        <CardDescription className="text-xl text-purple-600 font-semibold">
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
                        <CardDescription className="text-xl text-purple-600 font-semibold">
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
                        <CardDescription className="text-xl text-purple-600 font-semibold">
                            $[Precio] MXN
                        </CardDescription>
                    </CardContent>
                </div>
                <CardFooter className="flex justify-end pt-24">
                    <Button className="pl-20 pr-20">
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
