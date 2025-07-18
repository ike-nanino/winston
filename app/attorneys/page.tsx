"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

type Lawyer = {
  id: number
  name: string
  position: string
  email: string
  phone: string
  image: string
  specialties: string[]
  education: string[]
  bio: string
}

const allLawyers: Lawyer[] = [
  {
    id: 1,
    name: "Darren Gibbs",
    position: "Senior Employment Attorney",
    email: "darrengibs.morganass@outlook.com",
    phone: "(555) 123-4567",
    image: "/images/man5.jpg",
    specialties: ["Employment Law", "Workplace Disputes"],
    education: ["J.D., Harvard Law School", "B.A., Yale University"],
    bio: "Darren specializes in employment litigation, wrongful termination, and workplace rights.",
  },
  // {
  //   id: 2,
  //   name: "Rebecca Martinez",
  //   position: "Corporate and Business Lawyer",
  //   email: "rebecca@morganassociates.com",
  //   phone: "(555) 123-4568",
  //   image: "/images/man4.jpg",
  //   specialties: ["Business Law", "Contracts", "Mergers & Acquisitions"],
  //   education: ["J.D., Stanford Law School", "B.S., University of Michigan"],
  //   bio: "Rebecca provides strategic legal guidance to businesses in complex transactions.",
  // },
  {
    id: 4,
    name: "Anthony Shaw",
    position: "Employment Law Expert",
    email: "anthony@morganassociates.com",
    phone: "(555) 123-4570",
    image: "/images/man4.jpg",
    specialties: ["Employment Law", "HR Compliance"],
    education: ["J.D., University of Chicago Law School", "B.A., Northwestern University"],
    bio: "Anthony helps companies and employees navigate complex employment matters.",
  },
  {
    id: 3,
    name: "Jonathan D. Ross",
    position: "Litigation Specialist",
    email: "jonathan@morganassociates.com",
    phone: "(555) 123-4569",
    image: "/images/man3.jpg",
    specialties: ["Litigation", "Business Law"],
    education: ["J.D., Columbia Law School", "M.S., MIT", "B.S., UC Berkeley"],
    bio: "Jonathan has a strong track record representing clients in high-stakes litigation.",
  },
  {
    id: 5,
    name: "Anthony Cooper",
    position: "Corporate Partner",
    email: "jennifer@morganassociates.com",
    phone: "(555) 123-4571",
    image: "/images/man6.jpg",
    specialties: ["Business Law", "Corporate Governance"],
    education: ["J.D., Georgetown University", "B.A., Vanderbilt University"],
    bio: "Jennifer advises corporations on governance, compliance, and structure.",
  },
  {
    id: 6,
    name: "Samantha Grant",
    position: "Property and Conveyancing Lawyer",
    email: "samantha@winstonlaw.ca",
    phone: "(416) 555-9876",
    image: "/images/woman2.jpg",
    specialties: ["Real Estate", "Property and Conveyance", "Commercial Law"],
    education: ["J.D., University of Toronto Faculty of Law", "B.A., McGill University"],
    bio: "Samantha has extensive experience handling residential and commercial property transactions across Ontario.",
  },
  {
    id: 7,
    name: "Randy Fay",
    position: "Corporate and Real Estate Lawyer",
    email: "daniel.fraser@winstonlaw.ca",
    phone: "(905) 555-2233",
    image: "/images/randy.png",
    specialties: ["Corporate", "Real Estate", "Commercial Law"],
    education: ["J.D., Osgoode Hall Law School", "B.Com., University of Ottawa"],
    bio: "Daniel advises corporate clients on mergers, acquisitions, and high-value property deals.",
  },
  {
    id: 8,
    name: "Natalie Cho",
    position: "Family Law & Civil Litigator",
    email: "natalie.cho@winstonlaw.ca",
    phone: "(613) 555-6767",
    image: "/images/woman1.jpg",
    specialties: ["Family Law", "Litigation", "Debt Recovery"],
    education: ["J.D., Queen’s University", "B.A., Western University"],
    bio: "Natalie is dedicated to guiding families through disputes with compassion and legal precision.",
  },
  {
    id: 9,
    name: "Omar Patel",
    position: "Banking & Insurance Counsel",
    email: "omar.patel@winstonlaw.ca",
    phone: "(289) 555-1122",
    image: "/images/man111.jpg",
    specialties: ["Banking", "Insurance", "Debt Recovery"],
    education: ["J.D., University of British Columbia", "B.A., University of Calgary"],
    bio: "Omar represents financial institutions and insurers in regulatory and dispute matters across Ontario.",
  },
  {
    id: 10,
    name: "Isabelle Morin",
    position: "Senior Arbitrator & Mediator",
    email: "isabelle.morin@winstonlaw.ca",
    phone: "(437) 555-4420",
    image: "/images/woman3.jpg",
    specialties: ["Arbitration", "Litigation", "Commercial Law"],
    education: ["LL.M., University of Ottawa", "LL.B., Université de Montréal"],
    bio: "Isabelle has resolved hundreds of business and civil disputes through strategic arbitration and negotiation.",
  },
  // {
  //   id: 11,
  //   name: "David Chin",
  //   position: "Litigation & Corporate Advisor",
  //   email: "david.chin@winstonlaw.ca",
  //   phone: "(519) 555-3020",
  //   image: "/images/man9.jpg",
  //   specialties: ["Litigation", "Corporate", "Arbitration"],
  //   education: ["J.D., University of Alberta", "B.Sc., Simon Fraser University"],
  //   bio: "David offers strategic corporate litigation support for businesses navigating disputes and restructuring.",
  // },
  {
    id: 12,
    name: "Michael Zhou",
    position: "Insurance & Commercial Law Attorney",
    email: "michael.zhou@winstonlaw.ca",
    phone: "(343) 555-7721",
    image: "/images/man10.jpg",
    specialties: ["Insurance", "Commercial Law", "Banking"],
    education: ["J.D., Dalhousie University", "B.A., University of Manitoba"],
    bio: "Michael serves corporate clients in commercial litigation and insurance defense cases province-wide.",
  },
];

const uniqueSpecialties = Array.from(
  new Set(allLawyers.flatMap((lawyer) => lawyer.specialties))
)

export default function LawyersPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All")
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null)

  const filteredLawyers =
    selectedSpecialty === "All"
      ? allLawyers
      : allLawyers.filter((lawyer) =>
          lawyer.specialties.includes(selectedSpecialty)
        )

  return (
    <main>

           {/* Hero Section */}
        <section
        className="relative bg-cover bg-center h-[500px] md:h-[750px] lg:h-screen"
        style={{ backgroundImage: `url('/images/court.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 left-6 md:left-[80px] right-0  lg:right-[686px] top-40 bottom-[120px] flex items-center">
          <div className="text-white text-start">
            <h1 className="text-sm font-nespressoMed text-madder mb-4">
              Who we are
            </h1>
            <h1 className="text-xl lg:text-4xl font-normal font-trajanPro mb-4">
              Winston & Co. is one of <br />
              the leading law firms in Canada.
            </h1>
            <p className="text-xs mb-8 font-nespresso">
              One of Canada&apos;s prominent legal firms is Winston & Co. Since 2000,
              the only purpose of our existence has been to provide high-quality
              legal services to clients all over the world. Winston & Co. is
              committed to providing business clients, including both people and
              governmental organizations, with thoughtful legal solutions that
              cut across disciplines, industries, and sectors.
            </p>
          </div>
        </div>
      </section>
    
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center flex-wrap mb-6 gap-4">
        <h1 className="text-3xl font-bold">Our Attorneys</h1>
        <select
          className="border border-gray-300 rounded-md px-4 py-2"
          value={selectedSpecialty}
          onChange={(e) => {
            setSelectedSpecialty(e.target.value)
            setSelectedLawyer(null)
          }}
        >
          <option value="All">All Specialties</option>
          {uniqueSpecialties.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredLawyers.map((lawyer) => (
          <div
            key={lawyer.id}
            onClick={() => setSelectedLawyer(lawyer)}
            className={`cursor-pointer rounded-xl overflow-hidden border ${
              selectedLawyer?.id === lawyer.id
                ? "ring-2 ring-madder"
                : "hover:shadow-md"
            }`}
          >
            <div className="relative h-96 w-full">
              <Image
                src={lawyer.image}
                alt={lawyer.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{lawyer.name}</h2>
              <p className="text-sm text-gray-600">{lawyer.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lawyer Details */}
      {selectedLawyer && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 bg-gray-50 p-6 rounded-lg border"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative h-96 w-full md:w-1/3">
              <Image
                src={selectedLawyer.image}
                alt={selectedLawyer.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold">{selectedLawyer.name}</h3>
              <p className="text-madder text-lg">
                {selectedLawyer.position}
              </p>
              <p className="text-gray-700 mt-2">{selectedLawyer.bio}</p>

              <div className="mt-4">
                <h4 className="font-semibold">Specialties</h4>
                <div className="flex gap-2 flex-wrap mt-1">
                  {selectedLawyer.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="bg-white border px-3 py-1 text-sm rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">Education</h4>
                <ul className="list-disc pl-5 text-sm text-gray-800">
                  {selectedLawyer.education.map((edu) => (
                    <li key={edu}>{edu}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <p>
                  📧{" "}
                  <a
                    href={`mailto:${selectedLawyer.email}`}
                    className="text-blue-600 underline"
                  >
                    {selectedLawyer.email}
                  </a>
                </p>
                <p>📞 {selectedLawyer.phone}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
    </main> 
  )
}
