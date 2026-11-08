import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Code2, Sparkles, ArrowRight, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Bachelor of Science in Information Technology (Major in Programming)',
      sub: '4th Year Student · Southern Leyte State University (SLSU)',
    },
    {
      icon: Code2,
      title: 'Full-Stack SaaS Founder & Web-GIS Lead Programmer',
      sub: 'Pixefy AI SaaS (₱9,045+ Revenue · 1,088+ Users) & WaterWatch Capstone',
    },
    {
      icon: Trophy,
      title: 'Competitive Programmer & IoT / Robotics Maker',
      sub: '1st Place FCSIT Day · 2nd Place EVCO 2024 (C Strand) · CodeChum Semi-Finalist',
    },
    {
      icon: Sparkles,
      title: '3D Animator, Video Editor & Digital Creator (81K+ Community)',
      sub: 'Grew 60K+ TikTok & 21K+ YouTube via Blender 3D animation & CapCut; designs apparel using CorelDRAW, Photoshop & Illustrator',
    },
  ];

  return (
    <section className="px-6 md:px-8 py-24 bg-white" id="resume">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-5">
            Curriculum Vitae
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            My Resume
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-500 mb-6 max-w-md">
            I am a passionate Software Developer, 3D Animator, and 4th-year BS Information Technology (Programming) student at Southern Leyte State University. I specialize in full-stack SaaS platforms, Web-GIS mapping, Blender 3D animation, CapCut video editing, and t-shirt apparel design.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-gray-800 hover:text-blue-600 transition-colors group"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <span className="text-gray-300">·</span>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/{PERSONAL_INFO.githubUsername}</span>
            </a>
          </div>
        </motion.div>

        <div className="col-span-1 grid gap-y-3.5 lg:ml-auto w-full">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.08 * idx }}
              >
                <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 hover:shadow-sm hover:border-blue-100 hover:bg-white transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-gray-900 leading-snug">
                      {item.title}
                    </p>
                    <p className="text-[12px] text-gray-500 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
