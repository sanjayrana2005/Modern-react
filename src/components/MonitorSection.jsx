import React from 'react'
import monitorImage from "../assets/monitor-card.webp"
import { ArrowRight } from "lucide-react";

function MonitorSection() {
    return (
        <section className='w-full py-16 px-4 sm:px-6 lg:px-24'>
            <div className='container mx-auto mx-w-7xl  md:py-24 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-22'>
                {/* left section  */}
                <div className='w-full md:w-1/2'>
                    <p className='text-green-500 font-semibold'>MONITOR</p>
                    <h2 className='font-bold text-3xl md:text-4xl text-neutral-900 mt-2 mb-5 md:w-4/5'>Introducing best mobile carousels</h2>
                    <p className='text-gray-600 mb-6'>Before the ship is really back, Round, all round the world. <br/>Round, Round, all round the world. all round the world</p>

                    <a href="#" className='flex items-center font-semibold text-blue-500 gap-2 hover:gap-4 transition-all w-fit'>Explore scheduling features <ArrowRight size={20} />
                    </a>


                </div>

                {/* right section */}
                <div className='w-full md:w-1/2 '>
                    <img src={monitorImage} alt="schedule Image"
                        className='w-full h-auto'
                    />
                </div>


                {/* ////// */}


            </div>
        </section>
    )
}

export default MonitorSection
