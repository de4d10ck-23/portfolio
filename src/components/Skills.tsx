import React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Film,
  Cpu,
  Globe,
  Database,
  Trophy,
} from 'lucide-react';
import { SKILLS_LIST } from '../data/portfolioData';
import { renderTechLogo } from './TechLogos';

const SKILL_CARDS = [
  {
    icon: Layout,
    title: 'Full-Stack & SaaS Development',
    description:
      'I build production-ready web applications and profitable SaaS platforms like Pixefy (₱9,045+ revenue, 1,088+ users) using React.js, TypeScript, Next.js, Tailwind CSS, and modern UI architectures.',
  },
  {
    icon: Globe,
    title: 'Web-GIS & Quality Forecasting',
    description:
      'As Lead Programmer for our 4th-year Capstone Project WaterWatch (waterwatch.tortor.org), I develop interactive geospatial maps, real-time water monitoring dashboards, and predictive quality forecasting models.',
  },
  {
    icon: Cpu,
    title: 'IoT, ESP32 & Servo Robotics',
    description:
      'I engineer custom hardware-software systems controlled via smartphone — including an ESP32 Smart Aeroponics system with programmable timers and a phone-controlled Mini RC Robot that calculates distance traveled using Servo Motors.',
  },
  {
    icon: Trophy,
    title: 'Competitive Programming (C & Algorithms)',
    description:
      '1st Place Champion in the FCSIT Day Programming Skills Competition (3rd Year), 2nd Place & Trophy winner in the 2nd EVCO 2024 C Language Strand (2nd Year), and 2nd Place in OS Installation (1st Year).',
  },
  {
    icon: Film,
    title: '3D Animation, Video Editing & Apparel Design',
    description:
      'I create 3D animations in Blender and edit dynamic videos in CapCut—the creative force behind my 60K+ TikTok and 21K+ YouTube audience. I also design t-shirts and apparel using CorelDRAW, Photoshop, and Illustrator, which inspired Pixefy SaaS.',
  },
  {
    icon: Database,
    title: 'Databases, Auth & Billing Workflows',
    description:
      'I design relational databases (MySQL, PostgreSQL, Supabase), secure Google OAuth / token authentication, and GCash payment verification panels for production applications.',
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="px-6 md:px-8 py-24 bg-white" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="container mx-auto mb-16 text-center">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            Skills &amp; Stack
          </h2>
          <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-gray-500">
            From competitive C programming and ESP32 microcontrollers to live AI SaaS platforms and Web-GIS systems — here are the tools I use to turn ideas into reality.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto mb-20">
        <p className="text-center text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-8">
          Languages · Frameworks · IoT Hardware · Tools
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {SKILLS_LIST.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.03 * idx }}
            >
              <div className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-blue-100 hover:shadow-md transition-all duration-300 cursor-default">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
                  {renderTechLogo(skill.name, 'w-6 h-6')}
                </div>
                <p className="text-[11px] font-semibold text-gray-700 text-center leading-tight">
                  {skill.name}
                </p>
                <span className="text-[9px] uppercase tracking-wider text-gray-400 font-medium -mt-1">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CARDS.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
              >
                <div className="group flex flex-col items-center text-center h-full p-8 border-b border-r border-gray-100 hover:bg-blue-50/50 transition-colors duration-300">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-2.5 text-[14px] font-bold text-gray-900 tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-gray-500">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

