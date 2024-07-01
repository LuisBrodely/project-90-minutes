"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React, { useState } from 'react'


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

export default function Form() {
    const [originData, setOriginData] = useState<OriginDetails>({
        pais: 'Mexico',
        direccion: '',
        codigoPostal: '',
        ciudad: '',
        estado: '',
        correo: '',
        telefono: ''
    });

    const [destinationData, setDestinationData] = useState<DestinationDetails>({
        pais: 'Mexico',
        direccion: '',
        codigoPostal: '',
        ciudad: '',
        estado: '',
        correo: '',
        telefono: ''
    });

    const handleChangeOrigin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOriginData({
            ...originData,
            [e.target.name]: e.target.value
        });
    }

    const handleChangeDestination = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDestinationData({
            ...destinationData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        localStorage.setItem('origin', JSON.stringify(originData));
        localStorage.setItem('destination', JSON.stringify(destinationData));
    }





    return (
        <div>
            <div className='w-full flex'>
                <div className='px-8 pt-8 w-1/2'>
                    <div>
                        <h3 className='text-xl text-[#7C3AED] font-semibold'>De</h3>
                    </div>
                    <form className="w-full bg-white mt-6">
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2 " htmlFor="pais">
                                País/Territorio
                            </label>
                            <select
                                id="pais"
                                name="pais"
                                disabled
                                className="w-full p-2 border border-[#c3c3c3]  bg-gray-100 rounded-md mt-1 pl-4 text-[#656262]"
                            >
                                <option value="México">México</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="direccion">
                                Dirección
                            </label>
                            <Input
                                type="text"
                                id="direccion"
                                name="direccion"
                                value={originData.direccion}
                                onChange={handleChangeOrigin}
                                autoComplete='off'
                                placeholder='Ingrese una dirección'
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="codigoPostal">
                                Código postal*
                            </label>
                            <div className="flex gap-x-4">
                                <Input
                                    type="text"
                                    id="codigoPostal"
                                    name="codigoPostal"
                                    value={originData.codigoPostal}
                                    onChange={handleChangeOrigin}
                                    autoComplete='off'
                                    placeholder='Ingrese un código postal'
                                />
                                <Button
                                    className="bg-[#7C3AED] text-white p-2 rounded-r text-sm px-12">
                                    Validar código postal
                                </Button>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="ciudad">
                                Ciudad*
                            </label>
                            <Input
                                type="text"
                                id="ciudad"
                                name="ciudad"
                                autoComplete='off'
                                value={originData.ciudad}
                                onChange={handleChangeOrigin}
                                placeholder='Ingrese una ciudad'
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="estado">
                                Estado*
                            </label>
                            <Input
                                type="text"
                                id="estado"
                                name="estado"
                                autoComplete='off'
                                value={originData.estado}
                                onChange={handleChangeOrigin}
                                placeholder='Ingrese un estado'
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="correo">
                                Correo
                            </label>
                            <Input
                                type="email"
                                id="correo"
                                name="correo"
                                value={originData.correo}
                                autoComplete='off'
                                onChange={handleChangeOrigin}
                                placeholder='Ingrese un correo electrónico'
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="telefono">
                                Número telefónico
                            </label>
                            <div className="flex gap-x-3">
                                <select
                                    id="code-pais"
                                    name="code-pais"
                                    className="items-center px-3 rounded border border-[#d0d0d0] bg-gray-50 text-gray-500 sm:text-sm">
                                    <option value="+52">+52</option>
                                </select>
                                <Input
                                    type="text"
                                    id="telefono"
                                    name="telefono"
                                    autoComplete='off'
                                    value={originData.telefono}
                                    onChange={handleChangeOrigin}
                                    placeholder='Ingrese un número telefónico'
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='px-8 pt-8 w-1/2 border-l border-l-[#E4E4E4]'>
                    <div>
                        <h3 className='text-xl text-[#7C3AED] font-semibold'>A</h3>
                    </div>
                    <form className="w-full bg-white mt-6">
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2 " htmlFor="pais">
                                País/Territorio
                            </label>
                            <select
                                id="pais"
                                name="pais"
                                disabled
                                className="w-full p-2 border border-[#c3c3c3]  bg-gray-100 rounded-md mt-1 pl-4 text-[#656262]"
                            >
                                <option value="México">México</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="direccion">
                                Dirección
                            </label>
                            <Input
                                type="text"
                                id="direccion"
                                name="direccion"
                                autoComplete='off'
                                value={destinationData.direccion}
                                onChange={handleChangeDestination}
                                placeholder='Ingrese una dirección'
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="codigoPostal">
                                Código postal*
                            </label>
                            <div className="flex gap-x-4">
                                <Input
                                    type="text"
                                    id="codigoPostal"
                                    name="codigoPostal"
                                    autoComplete='off'
                                    value={destinationData.codigoPostal}
                                    onChange={handleChangeDestination}
                                    placeholder='Ingrese un código postal'
                                />
                                <Button
                                    className="bg-[#7C3AED] text-white p-2 rounded-r text-sm px-12">
                                    Validar código postal
                                </Button>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="ciudad">
                                Ciudad*
                            </label>
                            <Input
                                type="text"
                                id="ciudad"
                                name="ciudad"
                                value={destinationData.ciudad}
                                autoComplete='off'
                                onChange={handleChangeDestination}
                                placeholder='Ingrese una ciudad'
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="estado">
                                Estado*
                            </label>
                            <Input
                                type="text"
                                id="estado"
                                name="estado"
                                value={destinationData.estado}
                                autoComplete='off'
                                onChange={handleChangeDestination}
                                placeholder='Ingrese un estado'
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="correo">
                                Correo
                            </label>
                            <Input
                                type="email"
                                id="correo"
                                name="correo"
                                autoComplete='off'
                                value={destinationData.correo}
                                onChange={handleChangeDestination}
                                placeholder='Ingrese un correo electrónico'
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="telefono">
                                Número telefónico
                            </label>
                            <div className="flex gap-x-3">
                                <select
                                    id="code-pais"
                                    name="code-pais"
                                    className="items-center px-3 rounded border border-[#d0d0d0] bg-gray-50 text-gray-500 sm:text-sm">
                                    <option value="+52">+52</option>
                                </select>
                                <Input
                                    type="text"
                                    id="telefono"
                                    name="telefono"
                                    autoComplete='off'
                                    value={destinationData.telefono}
                                    onChange={handleChangeDestination}
                                    placeholder='Ingrese un número telefónico'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex justify-end p-8'>
                <Button
                    onClick={handleSubmit}
                    className='px-24'>
                    <Link
                        href="/dashboard/shipments/type-product"
                    >
                        Siguiente
                    </Link>
                </Button>
            </div>
        </div>
    )
}
