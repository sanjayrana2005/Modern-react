import React from 'react'
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { footerLinks } from '../assets/data'

function Footer() {
    return (
        <footer className='px-4 md:px-6 lg:px-24 bg-gray-100 py-8'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-7 lg:gap-11'>
                    {/* brand column */}
                    <div className='lg:col-span-4'>
                        <div className='flex gap-2  items-center'>
                            <div className='flex items-center gap-1'>
                                <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 cursor-pointer transition-opacity'></div>
                                <div className='w-4 h-4 bg-red-500 opacity-100 hover:opacity-75 cursor-pointer rounded-full -ml-2 transition-opacity'></div>
                            </div>
                            <span className='text-xl font-medium'>The Next Design</span>
                        </div>

                        <p className='text-gray-600 mb-3 md:w-3/4'>The copy warned the Little Blind Text, that where it come from it would have been rewritten a thousand times.</p>
                        <div className='flex gap-4'>
                            <a href="#" className='w-10 h-10 bg-gray-200 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all'><FiFacebook className='size-5' /></a>

                            <a href="#" className='w-10 h-10 bg-gray-200 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all'><FiTwitter className='size-5' /></a>

                            <a href="#" className='w-10 h-10 bg-gray-200 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all'><FiLinkedin className='size-5' /></a>
                        </div>
                    </div>

                    {/* footer nav item */}
                    <div className='lg:col-span-8'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                            {
                                Object.entries(footerLinks).map(([category, links], index) => {
                                    return <div key={index}>
                                        <h3 className='text-lg font-medium mb-3 uppercase'>{category}</h3>
                                        <ul className='space-y-3'>
                                            {
                                                links.map((link, index) => {
                                                    return <li key={index}>
                                                        <a href="#" className='text-gray-600 hover:text-gray-900'>{link.name}</a>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
