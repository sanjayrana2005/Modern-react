import React from 'react'
import scheduleImage from "../assets/stats.webp"
function ScheduleSection() {
  return (
    <section className='w-full py-16 px-4 sm:px-6 lg:px-24 bg-gray-100'>
      <div className='container mx-auto mx-w-7xl py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-22'>
            {/* left section  */}
            <div className='md:w-1/2 '>
                <img src={scheduleImage} alt="schedule Image" 
                    className='w-full h-auto'
                />
            </div>
      </div>
    </section>
  )
}

export default ScheduleSection
