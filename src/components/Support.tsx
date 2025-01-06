import React from 'react';
import Link from 'next/link';
import SupportIcon from './icons/SupprtIcon';

const Nav = () => {
  return (
    <nav className='flex absolute top-30 xl:bottom-10 right-[4.5%] z-50'>
      <div className='rounded-full bg-blue-600/10 dark:bg-white/10 p-4'>
          <Link href={"/support"}>
            <SupportIcon/>
          </Link>
      </div>
    </nav>
  );
};

export default Nav;
