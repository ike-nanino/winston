"use client";

import { useState } from "react";

const services = [
  { name: "Criminal Litigation", image: "/images/first.jpg" },
  { name: "Family Law", image: "/images/familylaw.jpg" },
  { name: "Real Estate", image: "/images/realestate.jpg" },
  { name: "Contract", image: "/images/contract.jpg" },
  { name: "Tax", image: "/images/tax.jpg" },
  { name: "Debt Recovery", image: "/images/debtrecovery.jpg" },
  { name: "Insurance", image: "/images/insurance.jpg" },
  { name: "Capital Markets", image: "/images/capitalmarkets.jpg" },
];

const ServicesGrid = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <div
      className="relative h-screen w-full"
      style={{
        backgroundImage: `url(${hoveredImage || "/images/first.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.7s ease-in-out",
      }}
    >
    

      {/* Grid Section */}
      <div 
      className="relative grid grid-cols-2 lg:grid-cols-4 gap-1 w-full h-full z-10"
      style={{
        backgroundColor: "rgba(51, 51, 51, 0.7)", // Color for the gaps
      }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredImage(service.image)}
            onMouseLeave={() => setHoveredImage(null)}
            className="group flex items-center justify-center text-white font-bold text-lg relative"
          >
            <div className="absolute inset-0 bg-black/40 transition duration-300 "></div>
            <span className="z-10 group-hover:scale-110 transition-transform duration-300">
              {service.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;