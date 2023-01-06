import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div className='flex items-center space-x-2'>
        <Link href='/'>
            <Image className='rounded-full'
            src='ncluded-jpeg-easy-composite_20496558.htm#&position=17&from_view=popular'
            alt='logo' 
            width={50}
            height={50}    
            />      
            </Link>
        <h1>Pretomia</h1>
        </div>
    </header>
  )
}

export default Header