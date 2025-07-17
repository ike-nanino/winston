"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <main className="bg-white text-gray-900">
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
              the leading law firms in USA.
            </h1>
            <p className="text-xs mb-8 font-nespresso">
              One of USA&apos;s prominent legal firms is Winston & Co. Since 2000,
              the only purpose of our existence has been to provide high-quality
              legal services to clients all over the world. Winston & Co. is
              committed to providing business clients, including both people and
              governmental organizations, with thoughtful legal solutions that
              cut across disciplines, industries, and sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              At Winston & Co., we navigate complexity and deliver solutions that empower clients worldwide. Our lawyers guide clients through their most important challenges, with insight, precision and care.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li><strong>Pioneering:</strong> We embrace innovation and adapt boldly.</li>
              <li><strong>United:</strong> We act as one integrated, collaborative firm.</li>
              <li><strong>Human:</strong> We prioritize people and community impact.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Client Service Principles */}
      <section className="py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Client Service Principles</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <ul className="space-y-4 text-lg">
              <li>🌍 <strong>One Global Team:</strong> Seamless service across borders and disciplines.</li>
              <li>🔍 <strong>Clarity & Judgment:</strong> Commercially grounded legal advice.</li>
              <li>🧭 <strong>Strategic Navigation:</strong> Agile, inventive solutions in complex environments.</li>
            </ul>
            <ul className="space-y-4 text-lg">
              <li>👞 <strong>Client Empathy:</strong> We step into our clients’ shoes.</li>
              <li>🤝 <strong>Relationship Driven:</strong> Built on trust, integrity and long-term success.</li>
              <li>💡 <strong>Forward Thinking:</strong> Anticipating tomorrow’s challenges today.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-[#f9fafb] px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Innovation in Action</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            We integrate legal technology, knowledge management and AI-driven strategies to streamline legal processes and provide real business value.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">AI Legal Research</h3>
              <p>Faster, smarter document reviews and due diligence using machine learning.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Custom Client Portals</h3>
              <p>Collaborative dashboards for real-time updates and transparency.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Tech Consulting</h3>
              <p>Legal tech strategy sessions tailored to client needs and industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement & Development */}
      <section className="py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Engagement & Development</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We foster a respectful, supportive workplace where people thrive and grow. From professional development and mentoring to global affinity networks, we ensure everyone feels seen and supported.
          </p>
        </div>
      </section>

      {/* Affinity Networks */}
      <section className="py-20 bg-gray-50 px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Global Affinity Networks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
            {[
              "Asian Network",
              "Jewish Network",
              "Black Network",
              "LGBTQ+ Spectrum",
              "Neurodiversity - Beyond Barriers",
              "Middle Eastern & North African",
              "Hispanic & Latinx - Alianza",
              "Women’s Network"
            ].map((network, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-5 rounded-lg shadow-md"
              >
                {network}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-madder text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Work With Us</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Ready to navigate complex legal challenges with a trusted global team?
        </p>
        <button className="px-6 py-3 bg-white text-[#0f172a] font-semibold rounded-full hover:bg-gray-200 transition">
          Get in Touch
        </button>
      </section>
    </main>
  );
}
