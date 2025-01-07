"use client";

import { fadeIn } from "@/data/variants";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";

export default function Home() {
  return (
    <AnimatePresence>
      <div className="w-[80%]">
        <motion.div
          variants={fadeIn('down', 0.3)}
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
          <div className="">
          <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden mx-auto my-4 md:flex md:max-w-xl xl:max-w-none xl:mx-0"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl accent">
                  <CountUp
                    start={0}
                    end={40}
                    duration={5}
                  /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl accent">
                  <CountUp
                    start={0}
                    end={5}
                    duration={5}
                  /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Unique software</div>
              </div>
              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl accent">
                  <CountUp
                    start={0}
                    end={22}
                    duration={5}
                  /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Counties as customers</div>
              </div>
              {/* Awards */}
              <div className="relative flex-1 ">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl accent">
                  <CountUp
                    start={0}
                    end={30}
                    duration={5}
                  /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Completed projects</div>
              </div>
            </div>
          </motion.div>
          </div>
      </div>
    </AnimatePresence>
  );
}


