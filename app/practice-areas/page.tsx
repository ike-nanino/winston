"use client"

import { motion } from "framer-motion"
import Image from "next/image"


const practiceAreas = [
  {
    title: "Employment",
    description:
      "Small-business representation and HR consultation with a national reach. Includes 24/7 access to online attorneys, litigation defense for employee claims, and an online library of forms, checklists and FAQs.",
    image: "/images/employment.jpg",
  },
  {
    title: "Commercial Collections",
    description:
      "Our in-house debt collection team assists clients with a broad range of matters, including creditor remedies, global representation, litigation, bankruptcy, credit remedy enforcement and counter claim defense.",
    image: "/images/commercial.jpg",
  },
  {
    title: "Construction",
    description:
      "With decades of construction law experience behind us, we assist companies with litigation, contract review and negotiation, lien and bond issues, project risk analysis, troubled-project resolution and more.",
    image: "/images/construction.jpg",
  },
  {
    title: "Litigation",
    description:
      "Our dedicated and experienced litigators represent small, mid-size and large corporations nationally in state, federal and bankruptcy court; they also handle mediation and arbitration proceedings.",
    image: "/images/litigation.jpg",
  },
  {
    title: "Business",
    description:
      "Whether you're just starting as an LLC or an established corporation, we assist with disputes, employment claims, business sales, franchises, and more — supporting you from formation to windup.",
    image: "/images/business.jpg",
  },
  {
    title: "Personal",
    description:
      "We offer 24/7 legal advice and litigation for individuals and families in MN, ND, SD and WI; including family law, workplace injuries, wrongful death, insurance claims and criminal matters.",
    image: "/images/personal.jpg",
  },
]



function PracticeAreas() {
  return (
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
            law firm, WFJ also provides innovative, personalized services that
            evolve with your business and personal needs.
          </p>
          <a
            href="#"
            className="inline-block bg-[rgb(163,122,45)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[rgb(143,102,25)] transition"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </section>
    </div>
    </main>
  )
}

export default PracticeAreas