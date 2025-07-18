import React from 'react'
import GridLawyers from './GridLawyers'

function MeetLawyers() {
  return (
    <section>
        <div className="flex flex-col justify-center items-center py-10">
            <div className="px-4 text-center w-full md:max-w-[600px]">
            <h1 className="mb-8 font-bold text-base text-madder uppercase">Meet Our Lawyers</h1>
            <h1 className="mb-8 font-trajanPro text-xl md:text-3xl font-medium text-card-foreground">
                Experienced Attorneys With <span className='text-madder'>Over 20 Years of Practice.</span> 
            </h1>
            <p className='text-gray-500 text-sm md:text-base'>
                Our team of experienced attorneys is dedicated to providing high-quality legal services across various practice areas, including litigation, corporate law, family law, and more.
            </p>
            </div>
        </div>

<div className="px-4 lg:px-10">

        <GridLawyers  />
</div>



        <div className="flex justify-center items-center py-10">
            <button className="bg-madder text-white text-xs py-3 px-6 rounded-md hover:bg-opacity-90 font-trajanPro">
                View All Lawyers
            </button>
        </div>
    </section>
  )
}

export default MeetLawyers