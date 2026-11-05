'use client';

import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'ALI MEHDI LANGAH',
    role: 'Software Engineer',
    description:
      'I am a Software Engineering student at MUET Jamshoro, with a strong interest in software development. I work with Java and C++, while exploring frontend development through React and Angular. I am continuously improving my knowledge of Data Structures and Algorithms, Object-Oriented Programming, and databases. I enjoy turning ideas into practical projects and learning new technologies along the way.',
    image: '/images/ali.jpeg',
    linkedin: 'https://www.linkedin.com/in/ali-mehdi-langah/',
  },
    {
    name: 'VISHAL DEWANI',
    role: 'Software Engineer',
    description:
      'Backend-focused software engineer with 3+ years of experience building and shipping full-stack web applications. I specialize in TypeScript, Next.js, Node.js, and PostgreSQL — with a growing focus on backend systems architecture, AI integration. Currently pursuing a B.E. in Software Engineering at Mehran University of Engineering and Technology, Hyderabad, while building real products used by real people.',
    image: '/images/vishal.jpeg',
    linkedin: 'https://www.linkedin.com/in/vishal-dewani/',
  },
  {
    name: 'HAMEED MAHAR',
    role: 'Software Engineer',
    description:
      'I am a first-year Software Engineering student from Pakistan who loves turning ideas into working software. I am building my foundation in computer science while shipping real projects along the way, because I learn best by making things. Focus: software development, with a soft spot for game dev and AI/ML Right now: sharpening problem-solving and data structures Working style: collaborative, curious, and always learning Looking ahead: internships, open source, and freelance opportunities',
    image:'/images/hameed.jpeg',
    linkedin: 'https://www.linkedin.com/in/hameedmahar/',
  },
];

export default function AboutUs() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#faf6f3] via-[#f7f0eb] to-[#e8ded6]">
      {/* Subtle brand ambient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#CE410C]/5 to-transparent pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-widest text-[#611F11]">
            Team Members
          </h2>

          {/* Decorative Divider Line matching reference image */}
          <div className="relative flex items-center justify-center my-4">
            <div className="w-32 sm:w-40 h-[2px] bg-[#611F11]/20" />
            <div className="absolute w-10 h-[4px] bg-[#CE410C] rounded-full" />
          </div>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
           We are a team of Software Engineering students at Mehran University of Engineering and Technology, Jamshoro, currently enrolled in our second year. Passionate about technology and innovation, we aim to revolutionize restaurant management through smart, seamless, and reliable solutions.
          </p>
        </div>

        {/* Team Members Grid - 3 Horizontal Cards matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-10 lg:gap-8 xl:gap-10 items-stretch pt-6 sm:pt-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center transition-all duration-300 hover:-translate-y-2.5"
            >
              {/* Circular Profile Picture with overlapping collar */}
              <div className="relative z-20 -mb-16">
                {/* Backing collar that harmonizes into the card */}
                <div className="relative p-2 rounded-full bg-[#611F11] shadow-[0_12px_28px_rgba(97,31,17,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_16px_36px_rgba(206,65,12,0.4)]">
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#FFFFFF] bg-zinc-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 144px, 160px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      priority={index === 0}
                    />
                  </div>

                  {/* LinkedIn badge indicator on circle */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${member.name}'s LinkedIn profile`}
                    className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-[#FFFFFF] text-[#611F11] group-hover:bg-[#CE410C] group-hover:text-[#FFFFFF] flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.55a1.62 1.62 0 0 0-1.62 1.62 1.62 1.62 0 0 0 1.62 1.63 1.62 1.62 0 0 0 1.63-1.63c0-.9-.73-1.62-1.63-1.62Z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Stylish Asymmetric Rounded Card matching the reference shape */}
              {/* Top-left: large curve [72px], Top-right: flat/sharp, Bottom-left: sharp [0px], Bottom-right: large curve [72px] */}
              <div className="relative z-10 w-full flex-1 flex flex-col justify-between pt-24 pb-8 px-6 sm:px-8 text-center bg-[#611F11] rounded-tl-[72px] rounded-br-[72px] rounded-tr-none rounded-bl-none shadow-[0_16px_36px_rgba(97,31,17,0.28)] transition-all duration-300 group-hover:shadow-[0_24px_50px_rgba(97,31,17,0.38)]">
                {/* Subtle top-left rim highlight */}
                <div className="absolute top-0 left-0 w-24 h-24 rounded-tl-[72px] pointer-events-none border-t border-l border-white/10" />

                {/* Content */}
                <div>
                  {/* Name */}
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-[#FFFFFF] mt-2 mb-1">
                    {member.name}
                  </h3>

                  {/* Role / Tagline */}
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#CE410C] mb-4">
                    {member.role}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-[#FFFFFF]/85 font-normal line-clamp-4">
                    {member.description}
                  </p>
                </div>

                {/* Card Button: LinkedIn Profile Button matching "READ MORE" button placement */}
                <div className="mt-8 pt-2 flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#FFFFFF] text-[#611F11] text-xs font-bold uppercase tracking-widest rounded shadow-md transition-all duration-300 hover:bg-[#CE410C] hover:text-[#FFFFFF] active:scale-95 group/btn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current transition-transform duration-200 group-hover/btn:scale-110" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.55a1.62 1.62 0 0 0-1.62 1.62 1.62 1.62 0 0 0 1.62 1.63 1.62 1.62 0 0 0 1.63-1.63c0-.9-.73-1.62-1.63-1.62Z" />
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { AboutUs, AboutUs as OurTeam };
