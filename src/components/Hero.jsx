import React from 'react'
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-image.png"
import { motion } from "motion/react"
import { fadeIn, textVariant } from '../../Utils/motion';

const Hero = () => {
    return (
        <section id='home' className='container mx-auto pt-44 pb-6 px-4 sm:px-6 lg:px-24 flex flex-col md:flex-row justify-between items-center'>

            {/* //left column */}
            <div className='w-full md:w-1/2 bg-blue-60'>
                {/* star badge */}
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView="show"
                >
                    <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer group'>
                        <span className='text-blue-600 group-hover:scale-150 group-hover:text-amber-500 transition-transform'>★</span>
                        <span className='text-sm font-medium'>Jump start your growth</span>
                    </div>
                </motion.div>

                <motion.h1
                    variants={textVariant(0.3)}
                    initial="hidden"
                    whileInView="show"
                    className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight'>We boost the growth for <span className='text-blue-600  inline-block relative'>startup to Fortune 500<span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span></span>Companies<span className='inline-block animate-pulse'>⏰</span></motion.h1>

                <motion.p
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    className='text-gray-600 text-lg md:text-xl max-w-xl'>Get the most accurate leads, sales people training and conversions, tools ans more - all within the same one billing.</motion.p>

                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView="show"
                    className='flex gap-3 max-w-md mt-4'>
                    <input
                        type="email"
                        placeholder='Email address'
                        className='flex-1 px-4 py-2 border border-gray-200 rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all'
                    />
                    <button className=' bg-blue-600 px-4 py-2 text-white rounded-xl hover:bg-blue-700 cursor-pointer hover:shadow-xl hover:shadow-blue-100'><ArrowRight /></button>
                </motion.div>
            </div>


            {/* right column */}
            <motion.div
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView="show"
                className='w-full md:w-1/2 mt-10 md:mt-0 pl-0 md:pl-12'>
                <div className='relative'>
                    <img src={heroImage} alt="hero image"
                        className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300'
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
