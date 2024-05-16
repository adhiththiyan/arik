import React from 'react'
import arrow from "@arik-portfolio/images/Badge (4).png"

function NavigateToTop() {
  return <>
    <div className='flex gap-4 items-center'>
      <p className='text-xs opacity-50'>TO TOP</p>
      <img src={arrow} className='cursor-pointer'/>
    </div>
  </>
}

export default NavigateToTop
