import { transirionVariants } from '@/data/transirionVariants'
import { motion } from 'framer-motion'
import React from 'react'

const Transition = () => {
  return (
    <>
      <motion.div
        className='fixed bottom-0 z-30 w-screen h-screen topp-0 right-full bg-[#0f354f]'
        variants={transirionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{delay:0.1, duration:0.3, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div
        className='fixed bottom-0 z-20 w-screen h-screen topp-0 right-full bg-[#175883]'
        variants={transirionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{delay:0.2, duration:0.4, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div
        className='fixed bottom-0 z-10 w-screen h-screen topp-0 right-full bg-[#3990CE]'
        variants={transirionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{delay:0.3, duration:0.4, ease: 'easeInOut'}}
      ></motion.div>
    </>
  )
}

export default Transition