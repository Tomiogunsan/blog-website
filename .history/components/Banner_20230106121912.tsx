import React from 'react'

export default function Banner() {
  return (
    <div>
        <div>
            <h1 className='text-7xl'>Tomi&apos;s Daily Blog</h1>
            <h2 className='mt-5 md:mt-0'>
                Welcome to {''} 
                <span className='underline decoration-4 decoration-[#f7ab0a]'>
                    Every Developers
                </span>{''}
                favourite
            </h2>
        </div>
        <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
            New product features | The latest in technology | The weekly debugging nightmares & More!
        </p>
    </div>
  )
}
