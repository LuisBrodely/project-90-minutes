"use client"
import React, { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState({
        direccion: '',
        codigoPostal: '',
        ciudad: '',
        estado: '',
        correo: '',
        telefono: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    return (
        <form className="w-full bg-white p-8 rounded-l-lg shadow-md">
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
                    value={formData.direccion}
                    onChange={handleChange}
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
                        value={formData.codigoPostal}
                        onChange={handleChange}
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
                    value={formData.ciudad}
                    onChange={handleChange}
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
                    value={formData.estado}
                    onChange={handleChange}
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
                    value={formData.correo}
                    onChange={handleChange}
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
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder='Ingrese un número telefónico'
                        className="flex-1 p-2 border border-[#94A3B8] rounded-r mt-1"
                    />
                </div>
            </div>
        </form>
    )
}
