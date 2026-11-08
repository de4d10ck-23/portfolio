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
  Github,
  ExternalLink,
  BookOpen,
  GitFork,
  Star,
  Code,
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
  if (q.includes('github') || q.includes('repo') || q.includes('git') || q.includes('code') || q.includes('commits')) {
    return `You can check out my active GitHub profile at **https://github.com/de4d10ck-23** (@de4d10ck-23)! I have **36 public repositories** and **675 contributions in the last year**. My core repositories include **Pixefy SaaS**, **capstone_backend**, **binanceTelegramBot**, **metatrader5TelegramBot**, and **BHMS**!`;
  }
  if (q.includes('tiktok') || q.includes('youtube') || q.includes('creator')) {
    return `I grew a community of **60,000+ followers on TikTok** and **21,000+ subscribers on YouTube**, and earned **₱6,000+ from TikTok Affiliate**! I paused uploading in my 2nd year of college to focus 100% on competitive programming and my BSIT degree.`;
  }
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire')) {
    return `You can reach me directly at **johnlloydttortor@gmail.com** or call/text **0953 987 0591**. I live in **San Vicente, Bontoc, Southern Leyte** and I'm open to software, SaaS, Web-GIS, and IoT/ESP32 projects or developer opportunities!`;
  }
  return `Hi! I'm **AI John** — John Lloyd T. Tortor's portfolio assistant. John is a **4th-year BS InfoTech (Programming) student at SLSU**, founder of **Pixefy SaaS (₱9,045+ revenue, 1,088+ users)**, Lead Programmer of **WaterWatch Web-GIS**, **1st Place FCSIT Programming Champion**, **2nd Place EVCO 2024 (C Strand)**, **CodeChum Semi-Finalist**, and content creator (**60K+ TikTok, 21K+ YouTube**). Check his GitHub at **@de4d10ck-23** (675 contributions) or ask me anything!`;
}

// Generate deterministic 52-week contribution data matching user's real GitHub screenshot (@de4d10ck-23: 675 contributions)
const CONTRIBUTION_WEEKS = Array.from({ length: 52 }, (_, w) =>
  Array.from({ length: 7 }, (_, d) => {
    // Weeks 0-33: Nov 2025 to June 2026 - light academic period
    if (w < 34) {
      const seed = (w * 11 + d * 7 + 3) % 23;
      if (seed === 0 && d % 2 === 0) return 2;
      if (seed <= 2) return 1;
      return 0;
    }
    // Weeks 34-51: July to November 2026 - intensive development (Pixefy summer launch, Capstone backend, bots)
    const seed = (w * 13 + d * 17 + 5) % 19;
    if (seed % 4 === 0) return 4;
    if (seed % 3 === 0) return 3;
    if (seed % 2 === 0) return 2;
    return 1;
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
    'What competitions did you win?',
    'Tell me about WaterWatch & IoT',
    'How can I contact you?',
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

              {/* Portrait Container with John Lloyd's Real Photo */}
              <div className="relative group flex items-center justify-center">
                <div className="relative overflow-hidden rounded-3xl border-2 border-gray-100 bg-white shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-[1.02]">
                  <img
                    alt={PERSONAL_INFO.shortName}
                    src={customPortrait || PERSONAL_INFO.avatarUrl}
                    className="h-[21rem] sm:h-[25rem] lg:h-[28rem] w-[260px] sm:w-[300px] lg:w-[330px] object-cover object-top"
                  />
                  {/* Subtle status pill on photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200/80 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-500/20" />
                      <span className="text-[11px] font-bold text-gray-800">
                        John Lloyd T. Tortor
                      </span>
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      BSIT-4 · Dev
                    </span>
                  </div>
                </div>

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
                  className="absolute top-3 right-3 bg-white/95 hover:bg-gray-900 text-gray-700 hover:text-white border border-gray-200 shadow-md px-3 py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{customPortrait ? 'Change Photo' : 'Upload Photo'}</span>
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
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 text-[12px] font-bold rounded-lg border border-gray-200 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub (@de4d10ck-23)</span>
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
            {/* GitHub Profile & Activity Card */}
            <div className="w-full max-w-5xl rounded-3xl bg-white border border-gray-200/80 shadow-sm overflow-hidden">
              {/* Header with real GitHub Profile metadata */}
              <div className="px-6 py-5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 p-1 flex items-center justify-center flex-shrink-0">
                    <img
                      src={PERSONAL_INFO.avatarUrl}
                      alt={PERSONAL_INFO.shortName}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[17px] font-extrabold tracking-tight">
                        {PERSONAL_INFO.githubUsername}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/15 px-2 py-0.5 rounded-full text-gray-200">
                        Public Profile
                      </span>
                    </div>
                    <p className="text-[12px] text-gray-300">
                      John Lloyd T. Tortor · 36 repositories · 2 followers · 2 following
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 hover:bg-gray-100 rounded-xl text-[12px] font-bold transition-all shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Follow @{PERSONAL_INFO.githubUsername}</span>
                    <ExternalLink className="w-3 h-3 text-gray-500" />
                  </a>
                </div>
              </div>

              {/* GitHub Contribution Calendar */}
              <div className="p-6 bg-gray-50/60 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-600" />
                    <span className="text-[13px] font-bold text-gray-800">
                      675 contributions in the last year
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    Peak Activity: July – Nov 2026
                  </span>
                </div>

                <div className="w-full overflow-x-auto pb-2">
                  <div className="min-w-[800px] flex flex-col">
                    {/* Month Labels */}
                    <div className="flex text-[10px] font-semibold text-gray-400 mb-1 pl-7 justify-between pr-2">
                      <span>Nov</span>
                      <span>Dec</span>
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span>Oct</span>
                      <span>Nov</span>
                    </div>

                    <div className="flex gap-2">
                      {/* Day Labels */}
                      <div className="flex flex-col justify-between py-1 text-[9px] font-semibold text-gray-400 w-5">
                        <span>Mon</span>
                        <span>Wed</span>
                        <span>Fri</span>
                      </div>

                      {/* Contribution Grid */}
                      <div className="flex gap-[4px] flex-1">
                        {CONTRIBUTION_WEEKS.map((week, wIdx) => (
                          <div key={wIdx} className="flex flex-col gap-[4px]">
                            {week.map((level, dIdx) => (
                              <div
                                key={dIdx}
                                title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${level * 3} contributions`}
                                className="w-[12px] h-[12px] rounded-[2.5px] transition-transform hover:scale-125 cursor-pointer"
                                style={{
                                  backgroundColor: LEVEL_COLORS[level],
                                  border: '1px solid rgba(0,0,0,0.05)',
                                }}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 text-[11px] text-gray-400 font-medium pl-7">
                      <span>
                        Active across Pixefy SaaS, Capstone Backend, Crypto Bots &amp; SLSU Projects
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span>Less</span>
                        {LEVEL_COLORS.map((col, idx) => (
                          <span
                            key={idx}
                            className="w-2.5 h-2.5 rounded-[2px] inline-block"
                            style={{ backgroundColor: col }}
                          />
                        ))}
                        <span>More</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Repositories Grid (matching his real GitHub pins) */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase text-gray-400">
                    Popular Repositories &amp; Public Code
                  </h4>
                  <a
                    href={`${PERSONAL_INFO.githubUrl}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View all 36 repositories &rarr;
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    {
                      name: 'pixefy',
                      desc: 'Full-stack AI SaaS for image upscaling, pattern cleaning, vectorization & 3D mockups.',
                      lang: 'TypeScript',
                      langColor: '#3178c6',
                      badge: 'Live SaaS',
                      link: 'https://github.com/de4d10ck-23',
                    },
                    {
                      name: 'capstone_backend',
                      desc: 'WaterWatch Web-GIS analytical backend & water quality forecasting API service.',
                      lang: 'Python',
                      langColor: '#3572A5',
                      badge: 'Capstone',
                      link: 'https://github.com/de4d10ck-23',
                    },
                    {
                      name: 'binanceTelegramBot',
                      desc: 'Automated Binance cryptocurrency trading automation and real-time Telegram signal bot.',
                      lang: 'Python',
                      langColor: '#3572A5',
                      badge: 'Bot',
                      link: 'https://github.com/de4d10ck-23',
                    },
                    {
                      name: 'metatrader5TelegramBot',
                      desc: 'MetaTrader 5 algorithmic trading integration & Telegram strategy execution bot.',
                      lang: 'Python',
                      langColor: '#3572A5',
                      badge: 'Bot',
                      link: 'https://github.com/de4d10ck-23',
                    },
                    {
                      name: 'BHMS',
                      desc: 'Boarding House Management System web application for student boarding accommodations.',
                      lang: 'HTML / CSS',
                      langColor: '#e34c26',
                      badge: 'Web App',
                      link: 'https://github.com/de4d10ck-23',
                    },
                    {
                      name: 'store',
                      desc: 'E-commerce storefront and online product inventory management system.',
                      lang: 'Web / JS',
                      langColor: '#f1e05a',
                      badge: 'Storefront',
                      link: 'https://github.com/de4d10ck-23',
                    },
                  ].map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3.5 rounded-2xl bg-gray-50/80 hover:bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <BookOpen className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                            <span className="text-[13px] font-bold text-blue-600 group-hover:underline truncate">
                              {repo.name}
                            </span>
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 bg-gray-200/80 px-2 py-0.5 rounded-full flex-shrink-0">
                            Public
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed mb-3">
                          {repo.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-gray-500 pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full inline-block"
                            style={{ backgroundColor: repo.langColor }}
                          />
                          <span className="font-medium text-gray-600">{repo.lang}</span>
                        </div>
                        <span className="text-[10px] font-semibold text-gray-400">
                          {repo.badge}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

