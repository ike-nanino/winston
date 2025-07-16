import Image from 'next/image'
import React from 'react'

function AboutUs() {
  return (
    <section className='bg-madder/40 flex flex-col justify-center items-center py-28'>

        <div className='px-4 text-center w-full md:max-w-[500px] relative'>
          <div className='absolute inset-0 left-8 bottom-24 -top-5 right-[230px] lg:-top-5 lg:right-[320px] lg:bottom-10 md:-left-8 '>
          <Image 
            src='/images/textwrapwinston.svg'
            alt='textwrap'
            width={120}
            height={120}
            className='object-cover animate-spin-slow'
            />

          </div>
          <div>
            <h1 className='mb-8 font-bold text-base text-madder'>About US</h1>
          </div>

          <h1 className='mb-8 font-trajanPro text-xl md:text-3xl font-medium text-card-foreground'>
            WELCOME TO <span className='text-madder'>Wiston & Co.</span> 
          </h1>

          <p className='text-white'>
          We Are Devoted to providing solutions and are driven by a genuine desire for excellence. We have experience in a number of important professional areas, including litigation, arbitration, corporate, commercial, real estate, property and conveyance, family law, debt recovery, banking, and insurance
          </p>
            
        </div>
      
    </section>
  )
}

export default AboutUs