import Image from 'next/image'
import React from 'react'
import pin from '../../../public/Spinner-1s-200px.gif'


const Spinner = () => {
  return (
    <>
      <Image className='w-[200px] m-auto block' src={pin} alt='loading...'/>
    </>
  )
}

export default Spinner
