

import { Briefcase, Eye, Compass, Handshake, Users, Search } from "lucide-react";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about Winston & Co., a leading Canadian law firm offering exceptional legal services in employment law, litigation, and corporate legal advice.',
};



export default function AboutUs() {
  return (
    
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] md:h-[750px] lg:h-screen"
        style={{ backgroundImage: `url('/images/court.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 left-6 md:left-[80px] right-0 lg:right-[686px] top-40 bottom-[120px] flex items-center">
          <div className="text-white text-start">
            <h1 className="text-sm font-nespressoMed text-madder mb-4">Who we are</h1>
            <h1 className="text-xl lg:text-4xl font-normal font-trajanPro mb-4">
              Winston & Co. is one of

              <br /> the leading law firms in Canada.
            </h1>
            <p className="text-xs mb-8 font-nespresso">
              One of Canada's prominent legal firms is Winston & Co. Since 2000, the only purpose of our existence has been to provide high-quality legal services to clients all over the world. Winston & Co. is committed to providing business clients, including both people and governmental organizations, with thoughtful legal solutions that cut across disciplines, industries, and sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Representation */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Comprehensive Representation</h2>
            <p className="text-lg">
              Our employment law team at Winston & Co. brings diverse talent and experience
              to fully represent your legal needs. From complex litigation to strategic counseling,
              we are committed to standing beside our clients every step of the way.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Clear Legal Guidance</h2>
            <p className="text-lg">
              We help clients navigate their rights, assess legal options, and execute informed strategies.
              Whether facing a workplace issue, contract dispute, or policy compliance matter, we are here
              to guide you through with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Client Service Principles */}
      <section className="py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Client Service Principles</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <ul className="space-y-6 text-lg">
              <li className="flex gap-3 items-start">
                <Briefcase className="w-6 h-6 text-madder" />
                <span>
                  <strong>Deliver One Firm:</strong> Integrated teams providing high-quality legal work across all regions.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Eye className="w-6 h-6 text-madder" />
                <span>
                  <strong>Keep an Eye on the Big Picture:</strong> Global insight with local expertise to resolve complex challenges.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Search className="w-6 h-6 text-madder" />
                <span>
                  <strong>Provide Clarity & Judgment:</strong> Practical advice rooted in your unique business context.
                </span>
              </li>
            </ul>
            <ul className="space-y-6 text-lg">
              <li className="flex gap-3 items-start">
                <Compass className="w-6 h-6 text-madder" />
                <span>
                  <strong>Find a Way Through:</strong> Inventive and agile strategies for today’s legal landscape.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Users className="w-6 h-6 text-madder" />
                <span>
                  <strong>Step into Our Clients' Shoes:</strong> Client-first mentality with empathy and care.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Handshake className="w-6 h-6 text-madder" />
                <span>
                  <strong>Build Lasting Relationships:</strong> Anticipating client needs and fostering trusted partnerships.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Timeline */}
      <section className="py-20 bg-gray-100 px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">A Legacy of Excellence</h2>
          <div className="border-l-4 border-madder pl-6 space-y-10">
            <div>
              <h3 className="text-xl font-semibold">2000</h3>
              <p>Founded with a mission to champion employment law and client advocacy.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2008</h3>
              <p>Expanded practice nationally to cover broader corporate and labor law issues.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2015</h3>
              <p>Recognized as a top-tier law firm in workplace litigation and advisory services.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2024</h3>
              <p>Launched cross-functional teams to support a diverse client base across industries.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div
      
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-madder">Our History</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        From a small startup in Ontario to a leading innovator in the industry—here’s our journey through the years.
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 ml-0 md:-ml-1 top-0 h-full w-0.5 bg-madder/60"></div>

        {[
          {
            year: '2000',
            title: 'Founded in Ontario',
            description: 'Our story began in a small office space in Ontario, Canada, with just three passionate entrepreneurs.',
            image: '/images/insurance.jpg',
          },
          {
            year: '2005',
            title: 'First Major Client',
            description: 'We secured our first major client, leading to a period of rapid growth and team expansion.',
            image: '/images/insurance.jpg',
          },
          {
            year: '2012',
            title: 'New Headquarters',
            description: 'Moved into a state-of-the-art headquarters in downtown Toronto, boosting collaboration and culture.',
            image: '/images/history-2012.jpg',
          },
          {
            year: '2024',
            title: 'Innovation & Sustainability',
            description: 'Launched cross-functional teams to support a diverse client base across industries.',
            image: '/images/history-2024.jpg',
          },
        ].map((item, i) => (
          <div
            key={item.year}
            className={`relative mb-16 flex flex-col ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Year marker */}
            <div className="absolute left-4 md:left-1/2 ml-0 md:-ml-4 top-0 h-8 w-8 rounded-full bg-madder border-4 border-white shadow-md flex items-center justify-center text-white font-bold text-xs z-10">
              {item.year.slice(2)}
            </div>

            {/* Content */}
            <div
              className={`ml-12 md:ml-0 md:w-1/2 ${
                i % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'
              }`}
            >
              <div
                className="bg-white p-5 rounded-lg shadow-md relative overflow-hidden"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="backdrop-blur-sm bg-white/80 p-4 rounded">
                  <h3 className="text-xl font-bold text-madder mb-1">{item.title}</h3>
                  <span className="block text-black font-medium mb-2">{item.year}</span>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Winston & Co.</h2>
          <p className="text-lg max-w-4xl mx-auto mb-10">
            Our combination of seasoned attorneys, tailored legal strategies, and an unwavering
            commitment to our clients' best interests sets us apart. We're proud to lead with clarity,
            conviction, and compassion.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-madder text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Work With Us</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Need expert legal guidance in employment law or beyond? Connect with a team that’s invested in your success.
        </p>
        <button className="px-6 py-3 bg-white text-[#0f172a] font-semibold rounded-full hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </main>
  );
}
