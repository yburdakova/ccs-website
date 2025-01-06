import React from 'react';
import { navData } from '@/data/navData';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed bottom-0 h-max mt-auto xl:right-[5%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-12 px-6 py-10 md:px-40 xl:px-2 backdrop-blur-sm text-3xl rounded-full h-fit xl:mx-10 md:mb-6'>
        {navData.map((link, index) => (
          <Link href={link.path} key={`link-${index}`}>
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
