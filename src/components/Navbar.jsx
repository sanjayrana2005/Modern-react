import React, { useState } from 'react'
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState("#home")

    // object navlink
    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About Us" },
        { href: "#sevices", label: "Our Services" },
        { href: "#testimonials", label: "Testimonials" },
    ]
    return (
        <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b z-50 border-gray-100 shadow-sm'>

            <div className='container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-24 md:h-20 h-16'>
                {/* logo */}
                <div className='flex items-center gap-1'>
                    <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 cursor-pointer transition-opacity'></div>
                    <div className='w-4 h-4 bg-red-500 opacity-100 hover:opacity-75 cursor-pointer rounded-full -ml-2 transition-opacity'></div>
                </div>

                {/* mobile menu */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden cursor-pointer'>
                    {
                        isMenuOpen ? <X /> : <Menu />
                    }
                </button>

                {/* desktop navitem */}
                <div className='hidden md:flex gap-10'>
                    {
                        navLinks.map((link, index) => {
                            return <a key={index}
                                onClick={() => setActiveLink(link.href)}
                                href={link.href}
                                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.href ? "text-blue-600 after:w-full" : "text-gray-600  hover:text-gray-900"}`}>{link.label}
                            </a>
                        })
                    }
                </div>

                {/* get in touch */}
                <button className='hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium hover:shadow-lg hover:shadow-bg-blue-100'>
                    <a href="#newsletter">Get in touch</a>
                </button>
            </div>


            {/* mobile menu item */}
            {
                isMenuOpen && (
                    <div className='md:hidden flex flex-col gap-1 bg-white border-t border-gray-200 px-4 pb-1'>
                        {
                            navLinks.map((link, index) => {
                                return <a
                                    onClick={() => {
                                        setActiveLink(link.href)
                                        setIsMenuOpen(false)
                                    }}
                                    className={`text-sm font-medium py-2 ${activeLink === link.href ? "text-blue-600" : " text-gray-600 hover:text-gray-900"}`} key={index} href={link.href}>{link.label}</a>
                            })
                        }

                        {/* get in touch */}
                        <button className=' bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium hover:shadow-lg hover:shadow-bg-blue-100'>
                            <a href="#newsletter">Get in touch</a>
                        </button>
                    </div>
                )
            }

        </nav>
    )
}

export default Navbar
