import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import visa from '@/assets/icons/visa.svg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CostResumeSummary() {
    return (
        <Card className="p-8 mt-6 mb-32">
            <h2 className="text-2xl font-semibold text-[#7C3AED] mb-4">Resumen de costos de envío</h2>
            <div className="grid grid-cols-2 gap-8">
                <div className='text-[#686868]'>
                    <p>
                        <strong>Envío [Tipo de envío]</strong><br />
                        [Día de semana], [Día] [Mes], [Año] - [Horario de entrega]
                    </p>
                    <p className="mt-4">
                        <strong>Total de paquetes [Numero]</strong><br />
                        [Tipo de producto] - [Cantidad] - [Peso] kg<br />
                        [Tipo de producto] - [Cantidad] - [Peso] kg
                    </p>
                    <p className="mt-4">
                        <strong>Peso total [Peso] kg</strong>
                    </p>
                    <p className="mt-4">
                        <strong>Dirección de origen</strong><br />
                        [Dirección] [Ciudad] [Estado] [Código Postal] [País]
                    </p>
                    <p className="mt-4">
                        <strong>Dirección de destino</strong><br />
                        [Dirección] [Ciudad] [Estado] [Código Postal] [País]
                    </p>
                    <p className="mt-4">
                        <strong>Distancia [Distancia] km</strong>
                    </p>
                </div>
                <div className="border-l pl-8">
                    <p className="flex justify-between">
                        <span>Costos de recolección</span>
                        <span>[Depende membresía]</span>
                    </p>
                    <p className="flex justify-between mt-2">
                        <span>Costo de envío</span>
                        <span>${`[Costo]`}</span>
                    </p>
                    <p className="flex justify-between mt-2">
                        <span>Descuento</span>
                        <span>%[Depende membresía]</span>
                    </p>
                    <p className="flex justify-between mt-2">
                        <span>Subtotal</span>
                        <span>${`[Costo]`}</span>
                    </p>
                    <p className="flex justify-between mt-2">
                        <span>IVA</span>
                        <span>${`[IVA]`}</span>
                    </p>
                    <p className="flex justify-between mt-4 font-semibold text-xl">
                        <span>Total</span>
                        <span className="text-[#7C3AED]">${`[Costo]`}</span>
                    </p>
                </div>
            </div>
            <div className='mt-24'>
                <h2 className="text-2xl font-bold text-[#7C3AED] mb-4">Seleccione método de pago</h2>
                <Card className='p-8'>
                    <div>
                        <p className="text-[#686868] font-semibold mb-8">Mis tarjetas</p>
                        <Card className="p-4 mb-2">
                            <label className="flex items-center space-x-4">
                                <input type="radio" name="payment-method" className="form-radio active:text-purple-600" />
                                <Image
                                    src={visa}
                                    alt='Visa'
                                    width={40}
                                    height={40}
                                />
                                <span className="font-semibold">Visa que termina en [Terminación]</span>
                                <span className="flex-grow text-right">[Nombre de tarjeta]</span>
                                <span className="text-gray-500">[Fecha Vencimiento]</span>
                            </label>
                        </Card>
                        <Card className="p-4 ">
                            <label className="flex items-center space-x-4">
                                <input type="radio" name="payment-method" className="form-radio checked:text-[#7C3AED]" />
                                <span className="font-bold text-xl checked:text-[#7C3AED]">+</span>
                                <span className="font-semibold checked:text-[#7C3AED]">Agregar tarjeta</span>
                            </label>
                        </Card>
                    </div>
                </Card>
            </div>
            <div className='flex justify-end mt-12'>
                <Button>
                    <Link
                    href={'/dashboard/shipments/type-product/shipping-date/payment/shipping-summary'}
                    >
                        Pagar envío
                    </Link>
                </Button>
            </div>
        </Card>
    )
}
