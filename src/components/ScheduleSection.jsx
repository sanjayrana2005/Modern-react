import React from 'react'
import scheduleImage from "../assets/stats.webp"
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react"
import { fadeIn } from '../../Utils/motion';

function ScheduleSection() {
    return (
        <section className='w-full py-16 px-4 sm:px-6 lg:px-24 bg-gray-100'>
            <div
                className='container mx-auto mx-w-7xl  md:py-24 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-22'>
                {/* left section  */}
                <motion.div 
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView="show"
                className='w-full md:w-1/2 '>
                    <img src={scheduleImage} alt="schedule Image"
                        className='w-full h-auto'
                    />
                </motion.div>

                {/* right section */}
                <motion.div 
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView="show"
                className='w-full md:w-1/2'>
                    <p className='text-orange-500 font-semibold'>SCHEDULE</p>
                    <h2 className='font-bold text-3xl md:text-4xl text-neutral-900 mt-2 mb-5'>Streamlime Your Bussiness <br /> with Smart Scheduling Solution</h2>
                    <p className='text-gray-600 mb-6'>Take control og your time and boost productivity with our intelligent scheduling system.Automate appointments, manage team availability, and delever exceptional customer experiences through seamless clender management</p>

                    <a href="#" className='flex items-center font-semibold text-blue-500 gap-2 hover:gap-4 transition-all w-fit'>Explore scheduling features <ArrowRight size={20} />
                    </a>


                </motion.div>
            </div>
        </section>
    )
}

export default ScheduleSection
