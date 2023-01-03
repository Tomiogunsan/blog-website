import React from 'react'
import Link from 'next/link';
import {ArrowUturnLeftIcon} from '@heroicons/react/24/solid';

function MyStudioNavbar(props: any) {
  return (
    <div>
        <div>
            <Link href='/'>
               <ArrowUturnLeftIcon className='h-6 '/> 
                Go To Website
                </Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default MyStudioNavbar