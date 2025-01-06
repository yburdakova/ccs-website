import React from 'react';
import { navData } from '@/data/navData';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed bottom-0 h-max mt-auto xl:right-[5%] z-40 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen px-[5%] xl:px-0'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-12  backdrop-blur-sm text-3xl rounded-full h-fit min-w-fit mb-6  xl:mb-0 py-4 xl:py-10 px-4 md:px-10 xl:px-4 bg-blue-600/10 dark:bg-white/10'>
        {navData.map((link, index) => (
          <Link href={link.path} key={`navlink-${index}`} >
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
