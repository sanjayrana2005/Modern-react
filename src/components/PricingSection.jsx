import React, { useState } from 'react'

function PricingSection() {
    const [productCount, setProductCount] = useState(1)

    // calculate product price based on product count

    const starterPrice = Math.floor(4000 * (productCount / 50))
    const businessPrice = Math.floor(7500 * (productCount / 50))
    return (
        <section className='w-full py-16 px-4 sm:px-6 lg:px-24 bg-gray-100'>
            <div className='container mx-auto mx-w-6xl gap-8'>
                <h2 className='text-3xl md:text-4xl font-bold mb-10 text-center'>Pricing</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-10'>
                    {/* starter plan */}
                    <div className='bg-white p-8 rounded-lg shadow-lg'>
                        <h3 className='text-xl text-gray-600'>Starter</h3>
                        <p className='text-3xl font-bold'>${starterPrice}/mo</p>
                    </div>

                    {/* business paln */}

                    <div className='bg-white p-8 rounded-lg shadow-lg'>
                        <h3 className='text-xl text-gray-600'>Business</h3>
                        <p className='text-3xl font-bold'>${businessPrice}/mo</p>
                    </div>
                </div>

                <div className='max-w-xl mx-auto'>
                    <p className='text-center mb-4'> {productCount}{`${productCount === 1 ? " product" : " products"}`}</p>

                    <div className='relative px-4'>
                        <div className='flex items-center gap-3'>
                            <span className='text-xs sm:text-sm text-gray-600'>1</span>

                            <input type="range" min="1" max="50" value={productCount}
                                className='flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                                onChange={(event) => setProductCount(parseInt(event.target.value))}
                            />
                            <span className='text-xs sm:text-sm text-gray-600'>50</span>
                        </div>
                    </div>

                    <div className='mt-5 text-center'>
                        <h3 className='text-xl text-gray-600 mb-4'>Ready to get started?</h3>
                        <button className='bg-blue-600 text-white  hover:bg-blue-700 px-6 py-2 rounded-xl cursor-pointer transition-colors'>Get Started</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default PricingSection
