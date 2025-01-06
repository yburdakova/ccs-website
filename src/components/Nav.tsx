"use client";

import React from 'react';
import { navData } from '@/data/navData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Nav = () => {

  const pathname = usePathname();
  console.log(pathname)

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed bottom-0 h-max mt-auto xl:right-[5%] z-40 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen px-[5%] xl:px-0'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-12  backdrop-blur-sm text-3xl rounded-full h-fit min-w-fit mb-6  xl:mb-0 py-4 xl:py-10 px-4 md:px-10 xl:px-4 bg-blue-600/10 dark:bg-white/10'>
        {navData.map((link, index) => (
          <Link
            href={link.path}
            key={`navlink-${index}`}
            className={`${link.path === pathname && 'accent'} relative flex items-center group hover:accent transition-all duration-300`}>
              <div className="absolute pr-16 right-2 hidden xl:group-hover:flex">
                <div className="bg-white border-2 dark:border-0 relative flex items-center p-[6px] rounded-[5px]">
                  <div className="text-[12px] leading-none font-semibold capitalize whitespace-nowrap">
                    {link.name}
                  </div>
                  <div className="absolute left-full top-[50%] translate-y-[-50%] border-solid border-l-[8px] border-y-[6px] border-r-0 dark:border-l-white dark:border-y-transparent border-l-gray-300 border-y-transparent"></div>
                </div>
              </div>
              {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
