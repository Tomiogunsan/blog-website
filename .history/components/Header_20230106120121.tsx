import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div className='flex items-center space-x-2'>
        <Link href='/'>
            <Image className='rounded-full'
            src='https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
            alt='logo' 
            width={50}
            height={50}    
            />      
            </Link>
        <h1>Pretomia</h1>
        </div>

        <div>
            <p className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[]' >
            Sign up to the University of Code
            </p>
        </div>
    </header>
  )
}

export default Header