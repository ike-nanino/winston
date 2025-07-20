"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Head from "next/head";





const practiceAreas = [
  {
    title: "Litigation",
    description:
      "We provide aggressive and strategic representation in civil and commercial litigation matters, guiding clients through complex disputes in courts at all levels.",
    image: "/images/first.jpg",
  },
  {
    title: "Arbitration",
    description:
      "Our arbitration team resolves conflicts efficiently outside of court, offering neutral, binding solutions in commercial, labor, and cross-border disputes.",
    image: "/images/arbitary.jpg",
  },
  {
    title: "Corporate",
    description:
      "From business formation to governance and compliance, we provide end-to-end legal support tailored to meet the evolving needs of corporations and startups alike.",
    image: "/images/corporate.jpg",
  },
  {
    title: "Commercial",
    description:
      "We assist with all facets of commercial transactions, including contract negotiation, regulatory compliance, and risk mitigation for businesses of all sizes.",
    image: "/images/commerciallaw.jpg",
  },
  {
    title: "Real Estate",
    description:
      "Whether buying, selling, leasing, or developing, we provide trusted legal advice in real estate transactions, due diligence, zoning, and property rights.",
    image: "/images/realestate.jpg",
  },
  {
    title: "Property and Conveyance",
    description:
      "Our conveyancing lawyers handle title transfers, registration, land documentation, and ensure all property transactions are secure, valid, and enforceable.",
    image: "/images/property.jpg",
  },
  {
    title: "Family Law",
    description:
      "We offer compassionate yet firm legal support for divorce, custody, adoption, maintenance, and related family matters — with a focus on protecting your rights and peace of mind.",
    image: "/images/familylaw.jpg",
  },
  {
    title: "Debt Recovery",
    description:
      "Our firm helps clients recover outstanding debts through letters of demand, litigation, and asset tracing, ensuring compliance with debt collection laws.",
    image: "/images/debtrecovery.jpg",
  },
  {
    title: "Banking",
    description:
      "We advise financial institutions and borrowers on lending, regulatory matters, compliance, and structuring of complex financial transactions.",
    image: "/images/banking.jpg",
  },
  {
    title: "Insurance",
    description:
      "Our insurance practice covers policy drafting, claims management, subrogation, and regulatory compliance for insurers, brokers, and policyholders.",
    image: "/images/insurance.jpg",
  },
]




function PracticeAreas() {
  return (

    <>
       <Head>
                  <title>Practice Areas</title>
                  <meta name="description" content="Explore the diverse legal services offered by Winston & Co., including litigation, corporate law, family law, and more." />
                </Head>
    
    
    <main>
        <section
        className="relative bg-cover bg-center h-[500px] md:h-[750px] lg:h-screen"
        style={{ backgroundImage: `url('/images/practiceareas.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-dark right-[680px] hidden lg:flex"></div>
        <div className="absolute inset-0 left-6 md:left-[80px] right-0  lg:right-[686px] top-40 bottom-[120px] flex items-center">
          <div className="text-white text-start">
            <h1 className="text-sm font-nespressoMed text-madder mb-4">
              SERVICES
            </h1>
            <h1 className="text-xl lg:text-4xl font-normal font-trajanPro mb-4">
            Practice Areas
            </h1>
            <p className="text-xs mb-8 font-nespresso">
            We are devoted to providing solutions and are driven by a genuine desire for excellence. We have experience in a number of important professional areas, including litigation, arbitration, corporate, commercial, real estate, property and conveyance, family law, debt recovery, banking, and insurance.
            </p>
          </div>
        </div>
      </section>




     <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <section className="text-center py-16 px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Practice Areas
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Wagner, Falconer & Judd, LTD. offers a comprehensive array of legal
          and business consulting services. We simplify your most pressing legal
          challenges with deep industry expertise.
        </motion.p>
      </section>

      {/* List */}
      <section className="space-y-16 px-4 md:px-8 pb-24 max-w-6xl mx-auto">
        {practiceAreas.map((area, index) => (
          <motion.div
            key={area.title}
            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Image */}
            <div className="w-full md:w-[40%] h-64 relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-[60%]">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[rgb(15,15,15)] text-white py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Traditional Service. Untraditional Delivery.
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            While we offer all the capabilities you'd expect of an established
            law firm, Winston & Co also provides innovative, personalized services that
            evolve with your business and personal needs.
          </p>
          <a
            href="#"
            className="inline-block bg-madder text-white px-6 py-3 rounded-md font-semibold hover:bg-madder/80 transition"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </section>
    </div>
    </main>

    </>
  )
}

export default PracticeAreas