import { CardOrder } from "../CardOrder";
import { CardSearchOrder } from "../CardSearchOrder";
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Package {
  id: string;
  status: string;
}

export const OrderSection = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const getPackages = async () => {
      try {
        const response = await axios.get('http://dev-90minutos-1292116088.us-east-2.elb.amazonaws.com/package/v1/get');
        const packagesData = response.data.data;
        setPackages(packagesData);
      } catch (error) {
        setError('Failed to fetch packages');
      } finally {
        setLoading(false);
      }
    };

    getPackages();
  }, []);

  return (
    <>
      <h2 className="text-[#7C3AED] font-semibold text-2xl">Mis Pedidos</h2>
      <CardSearchOrder />
      <div className="overflow-scroll overflow-x-hidden max-h-[424px] w-[920px] pb-1">
      {packages.map((pkg) => (
          <CardOrder
            key={pkg.id}
            id={pkg.id}
            status={pkg.status}
          />
        ))}
      </div>
    </>
  );
};
