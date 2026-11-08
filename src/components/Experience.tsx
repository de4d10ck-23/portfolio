import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_DATA, MILESTONES_TIMELINE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleMilestones = showAll
    ? MILESTONES_TIMELINE
    : MILESTONES_TIMELINE.slice(0, 3);

  return (
    <section className="px-6 md:px-8 py-24 bg-white" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="container mx-auto mb-20 text-center">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4">
            Journey &amp; Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            Experience &amp; College Journey
          </h2>
          <p className="text-[15px] text-gray-500">
            My progression from 1st-year IT competitor and content creator to SaaS founder &amp; 4th-year Capstone Lead Programmer
          </p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="w-10 h-0.5 bg-gray-200 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="w-10 h-0.5 bg-gray-200 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Main Experience Timeline */}
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          <div className="hidden md:block absolute left-[calc(40%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-100 to-transparent" />
          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.12 * idx }}
              >
                <div className="grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-2 text-center md:text-right md:pr-10 relative">
                    <span className="inline-block bg-blue-600 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full tracking-wide shadow-sm shadow-blue-200">
                      {exp.period}
                    </span>
                    <h3 className="mt-3 text-[15px] font-bold text-gray-900 leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-[12px] text-gray-500 mt-1">
                      {exp.company} · {exp.location}
                    </p>
                    <div className="hidden md:flex absolute -right-[5px] top-[9px] w-[10px] h-[10px] rounded-full bg-blue-600 ring-4 ring-white border border-blue-200 z-10" />
                  </div>

                  <div className="md:col-span-3 bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-blue-100 transition-all duration-300">
                    <p className="text-[13px] text-gray-600 leading-relaxed mb-5">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] bg-white border border-gray-200 text-gray-700 font-medium px-2.5 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-3">
                        Key Achievements
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((ach) => (
                          <li
                            key={ach}
                            className="flex items-start gap-2.5 text-[13px] text-gray-700"
                          >
                            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto max-w-4xl my-16">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 px-2">
            Year-by-Year Competitions &amp; Milestones (1st – 4th Year)
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>
      </div>

      {/* Secondary Timeline */}
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          <div className="hidden md:block absolute left-[calc(40%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-100 to-transparent" />
          <div className="space-y-10">
            <AnimatePresence initial={false}>
              {visibleMilestones.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, delay: idx < 3 ? 0.05 * idx : 0 }}
                >
                  <div className="grid md:grid-cols-5 gap-6 items-start">
                    <div className="md:col-span-2 text-center md:text-right md:pr-10 relative">
                      <span className="inline-block bg-gray-100 text-gray-700 text-[11px] font-bold px-3.5 py-1.5 rounded-full tracking-wide">
                        {item.period}
                      </span>
                      <h3 className="mt-3 text-[13px] font-semibold text-gray-800 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 mt-1">{item.location}</p>
                      <div className="hidden md:flex absolute -right-[5px] top-[9px] w-[10px] h-[10px] rounded-full bg-gray-300 ring-4 ring-white z-10" />
                    </div>
                    <div className="md:col-span-3 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-sm hover:border-gray-200 transition-all duration-300">
                      {item.badge && (
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full mb-2.5">
                          {item.badge}
                        </span>
                      )}
                      <p className="text-[13px] text-gray-600 leading-relaxed whitespace-pre-line">
                        {item.description}
                      </p>
                      {item.links && item.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3.5 pt-3 border-t border-gray-100">
                          {item.links.map((lnk) => (
                            <a
                              key={lnk.url}
                              href={lnk.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-700 bg-white border border-gray-200 hover:border-blue-200 px-3 py-1 rounded-full transition-colors"
                            >
                              <span>{lnk.label}</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {MILESTONES_TIMELINE.length > 3 && (
            <div className="flex justify-center mt-10">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="group flex items-center gap-2 text-[13px] font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 px-5 py-2.5 rounded-full transition-all duration-200"
              >
                <span>
                  {showAll
                    ? 'Show Less'
                    : `Show ${MILESTONES_TIMELINE.length - 3} More Milestones`}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    showAll ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

