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
  designation: "Full-Stack & SaaS Developer · IoT Maker",
  institution: "Southern Leyte State University (SLSU)",
  tiktokFollowers: "60K+",
  youtubeSubscribers: "21K+",
  affiliateEarnings: "₱6,000+",
  pixefyRevenue: "₱9,045+",
  pixefyUsers: "1,088+",
  githubUsername: "de4d10ck-23",
  githubUrl: "https://github.com/de4d10ck-23",
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
      { label: "Status", value: "Live Production" },
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
  },
  {
    id: "codechum-semis",
    yearTag: "2024 · 2nd Year",
    placement: "🏅 Semi-Finalist",
    title: "CodeChum National / Regional Programming Competition",
    issuer: "CodeChum · SLSU Coaching Team",
    desc: "Advanced to the Semi-Finals of the prestigious CodeChum Programming Competition during 2nd year college, competing against top student programmers.",
    img: "/certificates/cert-codechum.svg",
    links: [
      {
        label: "CodeChum Official Photo",
        url: "https://www.facebook.com/photo/?fbid=1016215010515797&set=a.371119525025352",
      },
      {
        label: "Coach's Feature Post",
        url: "https://www.facebook.com/funfunky31/posts/pfbid0bpq25X1gbSGzhraq443fgpMr4x7avMD6z4bsbABMHW8WWx5ytNz5KLdDr1Xr5Meel",
      },
    ],
    accentColor: "from-emerald-600 to-teal-700",
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
    title: "Digital Content Creator & TikTok Affiliate Marketer",
    company: "TikTok (60K+) & YouTube (21K+)",
    location: "Remote",
    description:
      "Built an engaged audience of over 60,000 followers on TikTok and 21,000+ subscribers on YouTube before pausing uploads in 2nd year college to focus full-time on competitive programming and BSInfoTech coursework.",
    tech: [
      "Video Production",
      "Audience Growth",
      "TikTok Affiliate",
      "Social Media Analytics",
      "Digital Marketing",
    ],
    achievements: [
      "Grew TikTok channel to 60,000+ followers and YouTube channel to 21,000+ subscribers",
      "Earned ₱6,000+ in commissions through TikTok Affiliate marketing campaigns",
      "Transitioned focus in 2nd year college toward competitive programming (EVCO & CodeChum) and software engineering",
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
    period: "2nd Year College · 2024",
    yearLevel: "2nd Year BSIT",
    title: "Semi-Finalist — CodeChum Programming Competition",
    location: "CodeChum Regional / National Competition",
    badge: "🏅 Semi-Finalist",
    description:
      "Competed in the CodeChum Programming Competition during 2nd year and advanced to the Semi-Finals alongside our SLSU coaching team. Also paused TikTok (60K followers) and YouTube (21K subscribers) uploads this year to dedicate 100% focus to programming competitions and software engineering.",
    links: [
      {
        label: "CodeChum Official Post",
        url: "https://www.facebook.com/photo/?fbid=1016215010515797&set=a.371119525025352",
      },
      {
        label: "Coach's Facebook Post",
        url: "https://www.facebook.com/funfunky31/posts/pfbid0bpq25X1gbSGzhraq443fgpMr4x7avMD6z4bsbABMHW8WWx5ytNz5KLdDr1Xr5Meel",
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


