import { Header } from './components/Header';
import Form from './components/Form';
import { Card } from '@/components/ui/card';

const PackageShipmentsPage = () => {
  return (
    <div className='mx-28'>
      <Header />
      <Card>
        <Form />
      </Card>
    </div>
  )
}

export default PackageShipmentsPage;