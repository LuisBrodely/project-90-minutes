import { Header } from './components/Header';
import Form from './components/Form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const PackageShipmentsPage = () => {
  return (
    <div className='mx-28'>
      <Header />
      <Card className='flex justify-between flex-col'>
        <Form />
        <div className='flex justify-end p-8'>
          <Button className='px-24'>
            <Link
              href="/dashboard/shipments/type-product"
            >
              Siguiente
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default PackageShipmentsPage;