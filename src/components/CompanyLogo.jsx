import React from 'react'
import slack from "../assets/slack.png"
import amazon from "../assets/amazon.png"
import wooCommerce from "../assets/woocommerce.png"
import meundies from "../assets/meundies.png"
import sitepoint from "../assets/sitepoint.png"

function CompanyLogo() {
  const logo = [slack,amazon,wooCommerce,meundies,sitepoint]
  return (

 <section className='px-4 sm:px-6 lg:px-24 bg-red-500'>
     <div className='w-full container mx-auto py-20 flex sm:flex-row flex-col gap-8 sm:items-center items-start overflow-hidden'>
        <div className='w-[300px] text-gray-600 border-l-4 border-blue-500 bg-white px-4 py-2 z-10 ssm:text-base text-xl font-semibold text-left'>Proud Partner at <br /> Hubspot & Segment</div>

        <div className='flex animate-marquee whitespace-nowrap'>
         
           {logo.map((logo,index)=>{
            return <img key={index} src={logo} alt="comapnay logo"
            className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
          })}
         
        </div>
      </div>
 </section>

  )
}

export default CompanyLogo
