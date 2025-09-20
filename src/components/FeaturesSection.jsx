import React from 'react'
import { features2 } from '../assets/data'
import { motion } from "motion/react"
import { scale } from '../../Utils/motion'

function FeaturesSection() {
    return (
        <section id='about' className='px-4 md:px-6 lg:px-24'>

            <div className='container mx-auto py-4 flex flex-col items-center gap-12 justify-center'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold'>How can we help your business?</h2>
                    <p className='text-gray-600'>When you resell besnik, you build trust and increase</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:space-x-12'>
                    {
                        features2.map((feature2, index) => {
                            return <div key={index} className='flex flex-col items-center text-center'>
                                <motion.div 
                                variants={scale(0.3)}
                                        initial="hidden"
                                        whileInView="show"
                                className='w-18 h-18 rounded-full flex items-center justify-center' style={{ backgroundColor: index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4" }}>
                                    <div
                                        className='text-3x'>
                                        {feature2.icon}
                                    </div>
                                </motion.div>
                                <h2 className='text-2xl font-semibold'>{feature2.title}</h2>
                                <p className='text-center'>{feature2.description}</p>
                            </div>
                        })
                    }
                </div>
                <button className='bg-blue-600 px-4 py-3 rounded-3xl text-white font-semibold cursor-pointer hover:bg-blue-700 transition-colors shadow-2xl hover:shadow-blue-600'>Become a Partner</button>
            </div>
        </section>
    )
}

export default FeaturesSection
