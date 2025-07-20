"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";



  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" 
      }
    })
  }; // adjust this if needed

export default function ProBonoPage() {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Pro Bono Commitment</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Winston & Co., we believe access to justice is a right—not a privilege. Our pro bono work is a reflection of our values, commitment to community, and passion for lasting impact.
          </p>
        </motion.div>

        {/* Three Core Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "A Legacy of Advocacy",
              desc: "Since our founding in Ontario, Winston & Co. has worked to elevate marginalized voices and ensure equal access to the legal system.",
            },
            {
              title: "Purpose-Driven Lawyering",
              desc: "Our lawyers take pride in dedicating their time, expertise, and heart to serve individuals and causes that matter most.",
            },
            {
              title: "Institutional Commitment",
              desc: "We support pro bono work at a firm-wide level, integrating it into our culture, training, and values.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-blue-50 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature: Our Impact */}
        <div className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Changing Lives Through Law</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Each year, Winston & Co. contributes hundreds of pro bono hours to advance justice, support equity, and empower underserved communities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Equal Rights Cases",
                desc: "We’ve proudly supported precedent-setting equality cases involving 2SLGBTQ+, Indigenous, and newcomer rights in Ontario.",
                image: "/images/probono-rights.jpg",
              },
              {
                title: "Youth & Education",
                desc: "Partnering with youth shelters and nonprofits, our firm helps secure education access, housing, and legal protection for vulnerable minors.",
                image: "/images/probono-youth.jpg",
              },
              {
                title: "Grassroots Organizations",
                desc: "From neighborhood legal clinics to international NGOs, our team advises on governance, compliance, and charitable structures.",
                image: "/images/probono-grassroots.jpg",
              },
              {
                title: "Access to Courts",
                desc: "Through Ontario-based access initiatives, our lawyers support self-represented litigants and offer guidance in small claims and family courts.",
                image: "/images/probono-courts.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-5 bg-white">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* List of Partnered Organizations */}
        <div className="mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center"
          >
            Organizations We've Proudly Served
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-gray-700 text-lg">
            {[
              "A Way Home",
              "Delta Family Centre",
              "People for Education",
              "Planned Parenthood Ontario",
              "Second Chance Foundation",
              "CEE Centre for Young Black Professionals",
              "Scadding Court",
              "Women’s Habitat Etobicoke",
              "The Children’s Breakfast Club",
              "Toronto Inner-City Rugby",
              "Scientists in School",
              "National Self-Represented Litigants Project",
            ].map((org, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="py-2"
              >
                {org}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Accolades */}
        <div className="bg-blue-100 py-12 px-6 rounded-xl shadow-sm mb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Recognized for Excellence
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto">
            In 2025, Winston & Co. was named a <strong>5-Star Pro Bono Law Firm</strong> by Canadian Lawyer Magazine. This recognition is awarded to firms with consistent pro bono infrastructure and measurable commitment across the board.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Need Pro Bono Legal Support?</h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-6">
            If you're a charity, non-profit, or individual in Ontario in need of legal help but unable to afford it, we want to hear from you.
          </p>
          <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white rounded-full px-8 py-3">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
