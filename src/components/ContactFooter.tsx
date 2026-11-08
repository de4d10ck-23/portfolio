import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp, Globe, Sparkles, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactFooter: React.FC = () => {
  return (
    <>
      <section
        className="px-6 md:px-8 py-24 bg-[#f8f8f6] relative overflow-hidden"
        id="contact"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-blue-50 opacity-60 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full bg-indigo-50 opacity-50 blur-3xl" />
        </div>

        <div className="relative container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-center mb-14">
              <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4">
                Contact
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
                Get In Touch
              </h2>
              <p className="text-[15px] text-gray-500 max-w-md mx-auto leading-relaxed">
                Have a project, commission, internship, or collaboration in mind? Let&apos;s discuss how I can help bring your ideas to life.
              </p>
              <div className="flex items-center justify-center gap-2 mt-5">
                <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
              </div>
            </div>
          </motion.div>

          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-7 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-[14px] font-medium text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${PERSONAL_INFO.phoneHref}`}
                        className="text-[14px] font-medium text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {PERSONAL_INFO.phone} (+63 953 987 0591)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Github className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-0.5">
                        GitHub Profile
                      </p>
                      <a
                        href={PERSONAL_INFO.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] font-medium text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        github.com/{PERSONAL_INFO.githubUsername} (675 contributions · 36 repos)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-0.5">
                        Location
                      </p>
                      <p className="text-[14px] font-medium text-gray-900">
                        {PERSONAL_INFO.fullAddress}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gray-100 mx-7" />

                <div className="px-7 py-6">
                  <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-4">
                    Live Platforms &amp; Social Highlights
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={PERSONAL_INFO.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-[12px] font-semibold transition-all duration-200 shadow-sm"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub (@{PERSONAL_INFO.githubUsername})</span>
                    </a>
                    <a
                      href="https://pixefy.tortor.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-900 text-gray-700 hover:text-white text-[12px] font-semibold transition-all duration-200"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Pixefy SaaS</span>
                    </a>
                    <a
                      href="https://waterwatch.tortor.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-900 text-gray-700 hover:text-white text-[12px] font-semibold transition-all duration-200"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>WaterWatch Web-GIS</span>
                    </a>
                    <a
                      href="https://www.facebook.com/southernleytestateu/posts/pfbid0M9D1Xsx3L3VrRntczMzF2qhdTwQ9xSKE1cLux5Ahv3XzE8DgU84g3C2SpdaM7zdxl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white text-[12px] font-semibold transition-all duration-200"
                    >
                      <span>EVCO 2024 Post</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white px-8 pt-14 pb-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10">
            <div className="max-w-xs">
              <p className="text-[18px] font-extrabold tracking-tight mb-2">
                {PERSONAL_INFO.brandPrefix}
                <span className="text-blue-400">.</span>
                {PERSONAL_INFO.brandSuffix}
                <span className="ml-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-500 align-middle">
                  {PERSONAL_INFO.brandRole}
                </span>
              </p>
              <p className="text-[13px] text-gray-400 leading-relaxed">
                4th-Year BS InfoTech (Programming) Student at SLSU · Building full-stack SaaS, Web-GIS platforms, and smart IoT hardware.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="#skills"
                className="text-[12px] font-medium text-gray-400 hover:text-white transition-colors duration-150"
              >
                Skills
              </a>
              <a
                href="#certificates"
                className="text-[12px] font-medium text-gray-400 hover:text-white transition-colors duration-150"
              >
                Certificates
              </a>
              <a
                href="#projects"
                className="text-[12px] font-medium text-gray-400 hover:text-white transition-colors duration-150"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-[12px] font-medium text-gray-400 hover:text-white transition-colors duration-150"
              >
                Journey
              </a>
              <a
                href="#contact"
                className="text-[12px] font-medium text-gray-400 hover:text-white transition-colors duration-150"
              >
                Contact
              </a>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-medium text-blue-400 hover:text-blue-300 transition-colors duration-150 flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="h-px bg-white/10 mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[11px] text-gray-500">
              © {new Date().getFullYear()} {PERSONAL_INFO.shortName}. All rights reserved.
            </p>
            <p className="text-[11px] text-gray-600">
              San Vicente, Bontoc, Southern Leyte · BSIT-4 Programming
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed Back-To-Top Button matching jemcdyn.vercel.app */}
      <a
        href="#"
        aria-label="Scroll to top"
        className="!fixed bottom-4 right-4 z-40 flex items-center justify-center p-2.5 rounded-xl bg-white text-gray-900 shadow-md hover:shadow-lg border border-gray-200 transition-all hover:-translate-y-0.5"
      >
        <ArrowUp className="w-5 h-5" />
      </a>
    </>
  );
};

