
import { useRouter } from 'next/navigation';
import { CardPackage } from '../package/components/CardPackage';
import { Header } from './components/Header';
import Form from './components/Form';

const PackageShipmentsPage = () => {
  return (
    <div className='mx-28'>
      <Header />
      <div className='flex justify-between'>
        <Form />
        <Form />
      </div>
    </div>
  )
}

export default PackageShipmentsPage;