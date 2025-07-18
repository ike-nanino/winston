import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <section className="relative bg-cover bg-center h-[600px] md:h-[850px] lg:h-screen" style={{ backgroundImage: `url('/images/indexhero.jpg')` }}>
        <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 left-6 md:left-[80px] right-0  lg:right-[686px] top-60 bottom-[120px] flex items-center">
        <div className="text-white text-start">
          <h1 className='text-sm font-nespressoMed text-madder mb-4 uppercase'>Building a law firm for the future</h1>
          <h1 className="text-xl lg:text-4xl font-normal font-trajanPro mb-4">Experienced Attorneys With <br /> Over 20 Years of Practice.</h1>
          <p className="text-xs mb-8 font-nespresso leading-relaxed">We believe that the law firm of the future will not only provide high quality legal advice to address the  complex issues its clients face, but also demonstrate its commitment to responsible business practices   in its own operations. For us, being a responsible business means acting with purpose – to embed   sustainability across our operations as we work to build a sustainable future for our clients, our people,   our communities and our planet.arbitration, corporate, commercial, real estate, property and transfer, family law, debt collection, banking, and insurance.</p>
          <Link
          href='/about'
          >
          <button className="bg-madder text-white text-xs py-3 px-6 rounded-md hover:bg-opacity-90 font-trajanPro cursor-pointer">
            Learn More
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero