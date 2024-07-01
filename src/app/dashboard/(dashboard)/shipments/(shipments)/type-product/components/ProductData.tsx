import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React, { useState } from 'react';

interface Package {
  id: number;
  quantity: number;
  weight: number;
  length: number;
  width: number;
  height: number;
}

const ProductData = () => {
  const [packages, setPackages] = useState<Package[]>([
    { id: 1, quantity: 1, weight: 1, length: 1, width: 1, height: 1 },
  ]);

  const addPackage = () => {
    setPackages([...packages, { id: Date.now(), quantity: 1, weight: 1, length: 1, width: 1, height: 1 }]);
  };

  const removePackage = (id: number) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  const updatePackage = (id: number, key: keyof Package, value: number) => {
    setPackages(
      packages.map(pkg => (pkg.id === id ? { ...pkg, [key]: value } : pkg))
    );
  };

  const totalPackages = packages.length;
  const totalWeight = packages.reduce((sum, pkg) => sum + pkg.weight, 0);

  return (
    <Card className="p-12 mt-6">
      <div className='flex justify-between'>
        <div>
          <h2 className="text-2xl font-bold text-[#7C3AED]">Datos de productos</h2>
          <p className="text-[#939393]">Algunos artículos están prohibidos para envío en México. Ver
            <a href="#" className="text-[#7C3AED]"> artículos prohibidos</a>
          </p>
        </div>
        <div>
          <Button
            variant={'default'}
            onClick={addPackage}
            className="mt-4 p-2 px-8"
          >
            + Añadir paquete
          </Button>
        </div>
      </div>
      <div className='w-full'>
        {packages.map(pkg => (
          <Card key={pkg.id} className="flex items-center space-x-4 mt-4 p-5">
            <div className="flex flex-col w-96">
              <label className="text-[#B8B8B8]">Tipo de producto*</label>
              <select className="p-2 border rounded">
                <option>Paquete</option>
              </select>
            </div>
            <div className='flex w-full items-center justify-start gap-x-4'>
              <div className="flex flex-col w-24">
                <label className="text-[#B8B8B8]">Cantidad*</label>
                <Input
                  type="number"
                  className="p-2 border rounded"
                  value={pkg.quantity}
                  onChange={e => updatePackage(pkg.id, 'quantity', Number(e.target.value))}
                />
              </div>
              <div className="flex flex-col w-24">
                <label className="text-[#B8B8B8]">Peso (kg)*</label>
                <Input
                  type="number"
                  className="p-2 border rounded "
                  value={pkg.weight}
                  onChange={e => updatePackage(pkg.id, 'weight', Number(e.target.value))}
                />
              </div>
              <div className="flex flex-col w-32">
                <label className="text-[#B8B8B8]">Longitud (cm)*</label>
                <Input
                  type="number"
                  className="p-2 border rounded "
                  value={pkg.length}
                  onChange={e => updatePackage(pkg.id, 'length', Number(e.target.value))}
                />
              </div>
              <span>x</span>
              <div className="flex flex-col w-24">
                <label className="text-[#B8B8B8]">Ancho (cm)*</label>
                <Input
                  type="number"
                  className="p-2 border rounded "
                  value={pkg.width}
                  onChange={e => updatePackage(pkg.id, 'width', Number(e.target.value))}
                />
              </div>
              <span>x</span>
              <div className="flex flex-col w-24">
                <label className="text-[#B8B8B8]">Altura (cm)*</label>
                <Input
                  type="number"
                  className="p-2 border rounded "
                  value={pkg.height}
                  onChange={e => updatePackage(pkg.id, 'height', Number(e.target.value))}
                />
              </div>
            </div>
            <div>
              <button onClick={() => removePackage(pkg.id)} className="text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-4 w-full flex flex-col items-end">
        <div className='flex gap-x-12'>
          <p className='text-[#686868]'>Total de paquetes:
            <span className="text-black"> {totalPackages}</span>
          </p>
          <p className='text-[#686868]'>Peso total:
            <span className="text-black"> {totalWeight}kg</span>
          </p>
        </div>
        <Button
          className="mt-10 p-2 px-24">
          <Link
            href="/dashboard/shipments/type-product/shipping-date"
          >
            Siguiente
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default ProductData;
