"use client";

import ServiceCardsSlider from "@/components/ServiceCardsSlider";
import { fadeIn } from "@/data/variants";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";

export default function Home() {
  return (
    <AnimatePresence>
      <div className='z-10 flex xl:items-center items-start w-[80%]'>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="flex text-center xl:w-[38vw] flex-col lg:text-left mb-2 xl:mb-0">
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl font-bold my-6 xl:max-w-xl leading-relax"
          >
            Innovative <span className="accent">Technology Solutions</span> For Public Management
          </motion.div>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm mx-auto mb-1 text-sm sm:mb-2 sm:text-xl md:mb-10 xl:max-w-xl xl:mx-0 xl:mb-16'
            >
            We have provided innovative, user-friendly software solutions for over 40 years. With exceptional customer service and cutting-edge technology, we help county offices deliver efficient, reliable services to their communities.
          </motion.p>


            {/* Coutup */}
            <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden mx-auto my-4 md:flex md:max-w-xl xl:max-w-xl xl:mx-0"
          >
            <div className="flex flex-1 xl:gap-x-6">
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
          <motion.div 
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="w-full xl:max-w-[65%]"
          >
            <ServiceCardsSlider/>
          </motion.div>
        </div>
      </div>
    </div>
    </AnimatePresence>
  );
}


