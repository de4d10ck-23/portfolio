import React from 'react';

// Official brand logos (Devicon / Simple Icons) stored in /public/logos
const LOGO_MAP: { match: (n: string) => boolean; file: string }[] = [
  { match: (n) => n.startsWith('c ') || n === 'c language', file: 'c' },
  { match: (n) => n.includes('javascript'), file: 'javascript' },
  { match: (n) => n.includes('typescript'), file: 'typescript' },
  { match: (n) => n.includes('react'), file: 'react' },
  { match: (n) => n.includes('next'), file: 'nextjs' },
  { match: (n) => n.includes('tailwind'), file: 'tailwind' },
  { match: (n) => n.includes('node'), file: 'nodejs' },
  { match: (n) => n.includes('php') || n.includes('laravel'), file: 'php' },
  { match: (n) => n.includes('python'), file: 'python' },
  { match: (n) => n.includes('esp32') || n.includes('arduino'), file: 'arduino' },
  { match: (n) => n.includes('gis') || n.includes('leaflet'), file: 'leaflet' },
  { match: (n) => n.includes('blender'), file: 'blender' },
  { match: (n) => n.includes('coreldraw'), file: 'coreldraw' },
  { match: (n) => n.includes('photoshop'), file: 'photoshop' },
  { match: (n) => n.includes('illustrator'), file: 'illustrator' },
  { match: (n) => n.includes('mysql') || n.includes('sql'), file: 'mysql' },
  { match: (n) => n.includes('supabase') || n.includes('firebase'), file: 'supabase' },
  { match: (n) => n.includes('git'), file: 'git' },
  { match: (n) => n.includes('vite') || n.includes('pwa'), file: 'vite' },
  { match: (n) => n.includes('ai api') || n.includes('ai / saas'), file: 'openai' },
  { match: (n) => n.includes('os') || n.includes('sysadmin') || n.includes('linux'), file: 'ubuntu' },
];

export const renderTechLogo = (name: string, className = 'w-6 h-6'): React.ReactNode => {
  const n = name.toLowerCase();

  // CapCut (no public icon set carries it) – black rounded tile with the white cut mark
  if (n.includes('capcut')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="28" fill="#000000" />
        <path d="M30 50l34 14-34 14V50z" fill="#FFFFFF" />
        <path d="M98 50L64 64l34 14V50z" fill="#FFFFFF" />
        <rect x="60" y="30" width="8" height="68" rx="4" fill="#FFFFFF" />
      </svg>
    );
  }

  // Servo & Robotics – generic robot glyph
  if (n.includes('servo') || n.includes('robot')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <rect x="20" y="32" width="88" height="64" rx="16" fill="#1E293B" />
        <circle cx="48" cy="64" r="10" fill="#38BDF8" />
        <circle cx="80" cy="64" r="10" fill="#38BDF8" />
        <rect x="58" y="16" width="12" height="16" rx="4" fill="#64748B" />
        <circle cx="64" cy="14" r="7" fill="#F43F5E" />
        <path d="M44 82h40" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" />
        <rect x="8" y="52" width="12" height="24" rx="4" fill="#64748B" />
        <rect x="108" y="52" width="12" height="24" rx="4" fill="#64748B" />
      </svg>
    );
  }

  const entry = LOGO_MAP.find((l) => l.match(n));
  if (entry) {
    return (
      <img
        src={`/logos/${entry.file}.svg`}
        alt={name}
        className={`${className} object-contain`}
        loading="lazy"
        draggable={false}
      />
    );
  }

  return (
    <span className="text-[11px] font-black tracking-wider uppercase text-blue-600">
      {name.slice(0, 3)}
    </span>
  );
};
