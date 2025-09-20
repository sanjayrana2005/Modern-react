import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { testimonials } from "../assets/data.js"
import { motion } from "motion/react"


import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { fadeIn } from '../../Utils/motion.js';
const TestimonialSection = () => {
    return (
        <section id="testimonials" className='px-4 md:px-6 lg:px-24 w-full' >
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-1'>What our haappy client say</h2>
                    <p className='text-gray-600'>Things that make it the best place to start trading</p>
                </div>

                {/* cards section*/}
                <motion.div
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    className='relative mt-5'>
                    {/* swiper cards  */}
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        navigation={
                            {
                                nextEl: ".swiper-button-next-custom",
                                prevEl: ".swiper-button-prev-custom"
                            }
                        }
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }

                        }}
                        className="testimonials-swiper md:mb-12">

                        {
                            testimonials.map((testimonial, index) => {
                                return <SwiperSlide key={index} className='h-full md:py-12 py-4 px-4'>
                                    <div className='text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col hover:scale-105 hover:shadow-xl transition-all'>
                                        <div className='w-24 h-24 mx-auto'>
                                            <img src={testimonial.image} alt="person image"
                                                className='w-full h-full object-cover rounded-full'
                                            />
                                        </div>
                                        <div className='flex justify-center mb-2'>{[...Array(5)].map((_, index) => (
                                            <span key={index} className='text-yellow-400'>★</span>
                                        ))}</div>
                                        <h3 className='text-xl font-semibold mb-3 '>{testimonial.name}</h3>
                                        <p className='text-gray-600'>{testimonial.text}</p>
                                    </div></SwiperSlide>
                            })
                        }
                    </Swiper>

                    {/* navigation btn */}
                    <div className='flex justify-center gap-4 mt-7'>
                        <button className='swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
                            <BsChevronLeft size={16} />
                        </button>
                        <button className='swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
                            <BsChevronRight size={16} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default TestimonialSection
