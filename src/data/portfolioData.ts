export interface ProjectItem {
  id: string;
  img: string;
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  metrics?: { label: string; value: string }[];
  tech: string[];
  site: string;
  secondaryLink?: { label: string; url: string };
  status?: 'ongoing' | 'completed';
}

export interface CertificateItem {
  id: string;
  yearTag: string;
  placement: string;
  title: string;
  issuer: string;
  desc: string;
  img: string;
  links: { label: string; url: string }[];
  accentColor: string;
  category?: 'competition' | 'coursera';
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  tech: string[];
  achievements: string[];
}

export interface MilestoneItem {
  period: string;
  yearLevel: string;
  title: string;
  location: string;
  badge?: string;
  description: string;
  links?: { label: string; url: string }[];
}

export const PERSONAL_INFO = {
  name: "JOHN LLOYD T. TORTOR",
  shortName: "John Lloyd Tortor",
  brandPrefix: "JL",
  brandSuffix: "TORTOR",
  brandRole: "Dev",
  locationBadge: "Based in Bontoc, Southern Leyte, PH",
  fullAddress: "San Vicente, Bontoc, Southern Leyte, PH",
  email: "johnlloydttortor@gmail.com",
  phone: "0953 987 0591",
  phoneHref: "+639539870591",
  course: "BS in Information Technology (Major in Programming)",
  yearLevel: "4th Year Undergraduate Student · SLSU",
  designation: "Full-Stack & SaaS Developer · 3D Animator & Video Editor · IoT Maker",
  institution: "Southern Leyte State University (SLSU)",
  tiktokFollowers: "60K+",
  tiktokUrl: "https://www.tiktok.com/@jltteditz",
  youtubeSubscribers: "21K+",
  youtubeUrl: "https://www.youtube.com/@whuttOfficial",
  affiliateEarnings: "₱6,000+",
  pixefyRevenue: "₱9,045+",
  pixefyUsers: "1,088+",
  githubUsername: "de4d10ck-23",
  githubUrl: "https://github.com/de4d10ck-23",
  canvaPortfolioUrl: "https://canva.link/892fqjf9vpdl4wf",
  avatarUrl: "/images/john-lloyd-photo.jpg",
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "pixefy",
    img: "/projects/pixefy-app.jpg",
    badge: "Founder & Creator · Live SaaS (₱9,045+ Revenue)",
    title: "PIXEFY — AI DESIGN SAAS",
    subtitle: "AI Design Tools for Creators & Sublimation Printing",
    desc: "An AI-powered SaaS application launched in August during summer break that enables creators to upscale images, clean patterns, extract vectors, and generate 3D jersey mockups. Features full GCash payment integration, credit billing, and an admin analytics dashboard.",
    metrics: [
      { label: "Total Revenue", value: "₱9,045+" },
      { label: "Registered Users", value: "1,088+" },
      { label: "Projects Created", value: "279+" },
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "AI Image Upscaling",
      "Vector Extraction",
      "3D Mockups",
      "GCash Billing",
      "SaaS Architecture",
    ],
    site: "https://pixefy.tortor.org/",
    status: "completed",
  },
  {
    id: "ehuwat",
    img: "/projects/ehuwat-app.jpg",
    badge: "Ongoing Project · Live Transit Radar & PWA",
    title: "E-HUWAT — LIVE TRANSIT RADAR",
    subtitle: "Community Transit Radar & GPS Hailing for Southern Leyte",
    desc: "An ongoing real-time community map radar and Progressive Web App (PWA) for Sogod and Southern Leyte. Enables commuters (including SLSU students and locals) to broadcast a live 'Ga-Huwat Ko!' GPS pin to nearby Tricycles, Multicabs, Vans, and Buses on an interactive live radar.",
    metrics: [
      { label: "Transit Modes", value: "Tricycles, Multicabs, Vans, Buses" },
      { label: "Coverage", value: "Sogod & Southern Leyte" },
      { label: "Core Feature", value: "Live GPS 'Ga-Huwat Ko!'" },
      { label: "Status", value: "Active / Ongoing" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Interactive Radar Map",
      "Geolocation API",
      "Progressive Web App (PWA)",
      "Real-Time Transit Hailing",
      "Local Transportation",
    ],
    site: "http://ehuwat.tortor.org/",
    status: "ongoing",
  },
  {
    id: "waterwatch",
    img: "/projects/waterwatch-app.jpg",
    badge: "4th Year Capstone Project · Lead Programmer",
    title: "WATERWATCH: WEB-GIS PLATFORM",
    subtitle: "Water Source Monitoring & Quality Forecasting System",
    desc: "Lead Programmer for our 4th-year Capstone Project: an interactive Web-GIS platform and Progressive Web Application (PWA) for Maasin City that monitors water sources in real time, maps spatial water data, and forecasts water quality trends.",
    metrics: [
      { label: "Role", value: "Lead Programmer" },
      { label: "Platform", value: "Web-GIS + PWA" },
      { label: "Analytics", value: "Quality Forecasting" },
      { label: "Status", value: "Active / Ongoing" },
    ],
    tech: [
      "React.js",
      "Web-GIS / Leaflet",
      "Spatial Mapping",
      "Forecasting Model",
      "Tailwind CSS",
      "PWA",
      "REST API",
      "MySQL / PostgreSQL",
    ],
    site: "https://waterwatch.tortor.org/",
    status: "ongoing",
  },
  {
    id: "smart-trading",
    img: "/projects/smart-trading.png",
    badge: "MQL5 Marketplace · Automated AI Trading Engine",
    title: "SMART TRADING — AI INTRADAY BOT",
    subtitle: "Grok AI Multi-Timeframe Intraday Engine with Telegram Control",
    desc: "An advanced algorithmic intraday trading engine published on the MQL5 Marketplace. Powered by real-time Grok AI analysis, multi-timeframe OHLCV market structure tracking (H4, H1, M15, M5), dynamic ATR risk-to-reward ratio management, and full remote Telegram smartphone control.",
    metrics: [
      { label: "AI Engine", value: "Grok Model" },
      { label: "Platform", value: "MetaTrader 5 & MQL5" },
      { label: "Style", value: "Intraday / Multi-Asset" },
      { label: "Control", value: "Telegram Commands" },
    ],
    tech: [
      "MQL5 / MetaTrader 5",
      "Grok AI API",
      "Python / Algorithm",
      "Telegram Bot API",
      "Multi-Timeframe Analysis",
      "ATR Risk Management",
      "Automated Execution",
      "Marketplace Product",
    ],
    site: "https://www.mql5.com/en/market/product/180408?source=Site+Profile",
    status: "completed",
  },
  {
    id: "aeroponics",
    img: "/projects/aeroponics-tower.jpg",
    badge: "IoT & Embedded Systems Project",
    title: "SMART ESP32 AEROPONICS",
    subtitle: "Phone-Controlled Automated Mist & Timer System",
    desc: "An automated IoT aeroponics cultivation system powered by an ESP32 microcontroller. Allows users to wirelessly configure misting intervals, schedule nutrient spray timers, and control relays directly from their smartphone.",
    metrics: [
      { label: "Controller", value: "ESP32 Wi-Fi" },
      { label: "Control", value: "Smartphone UI" },
      { label: "Automation", value: "Smart Timers" },
      { label: "Hardware", value: "Relays & Sensors" },
    ],
    tech: [
      "ESP32",
      "C / C++ (Arduino)",
      "Mobile Web / App Control",
      "IoT Timers",
      "Relay Automation",
      "Embedded Systems",
    ],
    site: "#contact",
    status: "completed",
  },
  {
    id: "rc-robot",
    img: "/projects/rc-robot-build.jpg",
    badge: "3rd Year Student Commission · Robotics",
    title: "SERVO ODOMETRY RC ROBOT",
    subtitle: "Phone-Controlled Mini RC Robot with Distance Calculation",
    desc: "Commissioned student hardware project built in 3rd year: a smartphone-controlled mini RC robot engineered with Servo Motors that accurately computes and displays the real-time distance traveled.",
    metrics: [
      { label: "Actuation", value: "Servo Motors" },
      { label: "Telemetry", value: "Distance Calc" },
      { label: "Interface", value: "Phone Remote" },
      { label: "Type", value: "Client Commission" },
    ],
    tech: [
      "Arduino / ESP32",
      "Servo Motors",
      "C / C++",
      "Bluetooth / Wi-Fi Control",
      "Distance Kinematics",
      "Robotics",
    ],
    site: "#contact",
    status: "completed",
  },
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "fcsit-1st-place",
    yearTag: "March 5, 2025 · 3rd Year",
    placement: "🏆 1st Placer",
    title: "1st Placer — Programming Skill Competition (FCSIT Day 2025)",
    issuer: "SLSU Main Campus · FCSIT & ICTS",
    desc: "Awarded 1st Placer in the Programming Skill Competition during FCSIT Day 2025 ('Shaping the Future with Technology and Creativity'), held on March 5, 2025 at the FCSIT Building, Southern Leyte State University – Main Campus.",
    img: "/certificates/cert-fcsit-1st-place-2025.jpg",
    links: [],
    accentColor: "from-amber-500 to-yellow-600",
    category: "competition",
  },
  {
    id: "evco-2024",
    yearTag: "2024 · 2nd Year",
    placement: "🥈 2nd Place & Trophy",
    title: "2nd Place — C Language Strand (2nd EVCO 2024)",
    issuer: "SLSU · Faculty of Computer Studies and Information Technology",
    desc: "Certificate of Recognition presented to John Lloyd Tortor for demonstrating outstanding skills in programming, securing 2nd Place in the C LANGUAGE STRAND during the 2nd Eastern Visayas Coding Olympics (EVCO 2024).",
    img: "/certificates/cert-evco-2024.jpg",
    links: [
      {
        label: "View SLSU Official Post",
        url: "https://www.facebook.com/southernleytestateu/posts/pfbid0M9D1Xsx3L3VrRntczMzF2qhdTwQ9xSKE1cLux5Ahv3XzE8DgU84g3C2SpdaM7zdxl",
      },
    ],
    accentColor: "from-blue-600 to-indigo-700",
    category: "competition",
  },
  {
    id: "os-install-2nd",
    yearTag: "December 6, 2023 · 1st Year",
    placement: "🥈 2nd Place",
    title: "2nd Place — OS Installation (IT101/L Culmination Program)",
    issuer: "SLSU Main Campus · CCSIT Department",
    desc: "Certificate of Recognition for winning 2nd Place in the OS Installation category during the Culmination Program in IT101/L – Introduction to Computing at the CCSIT Building, SLSU – Main Campus on December 6, 2023.",
    img: "/certificates/cert-os-installation-2023.jpg",
    links: [],
    accentColor: "from-purple-600 to-indigo-700",
    category: "competition",
  },
  {
    id: "fcsit-participation-2025",
    yearTag: "March 5, 2025 · 3rd Year",
    placement: "📜 Official Certificate",
    title: "Programming Skills Competition — FCSIT Day 2025",
    issuer: "SLSU Main Campus · FCSIT & ICTS",
    desc: "Certificate of Participation proudly presented to John Lloyd Tortor in recognition of valuable participation in the Programming Skills Competition during FCSIT Day 2025 at the FCSIT Building, SLSU – Main Campus.",
    img: "/certificates/cert-fcsit-participation-2025.jpg",
    links: [],
    accentColor: "from-indigo-600 to-blue-700",
    category: "competition",
  },
  {
    id: "coursera-google-ai-essentials",
    yearTag: "April 19, 2026 · Specialization",
    placement: "🌟 Google Specialization",
    title: "Google AI Essentials Specialization (5 Courses)",
    issuer: "Google Career Certificates · Amanda Brophy",
    desc: "Successfully completed the online 5-course Google AI Essentials specialization, mastering foundational artificial intelligence concepts, prompt engineering, generative AI productivity workflows, and responsible AI implementation.",
    img: "/certificates/coursera-7xaabv75s0bg.jpg",
    links: [
      {
        label: "Verify on Coursera",
        url: "https://coursera.org/verify/specialization/7XAABV75S0BG",
      },
    ],
    accentColor: "from-blue-600 to-emerald-600",
    category: "coursera",
  },
  {
    id: "coursera-arduino-c",
    yearTag: "March 28, 2026",
    placement: "🎓 UC Irvine (UCI)",
    title: "The Arduino Platform and C Programming",
    issuer: "University of California, Irvine · Prof. Ian Harris",
    desc: "Completed university-level coursework on the Arduino architecture, C/C++ embedded systems programming, microcontroller hardware debugging, and sensor actuation.",
    img: "/certificates/the-arduino-platform-and-c-programming.jpg",
    links: [
      {
        label: "Verify on Coursera",
        url: "https://coursera.org/verify/99NWK4A7P7CJ",
      },
    ],
    accentColor: "from-teal-600 to-cyan-700",
    category: "coursera",
  },
  {
    id: "coursera-ibm-web-dev",
    yearTag: "March 28, 2026",
    placement: "⚡ IBM Certified",
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    issuer: "IBM · Skills Network",
    desc: "Completed IBM certification covering modern semantic HTML5, CSS responsive layout architectures, JavaScript programming, DOM manipulation, and web deployment fundamentals.",
    img: "/certificates/introduction-to-web-development-with-html-css.jpg",
    links: [
      {
        label: "Verify on Coursera",
        url: "https://coursera.org/verify/AU5M29RU9TZ1",
      },
    ],
    accentColor: "from-blue-700 to-indigo-800",
    category: "coursera",
  },
  {
    id: "coursera-ibm-data-analytics",
    yearTag: "April 17, 2026",
    placement: "📊 IBM Certified",
    title: "Data Analytics Foundations: Turn Data into Insights",
    issuer: "IBM · Rav Ahuja (Global Program Director)",
    desc: "Completed foundational data analytics coursework covering modern data pipelines, data transformation workflows, insight extraction, and structured business reporting.",
    img: "/certificates/data-analytics-foundations.jpg",
    links: [
      {
        label: "Verify on Coursera",
        url: "https://coursera.org/verify/KNIZEJWTK8KB",
      },
    ],
    accentColor: "from-sky-600 to-blue-800",
    category: "coursera",
  },
  {
    id: "coursera-akamai-it-security",
    yearTag: "April 21, 2026",
    placement: "🛡️ Akamai Technologies",
    title: "Introduction to IT Security",
    issuer: "Akamai Technologies, Inc. · Akamai Technical Academy",
    desc: "Completed IT security certification covering threat identification, defense mechanisms, access control architecture, cryptography, and secure systems deployment.",
    img: "/certificates/coursera-cknran69bl5l.jpg",
    links: [
      {
        label: "Verify on Coursera",
        url: "https://coursera.org/verify/CKNRAN69BL5L",
      },
    ],
    accentColor: "from-amber-600 to-orange-700",
    category: "coursera",
  },
  {
    id: "coursera-uw-web-project",
    yearTag: "May 4, 2026",
    placement: "🌐 Univ. of Washington",
    title: "Guided Website Development Project",
    issuer: "University of Washington · Coursera MOOC",
    desc: "Completed guided hands-on web development project building and deploying responsive website architectures with cross-device compatibility.",
    img: "/certificates/guided-website-development-project.jpg",
    links: [
      {
        label: "Verify on Coursera",
        url: "https://coursera.org/verify/DJGW3W32Z2RE",
      },
    ],
    accentColor: "from-purple-700 to-indigo-800",
    category: "coursera",
  },
  {
    id: "coursera-google-prompting",
    yearTag: "April 18, 2026",
    placement: "🤖 Google Certified",
    title: "Discover the Art of Prompting",
    issuer: "Google Career Certificates",
    desc: "Certified by Google in prompt engineering techniques, contextual steering, structured output generation, and creative prompting with large language models.",
    img: "/certificates/discover-the-art-of-prompting.jpg",
    links: [
      {
        label: "Verify on Coursera",
        url: "https://coursera.org/verify/2AGBX7GFUJL7",
      },
    ],
    accentColor: "from-blue-600 to-violet-700",
    category: "coursera",
  },
  {
    id: "coursera-google-productivity-ai",
    yearTag: "April 18, 2026",
    placement: "🚀 Google Certified",
    title: "Maximize Productivity With AI Tools",
    issuer: "Google Career Certificates",
    desc: "Certified by Google in deploying generative AI assistants to streamline developer workflows, automate documentation, and optimize productivity.",
    img: "/certificates/maximize-productivity-with-ai-tools.jpg",
    links: [
      {
        label: "Verify on Coursera",
        url: "https://coursera.org/verify/34FZOOY1E7UG",
      },
    ],
    accentColor: "from-emerald-600 to-teal-700",
    category: "coursera",
  },
  {
    id: "coursera-google-ai-curve",
    yearTag: "April 19, 2026",
    placement: "🔮 Google Certified",
    title: "Stay Ahead of the AI Curve",
    issuer: "Google Career Certificates",
    desc: "Certified by Google in emerging AI paradigms, multimodal tools, generative modeling trends, and future-ready software engineering strategies.",
    img: "/certificates/stay-ahead-of-the-ai-curve.jpg",
    links: [
      {
        label: "Verify on Coursera",
        url: "https://coursera.org/verify/GJRILIB6O160",
      },
    ],
    accentColor: "from-indigo-600 to-purple-700",
    category: "coursera",
  },
  {
    id: "coursera-google-responsible-ai",
    yearTag: "April 18, 2026",
    placement: "⚖️ Google Certified",
    title: "Use AI Responsibly",
    issuer: "Google Career Certificates",
    desc: "Certified by Google in ethical AI engineering, data privacy protection, algorithmic bias mitigation, and responsible generative AI deployment.",
    img: "/certificates/use-ai-responsibly.jpg",
    links: [
      {
        label: "Verify on Coursera",
        url: "https://coursera.org/verify/6BWE3AO10MBB",
      },
    ],
    accentColor: "from-rose-600 to-pink-700",
    category: "coursera",
  },
  {
    id: "coursera-google-intro-ai",
    yearTag: "April 16, 2026",
    placement: "💡 Google Certified",
    title: "Introduction to AI",
    issuer: "Google Career Certificates",
    desc: "Completed foundational artificial intelligence certification covering neural network fundamentals, machine learning models, and real-world AI applications.",
    img: "/certificates/coursera-kpyykwk5yspc.jpg",
    links: [
      {
        label: "Verify on Coursera",
        url: "https://coursera.org/verify/KPYYKWK5YSPC",
      },
    ],
    accentColor: "from-blue-500 to-cyan-600",
    category: "coursera",
  },
];

export const SKILLS_LIST = [
  { name: "C Language", category: "Competitive", badge: "C" },
  { name: "JavaScript", category: "Language", badge: "JS" },
  { name: "TypeScript", category: "Language", badge: "TS" },
  { name: "React.js", category: "Frontend", badge: "⚛️" },
  { name: "Next.js", category: "Full-Stack", badge: "N" },
  { name: "TailwindCSS", category: "Frontend", badge: "TW" },
  { name: "Node.js", category: "Backend", badge: "🟢" },
  { name: "PHP / Laravel", category: "Backend", badge: "PHP" },
  { name: "Python", category: "AI & Data", badge: "PY" },
  { name: "ESP32 / Arduino", category: "IoT & Hardware", badge: "IoT" },
  { name: "Web-GIS / Leaflet", category: "Geospatial", badge: "GIS" },
  { name: "Blender (3D Animation)", category: "Creative & 3D", badge: "🎨" },
  { name: "CapCut (Video Editing)", category: "Creative & 3D", badge: "🎬" },
  { name: "CorelDRAW (T-Shirts)", category: "Design", badge: "👕" },
  { name: "Adobe Photoshop", category: "Design", badge: "PS" },
  { name: "Adobe Illustrator", category: "Design", badge: "AI" },
  { name: "MySQL / SQL", category: "Database", badge: "SQL" },
  { name: "Supabase / Firebase", category: "Cloud DB", badge: "⚡" },
  { name: "Git & GitHub", category: "Workflow", badge: "GIT" },
  { name: "Vite & PWA", category: "Tooling", badge: "⚡" },
  { name: "AI API Integration", category: "AI / SaaS", badge: "AI" },
  { name: "Servo & Robotics", category: "Embedded", badge: "🤖" },
  { name: "OS & SysAdmin", category: "Systems", badge: "OS" },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: "August 2026 - Present",
    title: "Founder & Full-Stack SaaS Developer — Pixefy",
    company: "Pixefy (pixefy.tortor.org)",
    location: "Bontoc, Southern Leyte",
    description:
      "Conceived, architected, and launched Pixefy during summer break (August 2026) — an AI-powered design and image processing SaaS built for sublimation printing creators, jersey designers, and digital artists. Built the full-stack application, credit billing system, GCash payment verification workflow, and real-time admin analytics panel.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "AI Upscaling & Vector APIs",
      "3D Mockups",
      "GCash Payment Flow",
      "Cloud Hosting",
    ],
    achievements: [
      "Generated ₱9,045+ in approved revenue from subscription/credit packages (Value ₱149 & Agency ₱289 tiers)",
      "Grew platform to 1,088+ registered user accounts and 279+ creator projects",
      "Issued 6,640+ AI generation credits with automated credit tracking and admin approval",
      "Engineered custom AI workflows for pattern cleaning, vector extraction, and 3D sublimation mockups",
    ],
  },
  {
    period: "2026 - Present (4th Year)",
    title: "Lead Capstone Programmer — WaterWatch Web-GIS",
    company: "Southern Leyte State University (BSIT Capstone)",
    location: "Southern Leyte, PH",
    description:
      "Serving as the Lead Programmer for our 4th-year BSIT Capstone Project: 'WaterWatch: A Web-GIS Platform for Water Source Monitoring and Quality Forecasting' (waterwatch.tortor.org). Responsible for the geospatial mapping interface, water quality forecasting integration, progressive web app (PWA) capabilities, and backend data architecture.",
    tech: [
      "React.js",
      "Web-GIS",
      "Spatial Mapping",
      "Time-Series Forecasting",
      "PWA",
      "Tailwind CSS",
      "RESTful APIs",
    ],
    achievements: [
      "Built and deployed the live production system at waterwatch.tortor.org",
      "Integrated interactive GIS mapping for Maasin City water sources and quality monitoring stations",
      "Implemented predictive water quality forecasting dashboards and mobile-ready PWA installation",
    ],
  },
  {
    period: "2025 - Present (3rd–4th Year)",
    title: "Freelance Software & IoT / Robotics Commissioner",
    company: "Self-Employed · Student Commissions",
    location: "Southern Leyte, PH",
    description:
      "Started accepting custom software, web system, and embedded IoT/robotics commissions in 3rd year college after winning 1st Place in the FCSIT Day Programming Skills Competition. Delivering end-to-end hardware + software prototypes for students and local clients.",
    tech: [
      "ESP32",
      "Arduino C/C++",
      "Servo Motors",
      "Mobile Remote Control",
      "Full-Stack Web",
      "Sensors & Relays",
    ],
    achievements: [
      "Engineered a smartphone-controlled Mini RC Robot that calculates real-time distance traveled using Servo Motors",
      "Developed an ESP32 Smart Aeroponics System with mobile phone timer configuration and automated misting control",
      "Delivered custom web and microcontroller student projects from circuit assembly to mobile UI",
    ],
  },
  {
    period: "2022 - 2024",
    title: "3D Animator, Video Editor & Apparel Designer",
    company: "TikTok (60K+) & YouTube (21K+)",
    location: "Remote",
    description:
      "Built a combined following of over 60,000 TikTok followers and 21,000+ YouTube subscribers by creating 3D animations in Blender and high-energy video edits in CapCut. Also gained hands-on experience designing t-shirts and apparel using CorelDRAW, Adobe Photoshop, and Adobe Illustrator—creative background that later directly inspired building Pixefy SaaS for sublimation creators.",
    tech: [
      "Blender 3D",
      "CapCut",
      "CorelDRAW (T-Shirts)",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "TikTok Affiliate",
      "3D Animation & Editing",
    ],
    achievements: [
      "Grew TikTok to 60,000+ followers and YouTube to 21,000+ subscribers through viral 3D animations and creative edits",
      "Earned ₱6,000+ in revenue through TikTok Affiliate campaigns",
      "Designed custom t-shirt and apparel mockups using CorelDRAW, Photoshop, and Illustrator",
      "Leveraged apparel design workflow pain-points to architect Pixefy SaaS (3D mockups and pattern cleaning)",
    ],
  },
];

export const MILESTONES_TIMELINE: MilestoneItem[] = [
  {
    period: "4th Year College · 2026",
    yearLevel: "4th Year BSIT",
    title: "Launched Pixefy SaaS (₱9,045+ Revenue & 1,088 Users) + WaterWatch Capstone",
    location: "pixefy.tortor.org · waterwatch.tortor.org",
    badge: "SaaS & Capstone",
    description:
      "Built and launched Pixefy in August during summer free time, scaling it to ₱9,045+ revenue and 1,088 registered users. Simultaneously serving as Lead Programmer for our Capstone Project 'WaterWatch: A Web-GIS Platform for Water Source Monitoring and Quality Forecasting'.",
    links: [
      { label: "Pixefy Live", url: "https://pixefy.tortor.org/" },
      { label: "WaterWatch Live", url: "https://waterwatch.tortor.org/" },
    ],
  },
  {
    period: "March 5, 2025 · 3rd Year",
    yearLevel: "3rd Year BSIT",
    title: "1st Placer — Programming Skill Competition (FCSIT Day 2025) & IoT Projects",
    location: "FCSIT Building, SLSU – Main Campus",
    badge: "🥇 1st Placer Champion",
    description:
      "Achieved 1st Placer in the Programming Skill Competition during FCSIT Day 2025 ('Shaping the Future with Technology and Creativity'). Also built custom hardware-software projects including a phone-controlled Mini RC Robot that calculates distance traveled using Servo Motors and an ESP32 phone-controlled Aeroponics system.",
  },
  {
    period: "2nd Year College · 2024",
    yearLevel: "2nd Year BSIT",
    title: "2nd Place & Trophy — 2nd EVCO 2024 (C Language Strand)",
    location: "Eastern Visayas Coding Olympics · SLSU FCSIT",
    badge: "🥈 2nd Place + Trophy",
    description:
      "Represented Southern Leyte State University in the 2nd Eastern Visayas Coding Olympics (EVCO 2024) and won 2nd Place with trophies in the C Language Strand.",
    links: [
      {
        label: "SLSU Official Post",
        url: "https://www.facebook.com/southernleytestateu/posts/pfbid0M9D1Xsx3L3VrRntczMzF2qhdTwQ9xSKE1cLux5Ahv3XzE8DgU84g3C2SpdaM7zdxl",
      },
    ],
  },
  {
    period: "December 6, 2023 · 1st Year",
    yearLevel: "1st Year BSIT",
    title: "2nd Place — OS Installation (IT101/L Culmination Program)",
    location: "CCSIT Building, SLSU – Main Campus",
    badge: "🥈 2nd Place",
    description:
      "Competed representing our section during the Culmination Program in IT101/L – Introduction to Computing and won 2nd Place in the OS Installation category at the CCSIT Building, SLSU – Main Campus.",
  },
];


