import React from 'react'
import { features } from '../assets/data'

function PurposeSection() {

    return (
        <section className='w-full bg-gray-00 py-16 px-4 sm:px-6 lg:px-24 bg-gray-100'>
            <div className='max-w-6xl container mx-auto'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                    <div className=''>
                        <p className='text-sm text-purple-600 font-medium '>ACHIVE MORE</p>
                        <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900'>
                            Purpose of a convoy is to keep your team
                        </h2>
                    </div>

                    <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-6'>
                    {
                        features.map((feature, index) => {
                            return <div key={index} className='flex space-x-1 '>
                                <div className=' rounded-lg flex text-center'>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h1 className='text-xl font-semibold text-gray-900 '>{feature.title}</h1>
                                    <p className='text-gray-600'>{feature.description}</p>
                                </div>
                            </div>
                        })
                    }
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default PurposeSection
