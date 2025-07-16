"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { number: 98, suffix: "%", label: "Client Satisfaction Index" },
  { number: 60, suffix: "", label: "Top Fortune 500 Companies We’ve Advised" },
  { number: 1393, suffix: "", label: "Chambers Lawyer Rankings" },
  { number: 75, suffix: "%", label: "Revenue from Multijurisdictional Clients" },
  { number: 92, suffix: "%", label: "Average Case Success Rate Across Practice Areas" },
  { number: 1200, suffix: "+", label: "Successful Cases" }, // extra stat
];

export default function StatsSection() {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && !startCount) {
        setStartCount(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startCount]);

  return (
    <section id="stats" className="w-full bg-card-foreground text-white py-20 my-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-4xl font-bold tracking-tight text-madder">
              {startCount && (
                <CountUp end={stat.number} duration={2} suffix={stat.suffix} />
              )}
            </span>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.3 + 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 mt-2 max-w-xs"
            >
              {stat.label}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
