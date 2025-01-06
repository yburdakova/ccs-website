import React from 'react'
import { logo } from '../../public'
import Image from 'next/image';
import Link from 'next/link';
import { socialsData } from '@/data/socialsData';

const Header = () => {
  return (
    <header className='mx-[5%] my-10 flex justify-between items-end'>
      <Link href={"/"}>
        <Image src={logo} alt="logo" style={{ width: '300px'}} />
      </Link>
      <div className="flex gap-4 align-bottom text-2xl z-50">
        {socialsData.map((link, index) => (
          <Link href={link.path} key={`navlink-${index}`} target='_blank'>
            {link.icon}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header