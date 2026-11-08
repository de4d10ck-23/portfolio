import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC<{ onPreviewImage: (src: string, title: string) => void }> = ({
  onPreviewImage,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      className="relative py-16 md:py-28 px-4 md:px-8 bg-[#f8f8f6] overflow-hidden"
      id="projects"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-50 opacity-60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-indigo-50 opacity-50 blur-3xl" />
      </div>

      <div className="relative container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14"
        >
          <div className="flex flex-col items-center text-center gap-4">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Featured Projects
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed text-gray-500">
              From our live AI SaaS platform (<strong>Pixefy</strong>) and real-time community transit radar (<strong>E-Huwat</strong>) to our 4th-year Capstone Web-GIS (<strong>WaterWatch</strong>) and embedded ESP32 IoT hardware builds.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-center py-4">
              {PROJECTS_DATA.map((proj: ProjectItem, idx: number) => {
                const isActive = idx === selectedIndex;
                return (
                  <div
                    key={proj.id}
                    onClick={() => !isActive && scrollTo(idx)}
                    className="flex-[0_0_90%] min-w-0 sm:flex-[0_0_72%] md:flex-[0_0_60%] lg:flex-[0_0_50%] xl:flex-[0_0_44%] px-1.5 md:px-3"
                  >
                    <div
                      className={`group relative flex flex-col h-full w-full bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-500 ease-out ${
                        isActive
                          ? 'shadow-xl scale-100 opacity-100'
                          : 'shadow-sm scale-[0.88] opacity-40 hover:opacity-75 cursor-pointer'
                      }`}
                    >
                      {/* Project Image Container */}
                      <div
                        className={`relative overflow-hidden bg-gray-50 transition-all duration-500 ${
                          isActive ? 'h-64 md:h-80' : 'h-48 md:h-56'
                        }`}
                      >
                        <img
                          alt={proj.title}
                          src={proj.img}
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Top Left Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="text-[10px] font-bold tracking-wider uppercase bg-gray-900/85 text-white backdrop-blur-sm px-3 py-1 rounded-full border border-white/15">
                            {proj.badge}
                          </span>
                        </div>

                        {isActive && (
                          <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onPreviewImage(proj.img, proj.title);
                              }}
                              title="Inspect Screenshot"
                              className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-md transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <a
                              href={proj.site}
                              target={proj.site.startsWith('http') ? '_blank' : undefined}
                              rel={
                                proj.site.startsWith('http') ? 'noopener noreferrer' : undefined
                              }
                              className="bg-white hover:bg-blue-600 text-gray-800 hover:text-white rounded-full p-2 shadow-md transition-colors"
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div
                        className={`flex flex-col flex-grow gap-3 transition-all duration-500 ${
                          isActive ? 'p-6' : 'p-4'
                        }`}
                      >
                        <div>
                          <h3
                            className={`font-bold text-gray-900 uppercase transition-all duration-500 ${
                              isActive
                                ? 'text-base tracking-widest'
                                : 'text-xs tracking-wide'
                            }`}
                          >
                            {proj.title}
                          </h3>
                          {isActive && (
                            <p className="text-[12px] font-medium text-blue-600 mt-0.5">
                              {proj.subtitle}
                            </p>
                          )}
                        </div>
                        <div
                          className={`h-0.5 bg-blue-500 rounded-full transition-all duration-300 ${
                            isActive ? 'w-10 group-hover:w-14' : 'w-6'
                          }`}
                        />

                        {isActive && (
                          <>
                            <p className="text-[13px] leading-relaxed text-gray-500 flex-grow">
                              {proj.desc}
                            </p>

                            {proj.metrics && (
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2">
                                {proj.metrics.map((m) => (
                                  <div
                                    key={m.label}
                                    className="bg-gray-50 border border-gray-100 rounded-xl px-2.5 py-2 text-center"
                                  >
                                    <p className="text-[13px] font-extrabold text-gray-900">
                                      {m.value}
                                    </p>
                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                                      {m.label}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {proj.tech.map((t) => (
                                <span
                                  key={t}
                                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 tracking-wide"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      {isActive && (
                        <div className="px-6 pb-6 flex items-center justify-between gap-4">
                          <a
                            href={proj.site}
                            target={proj.site.startsWith('http') ? '_blank' : undefined}
                            rel={proj.site.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-1.5 text-[12px] font-semibold text-blue-600 hover:text-blue-700 transition-colors tracking-wide uppercase"
                          >
                            <span>
                              {proj.site.startsWith('http')
                                ? 'View Live System'
                                : 'Get In Touch'}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                          <button
                            type="button"
                            onClick={() => onPreviewImage(proj.img, proj.title)}
                            className="text-[11px] font-semibold text-gray-500 hover:text-gray-900 underline underline-offset-4"
                          >
                            Preview Dashboard / UI
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Controls matching jemcdyn.vercel.app */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={scrollPrev}
              aria-label="Previous project"
              className="flex w-10 h-10 rounded-full border border-gray-200 bg-white items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === selectedIndex
                      ? 'w-6 bg-blue-600'
                      : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              aria-label="Next project"
              className="flex w-10 h-10 rounded-full border border-gray-200 bg-white items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200 shadow-sm"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

