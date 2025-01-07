"use client";

import { fadeIn } from "@/data/variants";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <div className="">
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-3xl font-bold my-6"
        >
          Innovative <span className="accent">Technology Solutions</span> For Public Management
        </motion.div>
        <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm mx-auto mb-6 text-sm sm:mb-2 sm:text-xl md:mb-10 xl:max-w-xl xl:mx-0 xl:mb-16'
          >
            We have provided innovative, user-friendly software solutions for over 40 years. With exceptional customer service and cutting-edge technology, we help county offices deliver efficient, reliable services to their communities.
          </motion.p>
      </div>
    </AnimatePresence>
  );
}


