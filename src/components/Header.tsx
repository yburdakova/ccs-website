import React from 'react'
import { logo } from '../../public'
import Image from 'next/image';
import Link from 'next/link';
import { socialsData } from '@/data/socialsData';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="my-4 md:my-10 flex justify-center">
      <div className="flex justify-between items-start md:items-end md:w-[80%] w-full">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className='w-64 md:w-72' />
      </Link>
      <div className="flex flex-col items-end gap-2 md:gap-4">
        <ThemeSwitcher/>
        <div className="flex w-full px-4 align-bottom justify-between text-2xl z-10 items-center">
          {socialsData.map((link, index) => (
            <Link href={link.path} key={`navlink-${index}`} target="_blank">
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
      </div>
    </header>
  );
};


export default Header