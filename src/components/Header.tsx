import React from 'react'
import { logo } from '../../public'
import Image from 'next/image';
import Link from 'next/link';
import { socialsData } from '@/data/socialsData';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="mx-[5%] my-10 flex justify-between items-end">
      <Link href={"/"}>
        <Image src={logo} alt="logo" style={{ width: '300px' }} />
      </Link>
      <div className="flex flex-col items-end gap-4">
        <ThemeSwitcher/>
        <div className="flex w-full px-4 align-bottom justify-between text-2xl z-50 items-center">
          {socialsData.map((link, index) => (
            <Link href={link.path} key={`navlink-${index}`} target="_blank">
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};


export default Header