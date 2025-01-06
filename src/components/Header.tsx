import React from 'react'
import { logo } from '../../public'
import Image from 'next/image';

const Header = () => {
  return (
    <div className='ml-[5%] my-10'>
      <Image src={logo} alt="logo" style={{ width: '300px'}} />
    </div>
  )
}

export default Header