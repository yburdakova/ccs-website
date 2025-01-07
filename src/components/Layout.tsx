"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react'
import Transition from './Transition';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="flex-1 flex justify-center w-[80%]">
        <Transition />
        <main className="flex-1 ">{children}</main>
      </motion.div>
    </AnimatePresence>
  )
}

export default Layout