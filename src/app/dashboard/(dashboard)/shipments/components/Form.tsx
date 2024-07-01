"use client"
import React, { useState } from 'react'

export default function Form() {
    const [originData, setOriginData] = useState({
        pais: 'México',
        direccion: '',
        codigoPostal: '',
        ciudad: '',
        estado: '',
        correo: '',
        telefono: ''
    });

    const [destinationData, setDestinationData] = useState({
        pais: 'México',
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



    return (
        <div className='w-full flex'>
            <div className='p-8 w-1/2'>
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
                            className="w-full p-2 border border-[#94A3B8] rounded-md mt-1 pl-4 text-[#94A3B8]"
                        >
                            <option value="México">México</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="direccion">
                            Dirección
                        </label>
                        <input
                            type="text"
                            id="direccion"
                            name="direccion"
                            value={originData.direccion}
                            onChange={handleChangeOrigin}
                            placeholder='Ingrese una dirección'
                            className="w-full p-2 border border-[#94A3B8] rounded-md mt-1 pl-4"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="codigoPostal">
                            Código postal*
                        </label>
                        <div className="flex">
                            <input
                                type="text"
                                id="codigoPostal"
                                name="codigoPostal"
                                value={originData.codigoPostal}
                                onChange={handleChangeOrigin}
                                placeholder='Ingrese un código postal'
                                className="flex-1 p-2 border border-[#94A3B8] rounded-l-md mt-1 pl-4"
                            />
                            <button type="button" className="bg-[#7C3AED] text-white p-2 rounded-r mt-1 text-sm px-8">
                                Validar código postal
                            </button>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="ciudad">
                            Ciudad*
                        </label>
                        <input
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            value={originData.ciudad}
                            onChange={handleChangeOrigin}
                            placeholder='Ingrese una ciudad'
                            className="w-full p-2 border border-[#94A3B8] rounded-md mt-1 pl-4"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="estado">
                            Estado*
                        </label>
                        <input
                            type="text"
                            id="estado"
                            name="estado"
                            value={originData.estado}
                            onChange={handleChangeOrigin}
                            placeholder='Ingrese un estado'
                            className="w-full p-2 border border-[#94A3B8] rounded-md mt-1 pl-4"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="correo">
                            Correo
                        </label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={originData.correo}
                            onChange={handleChangeOrigin}
                            placeholder='Ingrese un correo electrónico'
                            className="w-full p-2 border border-[#94A3B8] rounded-md mt-1 pl-4"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="telefono">
                            Número telefónico
                        </label>
                        <div className="flex">
                            <select
                                id="code-pais"
                                name="code-pais"
                                className="items-center px-3 rounded-l border border-r-0 border-[#94A3B8] bg-gray-50 text-gray-500 sm:text-sm">
                                <option value="+52">+52</option>
                            </select>
                            <input
                                type="text"
                                id="telefono"
                                name="telefono"
                                value={originData.telefono}
                                onChange={handleChangeOrigin}
                                placeholder='Ingrese un número telefónico'
                                className="flex-1 p-2 border border-[#94A3B8] rounded-r mt-1"
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
                            className="w-full p-2 border border-[#94A3B8] rounded-md mt-1 pl-4 text-[#94A3B8]"
                        >
                            <option value="México">México</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="direccion">
                            Dirección
                        </label>
                        <input
                            type="text"
                            id="direccion"
                            name="direccion"
                            value={destinationData.direccion}
                            onChange={handleChangeDestination}
                            placeholder='Ingrese una dirección'
                            className="w-full p-2 border border-[#94A3B8] rounded-md mt-1 pl-4"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="codigoPostal">
                            Código postal*
                        </label>
                        <div className="flex">
                            <input
                                type="text"
                                id="codigoPostal"
                                name="codigoPostal"
                                value={destinationData.codigoPostal}
                                onChange={handleChangeDestination}
                                placeholder='Ingrese un código postal'
                                className="flex-1 p-2 border border-[#94A3B8] rounded-l-md mt-1 pl-4"
                            />
                            <button type="button" className="bg-[#7C3AED] text-white p-2 rounded-r mt-1 text-sm px-8">
                                Validar código postal
                            </button>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="ciudad">
                            Ciudad*
                        </label>
                        <input
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            value={destinationData.ciudad}
                            onChange={handleChangeDestination}
                            placeholder='Ingrese una ciudad'
                            className="w-full p-2 border border-[#94A3B8] rounded-md mt-1 pl-4"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="estado">
                            Estado*
                        </label>
                        <input
                            type="text"
                            id="estado"
                            name="estado"
                            value={destinationData.estado}
                            onChange={handleChangeDestination}
                            placeholder='Ingrese un estado'
                            className="w-full p-2 border border-[#94A3B8] rounded-md mt-1 pl-4"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="correo">
                            Correo
                        </label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={destinationData.correo}
                            onChange={handleChangeDestination}
                            placeholder='Ingrese un correo electrónico'
                            className="w-full p-2 border border-[#94A3B8] rounded-md mt-1 pl-4"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#303030] text-sm font-bold mb-2" htmlFor="telefono">
                            Número telefónico
                        </label>
                        <div className="flex">
                            <select
                                id="code-pais"
                                name="code-pais"
                                className="items-center px-3 rounded-l border border-r-0 border-[#94A3B8] bg-gray-50 text-gray-500 sm:text-sm">
                                <option value="+52">+52</option>
                            </select>
                            <input
                                type="text"
                                id="telefono"
                                name="telefono"
                                value={destinationData.telefono}
                                onChange={handleChangeDestination}
                                placeholder='Ingrese un número telefónico'
                                className="flex-1 p-2 border border-[#94A3B8] rounded-r mt-1"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
