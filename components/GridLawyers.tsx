'use client'

import { useState } from 'react';


export default function GridLawyers() {
  const cards = [
    {
      id: '01',
      title: 'Roof Replacement',
      description: 'All our roof replacements are done using high-end fiberglass laminated shingles and a full system install as per manufacturer specifications.',
      bgImage: '/images/man111.jpg',
    },
    {
      id: '02',
      title: 'Roof Repairs',
      description: 'Our experienced team can handle all types of roof repairs, from minor leaks to major structural issues, with quality materials and expert workmanship.',
      bgImage: '/images/woman2.jpg',
    },
    {
      id: '03',
      title: 'Anthony Shaw',
      description: 'Professional roof inspections to identify potential issues before they become costly problems, ensuring the longevity of your roof system.',
      bgImage: '/images/man4.jpg',
    },
    {
      id: '04',
      title: 'Randy Fay',
      description: 'Complete gutter systems installed to protect your home from water damage, with quality materials and professional installation techniques.',
      bgImage: '/images/randy.png',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

function Card({ card }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-96 overflow-hidden rounded-lg cursor-pointer group"
      style={{
        backgroundImage: `url(${card.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

<div className="absolute inset-0 bg-black/40"></div>
      {/* Overlay layer that slides down */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${
          isHovered ? "translate-y-full" : "translate-y-0"
        }`}
        style={{
          backgroundImage: `url(${card.bgImage})`,
        }}
      />

      {/* Content visible after hover (when overlay slides down) */}
      <div className="absolute inset-0 p-6 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h1 className="mb-6 text-lg font-bold text-white">{card.title}</h1>
        <p className="mb-10 text-white">{card.description}</p>

      </div>
    </div>
  );
}