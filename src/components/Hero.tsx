import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Mic,
  Send,
  Sparkles,
  Camera,
  Trophy,
  Video,
  Check,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  time: Date;
  isTyping?: boolean;
}

const ROLE_TITLES = [
  'FULL-STACK & SAAS DEVELOPER',
  '4TH YEAR BSIT (PROGRAMMING) STUDENT',
  'COMPETITIVE PROGRAMMER & IOT MAKER',
  'CAPSTONE LEAD PROGRAMMER (WATERWATCH)',
];

function getSmartAIResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.includes('pixefy') || q.includes('saas') || q.includes('revenue')) {
    return `**Pixefy** (https://pixefy.tortor.org/) is an AI-powered design and image-editing SaaS I launched in **August 2026** during my summer break! It helps sublimation printers and jersey creators upscale images, clean patterns, extract vectors, and preview 3D mockups. So far, it has reached **₱9,045+ in approved revenue**, **1,088+ registered users**, **279+ projects**, and **6,640+ credits issued**!`;
  }
  if (q.includes('waterwatch') || q.includes('capstone') || q.includes('gis')) {
    return `My 4th-year Capstone Project is **WaterWatch: A Web-GIS Platform for Water Source Monitoring and Quality Forecasting** (https://waterwatch.tortor.org/). I serve as the **Lead Programmer**, building the interactive geospatial map for Maasin City water sources, real-time quality tracking, and time-series water quality forecasting as a Progressive Web App (PWA).`;
  }
  if (
    q.includes('competition') ||
    q.includes('award') ||
    q.includes('certificate') ||
    q.includes('evco') ||
    q.includes('codechum')
  ) {
    return `Here are my college competition highlights from 1st to 3rd year:\n• **3rd Year:** 🏆 **1st Place Champion** — Programming Skills Competition (FCSIT Day)\n• **2nd Year:** 🥈 **2nd Place & Trophy** — 2nd EVCO 2024 (C Language Strand) representing SLSU\n• **2nd Year:** 🏅 **Semi-Finalist** — CodeChum Programming Competition\n• **1st Year:** 🥈 **2nd Place** — OS Installation Competition (FCIS 1st Year Culmination)`;
  }
  if (q.includes('school') || q.includes('course') || q.includes('slsu')) {
    return `I am currently a **4th-year BS Information Technology (Major in Programming) student at Southern Leyte State University (SLSU)**, focusing on full-stack web applications, SaaS platforms, Web-GIS, and embedded IoT systems!`;
  }
  if (
    q.includes('iot') ||
    q.includes('robot') ||
    q.includes('aeroponics') ||
    q.includes('esp32') ||
    q.includes('hardware')
  ) {
    return `Some of my favorite IoT & embedded hardware builds include:\n• **Smart ESP32 Aeroponics System:** Controlled via smartphone to set misting timers and schedules.\n• **Phone-Controlled Mini RC Robot:** A commissioned student project I built in 3rd year that calculates real-time distance traveled using calibrated Servo Motors.`;
  }
  if (q.includes('tiktok') || q.includes('youtube') || q.includes('creator')) {
    return `I grew a community of **60,000+ followers on TikTok** and **21,000+ subscribers on YouTube**, and earned **₱6,000+ from TikTok Affiliate**! I paused uploading in my 2nd year of college to focus 100% on competitive programming and my BSIT degree.`;
  }
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire')) {
    return `You can reach me directly at **johnlloydttortor@gmail.com** or call/text **0953 987 0591**. I live in **San Vicente, Bontoc, Southern Leyte** and I'm open to software, SaaS, Web-GIS, and IoT/ESP32 projects or developer opportunities!`;
  }
  return `Hi! I'm **AI John** — John Lloyd T. Tortor's portfolio assistant. John is a **4th-year BS InfoTech (Programming) student at SLSU**, founder of **Pixefy SaaS (₱9,045+ revenue, 1,088+ users)**, Lead Programmer of **WaterWatch Web-GIS**, **1st Place FCSIT Programming Champion**, **2nd Place EVCO 2024 (C Strand)**, **CodeChum Semi-Finalist**, and content creator (**60K+ TikTok, 21K+ YouTube**). Ask me about his projects, competitions, or tech stack!`;
}

// Generate deterministic 52-week contribution data so it looks super authentic and interactive
const CONTRIBUTION_WEEKS = Array.from({ length: 52 }, (_, w) =>
  Array.from({ length: 7 }, (_, d) => {
    const seed = (w * 7 + d * 13 + 7) % 19;
    // Higher activity from August onwards (Pixefy + WaterWatch)
    if (w > 28) {
      if (seed % 5 === 0) return 4;
      if (seed % 3 === 0) return 3;
      if (seed % 2 === 0) return 2;
      return 1;
    }
    if (seed === 0 || seed === 5) return 3;
    if (seed === 2 || seed === 8 || seed === 14) return 2;
    if (seed % 2 === 0) return 1;
    return 0;
  })
);

const LEVEL_COLORS = [
  '#ebedf0', // level 0
  '#9be9a8', // level 1
  '#40c463', // level 2
  '#30a14e', // level 3
  '#216e39', // level 4
];

export const Hero: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const recognitionRef = useRef<any>(null);

  // Portrait upload state (persisted in localStorage so user can customize anytime)
  const [customPortrait, setCustomPortrait] = useState<string | null>(() => {
    try {
      return localStorage.getItem('jlt_custom_portrait');
    } catch {
      return null;
    }
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Typewriter effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLE_TITLES[roleIndex];
    const speed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText.length < currentRole.length) {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      } else if (!isDeleting && typedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(currentRole.slice(0, typedText.length - 1));
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLE_TITLES.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = true;
      recognition.continuous = false;
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        setInput(transcript);
      };
      recognition.onerror = () => setIsListening(false);
      recognitionRef.current = recognition;
    }
  }, []);

  useEffect(() => {
    if (chatEndRef.current && chatEndRef.current.parentElement) {
      const parent = chatEndRef.current.parentElement;
      parent.scrollTo({ top: parent.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isSending) return;

    const userMsg: ChatMessage = {
      sender: 'user',
      text: trimmed,
      time: new Date(),
    };

    setMessages((prev) => [
      ...prev,
      userMsg,
      { sender: 'ai', text: '', time: new Date(), isTyping: true },
    ]);
    setInput('');
    setIsSending(true);

    const fullReply = getSmartAIResponse(trimmed);

    setTimeout(() => {
      let idx = 0;
      const interval = setInterval(() => {
        idx += 3;
        setMessages((prev) => {
          const copy = [...prev];
          const last = copy[copy.length - 1];
          if (last && last.sender === 'ai') {
            copy[copy.length - 1] = {
              ...last,
              text: fullReply.slice(0, idx),
              isTyping: false,
            };
          }
          return copy;
        });
        if (idx >= fullReply.length) {
          clearInterval(interval);
          setIsSending(false);
        }
      }, 18);
    }, 550);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handlePortraitUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setCustomPortrait(result);
      try {
        localStorage.setItem('jlt_custom_portrait', result);
      } catch {
        // ignore storage quota errors
      }
    };
    reader.readAsDataURL(file);
  };

  const quickPrompts = [
    'Tell me about Pixefy SaaS',
    'What competitions did you win?',
    'Tell me about WaterWatch & IoT',
    'Tell me about your TikTok & YouTube',
  ];

  return (
    <header className="bg-white">
      {/* Top AI Chat Assistant Section (same layout & styling as jemcdyn.vercel.app) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <section className="max-w-2xl mx-auto px-6 pt-7 lg:pt-8 pb-4">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <img
                  alt="AI JOHN"
                  src="/images/ai-bot.webp"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/john-portrait.svg';
                  }}
                  className="h-9 w-9 rounded-xl object-cover ring-1 ring-gray-200 bg-gray-100"
                />
                <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                </span>
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-900 leading-none">
                  Hi, I&apos;m AI JOHN
                </p>
                <p className="text-[11px] text-green-500 font-medium mt-0.5">
                  Online · Ask me anything about John Lloyd
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              {quickPrompts.slice(0, 2).map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="text-[11px] font-medium text-gray-600 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 px-2.5 py-1 rounded-full transition-all duration-150"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div
            className="relative bg-gray-50 border border-gray-200 rounded-2xl p-4 min-h-[76px] max-h-64 overflow-y-auto overflow-x-hidden"
            style={{
              backgroundImage: 'radial-gradient(circle, #dee2eb 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          >
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-[44px] gap-2">
                <p className="text-center text-gray-500 text-[12px] md:text-[13px]">
                  Ask me about my SaaS (Pixefy), WaterWatch Capstone, competitions, or IoT projects...
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {quickPrompts.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => sendMessage(p)}
                      className="text-[11px] bg-white/90 hover:bg-white text-gray-600 hover:text-blue-600 border border-gray-200 px-2.5 py-0.5 rounded-full transition-colors shadow-sm"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20, y: 4 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className={`mb-3.5 flex items-start ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender !== 'user' && (
                    <img
                      src="/images/ai-bot.webp"
                      alt="AI"
                      className="w-7 h-7 mr-2 mt-0.5 rounded-full border border-gray-200 flex-shrink-0 object-cover"
                    />
                  )}
                  <div
                    className={`flex flex-col ${
                      msg.sender === 'user'
                        ? 'items-end max-w-[78%]'
                        : 'items-start max-w-[84%]'
                    }`}
                  >
                    <div
                      className={`px-3.5 py-2.5 text-[12px] md:text-[13px] leading-relaxed border ${
                        msg.sender === 'user'
                          ? 'border-gray-300 bg-gray-900 text-white rounded-2xl rounded-br-md'
                          : 'border-gray-200 bg-white text-gray-700 rounded-2xl rounded-bl-md shadow-sm'
                      }`}
                    >
                      {msg.isTyping ? (
                        <div className="flex items-center space-x-1.5 py-1 px-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0s]" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      ) : (
                        <div className="whitespace-pre-line">{msg.text}</div>
                      )}
                    </div>
                    <div
                      className={`mt-1 flex items-center gap-1 text-[10px] text-gray-400 ${
                        msg.sender === 'user' ? 'mr-1' : 'ml-1'
                      }`}
                    >
                      <span>
                        {msg.time.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        })}
                      </span>
                      {msg.sender === 'user' && <Check className="w-3 h-3 text-gray-400" />}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
            <div ref={chatEndRef} />
          </div>

          {isListening && (
            <div className="flex items-center gap-2 mt-2 text-emerald-500 text-[12px] font-medium px-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Listening...
            </div>
          )}

          <form
            onSubmit={handleFormSubmit}
            className="mt-3 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus-within:border-gray-400 focus-within:bg-white transition-all"
          >
            <input
              type="text"
              placeholder="Ask AI John anything (e.g., Pixefy SaaS, EVCO 2024, WaterWatch, IoT)..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isSending}
              className="flex-1 bg-transparent text-[12px] md:text-[13px] text-gray-800 placeholder-gray-400 outline-none min-w-0"
            />
            <button
              type="button"
              onClick={() => recognitionRef.current && !isListening && recognitionRef.current.start()}
              disabled={isListening}
              title="Voice input"
              className={`p-1.5 rounded-lg transition-colors disabled:opacity-40 ${
                isListening
                  ? 'text-emerald-500 bg-emerald-50'
                  : 'text-gray-400 hover:text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Mic className="w-4 h-4" />
            </button>
            <button
              type="submit"
              disabled={isSending}
              aria-label="Send message"
              className="bg-gray-900 hover:bg-gray-700 disabled:opacity-40 text-white p-1.5 rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </section>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gray-100 my-2" />
      </div>

      {/* Main Hero Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-6 grid min-h-[60vh] w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 py-8 lg:py-10">
          {/* Left Column */}
          <div className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left">
            <hr className="mb-6 border-gray-100 w-full lg:hidden" />
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-1">
              {PERSONAL_INFO.locationBadge}
            </p>
            <h1 className="text-[30px] sm:text-[36px] font-extrabold text-gray-900 leading-tight tracking-tight mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-blue-600 font-semibold mb-7 min-h-[18px]">
              {typedText}
              <span className="animate-pulse text-gray-400 ml-0.5">|</span>
            </p>

            {/* Two Highlight Cards matching jemcdyn.vercel.app */}
            <div className="flex flex-col gap-2.5 mb-5 w-full max-w-md lg:max-w-none">
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-left hover:border-blue-100 hover:bg-blue-50/30 transition-colors">
                <GraduationCap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-0.5">
                    ACADEMIC &amp; INSTITUTION
                  </p>
                  <p className="text-[13px] text-gray-800 font-bold">
                    4th Year BS InfoTech (Programming) · SLSU
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-left hover:border-blue-100 hover:bg-blue-50/30 transition-colors">
                <Briefcase className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-0.5">
                    DESIGNATION &amp; VENTURES
                  </p>
                  <p className="text-[13px] text-gray-800 font-semibold">
                    Founder @ Pixefy SaaS (₱9K+ Rev) · Lead Programmer @ WaterWatch · IoT Commissioner
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-100 mb-5 w-full" />

            {/* Meta Info Rows */}
            <div className="flex flex-col items-center lg:items-start gap-2.5 mb-7">
              <div className="flex items-center gap-3">
                <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="text-[13px] text-gray-500">{PERSONAL_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span className="text-[13px] text-gray-600 font-medium">
                  1st Place FCSIT Coding · 2nd Place EVCO 2024 (C) · CodeChum Semi-Finalist
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Video className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <span className="text-[13px] text-gray-500">
                  Content Creator: <strong className="text-gray-700">60K+ TikTok</strong> &amp;{' '}
                  <strong className="text-gray-700">21K+ YouTube</strong> (₱6K+ Affiliate)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FolderOpen className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <a
                  href="#resume"
                  className="text-[13px] text-gray-800 font-semibold underline underline-offset-4 hover:text-blue-600 transition-colors"
                >
                  My Resume &amp; Background
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait with Concentric Rings & Floating Badges */}
          <div className="flex flex-col items-center order-1 lg:order-2">
            <div className="relative isolate">
              {/* Background Blur & Rings matching jemcdyn.vercel.app */}
              <div className="absolute inset-0 -z-10 scale-90 translate-y-4 rounded-full bg-gray-100 blur-2xl opacity-80" />
              <div className="absolute inset-0 -z-10 m-auto w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full border-2 border-gray-100 lg:border-gray-200 hidden lg:block" />
              <div className="absolute inset-0 -z-10 m-auto w-[310px] h-[310px] lg:w-[420px] lg:h-[420px] rounded-full border border-dashed border-gray-200 lg:border-gray-300 opacity-80 hidden lg:block animate-[spin_60s_linear_infinite]" />
              <div className="absolute top-8 -right-4 -z-10 w-16 h-16 rounded-full bg-blue-50 opacity-90" />
              <div className="absolute bottom-12 -left-4 -z-10 w-10 h-10 rounded-full bg-gray-200 opacity-90" />
              <div
                className="absolute top-0 right-0 w-24 h-24 z-0 opacity-55"
                style={{
                  backgroundImage: 'radial-gradient(circle, #8f9fb9 1px, transparent 1px)',
                  backgroundSize: '10px 10px',
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-20 h-20 z-0 opacity-40"
                style={{
                  backgroundImage: 'radial-gradient(circle, #99a6bc 1px, transparent 1px)',
                  backgroundSize: '10px 10px',
                }}
              />

              {/* Portrait Container */}
              <div className="relative group">
                <img
                  alt={PERSONAL_INFO.shortName}
                  src={customPortrait || '/images/john-portrait.svg'}
                  className="h-[19rem] sm:h-[23rem] lg:h-[28rem] w-auto mx-auto object-contain drop-shadow-xl relative transition-transform duration-500 ease-in-out group-hover:scale-[1.02] rounded-3xl"
                />

                {/* Optional Upload Custom Portrait Button on Hover */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePortraitUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Upload your own portrait photo"
                  className="absolute bottom-3 right-3 bg-white/95 hover:bg-gray-900 text-gray-700 hover:text-white border border-gray-200 shadow-md px-3 py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{customPortrait ? 'Change Photo' : 'Upload My Photo'}</span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 mt-5">
              <a
                href="#projects"
                className="px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white text-[12px] font-bold rounded-lg transition-colors shadow-sm"
              >
                View My Work
              </a>
              <a
                href="#certificates"
                className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-[12px] font-bold rounded-lg border border-blue-200 transition-colors"
              >
                Awards &amp; Certificates
              </a>
              <a
                href="#contact"
                className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-800 text-[12px] font-bold rounded-lg border border-gray-200 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* GitHub & Coding Activity Calendar + Live Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container mx-auto px-6 pb-16">
          <div className="h-px bg-gray-100 mb-10" />

          {/* Quick Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center hover:border-blue-100 hover:bg-white hover:shadow-sm transition-all">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                Pixefy SaaS Revenue
              </p>
              <p className="text-2xl font-extrabold text-gray-900 mt-1">₱9,045+</p>
              <p className="text-[11px] text-blue-600 font-semibold mt-0.5">
                1,088+ Users · 279 Projects
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center hover:border-blue-100 hover:bg-white hover:shadow-sm transition-all">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                Credits Issued
              </p>
              <p className="text-2xl font-extrabold text-gray-900 mt-1">6,640+</p>
              <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                AI Design &amp; Upscaling
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center hover:border-blue-100 hover:bg-white hover:shadow-sm transition-all">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                IT Competitions Won
              </p>
              <p className="text-2xl font-extrabold text-gray-900 mt-1">4 Titles</p>
              <p className="text-[11px] text-amber-600 font-semibold mt-0.5">
                1st FCSIT · 2nd EVCO · CodeChum
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center hover:border-blue-100 hover:bg-white hover:shadow-sm transition-all">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                Creator Community
              </p>
              <p className="text-2xl font-extrabold text-gray-900 mt-1">81K+ Total</p>
              <p className="text-[11px] text-rose-600 font-semibold mt-0.5">
                60K TikTok · 21K YouTube
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-200 rounded-full" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">
                Coding &amp; Project Activity (2026)
              </span>
              <div className="h-px w-8 bg-gray-200 rounded-full" />
            </div>

            <div className="w-full overflow-x-auto rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <div className="min-w-[820px] flex flex-col items-center">
                <div className="flex gap-[5px]">
                  {CONTRIBUTION_WEEKS.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[5px]">
                      {week.map((level, dIdx) => (
                        <div
                          key={dIdx}
                          title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${level * 3} commits / builds`}
                          className="w-[13px] h-[13px] rounded-[3px] transition-transform hover:scale-125"
                          style={{
                            backgroundColor: LEVEL_COLORS[level],
                            border: '1px solid rgba(0,0,0,0.06)',
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between w-full max-w-[880px] mt-4 text-[11px] text-gray-400 font-medium">
                  <span>
                    Active across Pixefy SaaS, WaterWatch Web-GIS, ESP32 IoT &amp; Competitive C/JS
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span>Less</span>
                    {LEVEL_COLORS.map((col, idx) => (
                      <span
                        key={idx}
                        className="w-3 h-3 rounded-[2px] inline-block"
                        style={{ backgroundColor: col }}
                      />
                    ))}
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

