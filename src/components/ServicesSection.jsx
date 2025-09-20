import React from 'react'
import {BiTime} from 'react-icons/bi'
import {BsStack} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {HiLightBulb} from 'react-icons/hi'

function ServicesSection() {

    const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]
    return (
        <section id='sevices' className='px-4 md:px-6 lg:px-24'>
            <div className='container mx-auto my-16 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20'>
                {/* left side */}
                <div className='md:w-1/3 w-full'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4 md:w-4/5'>Future of support with new shape</h2>
                    <p className='text-gray-600 text-lg mb-3 '>Discuss your goals, determine success materices, identify problems</p>

                    <div className='space-y-2'>
                        <div className='flex items-center gap-2'>
                            <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                            </div>
                            <span className='text-gray-600'>UX design content strategy</span>
                        </div>

                        <div className='flex items-center gap-2'>
                            <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                            </div>
                            <span className='text-gray-600'>Development bring</span>
                        </div>
                    </div>
                    <button className='px-7 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white mt-5 transition-colors'>Get Startd</button>
                </div>


                {/* right side */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                        services.map((service,index)=>{
                            return <div key={index} className='bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300'>
                                <div className='mb-2 '>{service.icon}</div>
                                <h3 className='text-xl font-semibold'>{service.title}</h3>
                                <p className='text-gray-600 mb-1'>{service.description}</p>
                                <a href={service.link} className='text-indigo-500 font-medium hover:text-indigo-700 transition-colors'>LEARN MORE</a>
                            </div>
                        })
                }
                    
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
