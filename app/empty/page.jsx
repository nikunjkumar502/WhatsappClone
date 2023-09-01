import Image from 'next/image'
import React from 'react'
import whatsapp from '../utils/images/whatsapp.gif'

 const Empty = () => {
  return (
    <div className='border-conversion-border border-1 w-full bg-panel-header-background flex h-full items-center justify-center'>
      <Image src={whatsapp} alt='whatsapp' height={300} width={300}/>
    </div>
  )
}

export default Empty;