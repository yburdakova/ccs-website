"use client";

import React from 'react';
import Link from 'next/link';
import SupportIcon from './icons/SupprtIcon';
import { usePathname } from 'next/navigation';

const Nav = () => {
    const pathname = usePathname();

  const currentPath = "/support"
  return (
    <div className='flex absolute top-30 xl:bottom-10 right-[4.5%] z-50 '>
      <div className='rounded-full bg-blue-600/10 dark:bg-white/10 p-4 hover:animate-shake '>
          <Link href={currentPath} className={`${currentPath === pathname && 'accent'} hover:accent transition-all duration-300`}>
            <SupportIcon/>
          </Link>
      </div>
    </div>
  );
};

export default Nav;
