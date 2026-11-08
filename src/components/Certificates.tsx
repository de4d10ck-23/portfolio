import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Upload, Eye } from 'lucide-react';
import { CERTIFICATES_DATA, CertificateItem } from '../data/portfolioData';

export const Certificates: React.FC<{ onPreviewImage: (src: string, title: string) => void }> = ({
  onPreviewImage,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState<'all' | 'competition' | 'coursera'>('all');

  const filteredCerts = CERTIFICATES_DATA.filter((cert) => {
    if (activeFilter === 'all') return true;
    return cert.category === activeFilter;
  });

  // Allow user to upload/replace certificate photos right in the browser
  const [customCertImages, setCustomCertImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('jlt_custom_certs');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [uploadingCertId, setUploadingCertId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
    emblaApi.reInit();
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(0);
    emblaApi.scrollTo(0);
  }, [activeFilter, emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const handleTriggerUpload = (certId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadingCertId(certId);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !uploadingCertId) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setCustomCertImages((prev) => {
        const updated = { ...prev, [uploadingCertId]: dataUrl };
        try {
          localStorage.setItem('jlt_custom_certs', JSON.stringify(updated));
        } catch {
          // ignore storage quota
        }
        return updated;
      });
      setUploadingCertId(null);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section
      className="py-16 md:py-28 px-4 md:px-8 bg-[#f8f8f6] relative overflow-hidden"
      id="certificates"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-blue-50 opacity-70 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[350px] h-[350px] rounded-full bg-indigo-50 opacity-60 blur-3xl" />
      </div>

      <div className="relative container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mb-14 text-center">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4">
              Credentials &amp; Trophies
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
              Certificates &amp; Awards
            </h2>
            <p className="max-w-xl mx-auto text-[15px] leading-relaxed text-gray-500">
              From winning <strong>1st Place in FCSIT Coding</strong> and <strong>2nd Place in the 2nd EVCO 2024</strong> to verified professional certifications from <strong>Google, IBM, UC Irvine, and Akamai</strong> on Coursera.
            </p>
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {[
                { id: 'all', label: `All Credentials (${CERTIFICATES_DATA.length})` },
                {
                  id: 'competition',
                  label: `Competitions & Awards (${CERTIFICATES_DATA.filter((c) => c.category === 'competition').length})`,
                },
                {
                  id: 'coursera',
                  label: `Coursera Certifications (${CERTIFICATES_DATA.filter((c) => c.category === 'coursera').length})`,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-200 border ${
                    activeFilter === tab.id
                      ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
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
              {filteredCerts.map((cert: CertificateItem, idx: number) => {
                const isActive = idx === selectedIndex;
                const displayImg = customCertImages[cert.id] || cert.img;

                return (
                  <div
                    key={cert.id}
                    onClick={() => !isActive && scrollTo(idx)}
                    className="flex-[0_0_92%] min-w-0 sm:flex-[0_0_70%] md:flex-[0_0_58%] lg:flex-[0_0_48%] xl:flex-[0_0_42%] px-1.5 md:px-3"
                  >
                    <div
                      className={`group relative flex flex-col h-full w-full bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-500 ease-out ${
                        isActive
                          ? 'shadow-xl scale-100 opacity-100'
                          : 'shadow-sm scale-[0.88] opacity-40 hover:opacity-70 cursor-pointer'
                      }`}
                    >
                      <div
                        className={`relative overflow-hidden bg-gray-100 transition-all duration-500 ${
                          isActive ? 'h-60 md:h-72' : 'h-44 md:h-52'
                        }`}
                      >
                        <img
                          alt={cert.title}
                          src={displayImg}
                          className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Placement Badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="text-[10px] font-extrabold tracking-wider uppercase text-white bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                            {cert.placement}
                          </span>
                          <span className="text-[10px] font-semibold text-white bg-blue-600/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                            {cert.yearTag}
                          </span>
                        </div>

                        {isActive && (
                          <>
                            <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onPreviewImage(displayImg, cert.title);
                                }}
                                title="View Full Certificate"
                                className="bg-white hover:bg-gray-100 rounded-full p-2 shadow-md text-gray-800"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={(e) => handleTriggerUpload(cert.id, e)}
                                title="Upload your certificate scan/photo"
                                className="bg-white hover:bg-blue-600 text-gray-800 hover:text-white rounded-full p-2 shadow-md transition-colors"
                              >
                                <Upload className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onPreviewImage(displayImg, cert.title);
                                }}
                                className="text-[10px] font-bold tracking-widest uppercase text-white bg-black/50 hover:bg-black/75 backdrop-blur-sm px-3 py-1 rounded-full"
                              >
                                View Certificate
                              </button>
                              <button
                                type="button"
                                onClick={(e) => handleTriggerUpload(cert.id, e)}
                                className="text-[10px] font-bold tracking-wider uppercase text-white bg-blue-600/85 hover:bg-blue-600 backdrop-blur-sm px-3 py-1 rounded-full"
                              >
                                {customCertImages[cert.id] ? 'Change Photo' : 'Upload Scan'}
                              </button>
                            </div>
                          </>
                        )}
                      </div>

                      <div
                        className={`flex flex-col flex-grow gap-2.5 transition-all duration-500 ${
                          isActive ? 'p-5' : 'p-3'
                        }`}
                      >
                        <h3
                          className={`font-bold text-gray-900 uppercase leading-snug transition-all duration-500 ${
                            isActive
                              ? 'text-[13px] tracking-widest'
                              : 'text-[10px] tracking-wide'
                          }`}
                        >
                          {cert.title}
                        </h3>
                        <p className="text-[11px] font-semibold text-blue-600">{cert.issuer}</p>
                        <div
                          className={`h-0.5 bg-blue-500 rounded-full transition-all duration-300 ${
                            isActive ? 'w-8' : 'w-5'
                          }`}
                        />
                        {isActive && (
                          <p className="text-[12px] leading-relaxed text-gray-500 flex-grow">
                            {cert.desc}
                          </p>
                        )}
                      </div>

                      {isActive && (
                        <div className="px-5 pb-5 flex flex-wrap items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => onPreviewImage(displayImg, cert.title)}
                            className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-600 hover:text-blue-700 transition-colors tracking-wide uppercase"
                          >
                            <span>View Certificate</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>

                          {cert.links.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {cert.links.map((lnk) => (
                                <a
                                  key={lnk.url}
                                  href={lnk.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-700 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 px-2.5 py-1 rounded-full transition-colors"
                                >
                                  <span>{lnk.label}</span>
                                  <ArrowUpRight className="w-3 h-3" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={scrollPrev}
              aria-label="Previous certificate"
              className="flex w-10 h-10 rounded-full border border-gray-200 bg-white items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-bold text-gray-700 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">
                {selectedIndex + 1} / {filteredCerts.length}
              </span>
            </div>
            <button
              onClick={scrollNext}
              aria-label="Next certificate"
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

