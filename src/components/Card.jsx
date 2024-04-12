import React from 'react'
import bag from '../assets/bag.png'
import Vector from '../assets/Vector.png'
import arrowb from '../assets/arrowb.png'

function Card({children}) {
  return (
    <div className='bg-white rounded-lg place-content-center w-full h-16 p-2 flex justify-between'>
        <div className=''>
           <img src={bag} alt="" className='rounded-lg' />
        </div>
        <div>
             <div className='flex'>
                <div className='font-medium fontpop'>{children}</div>
                <img src={Vector} alt="vector" className='ml-2'/>
             </div>
             <div className='flex mt-2'>
                <p className='text-[#949494] '>1123 products </p>
                <img src={arrowb} alt="arrow" className='ml-4' />
             </div>
        </div>
      
    </div>
  )
}

export default Card
