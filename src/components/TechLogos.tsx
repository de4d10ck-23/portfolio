import React from 'react';

export const renderTechLogo = (name: string, className = 'w-6 h-6'): React.ReactNode => {
  const n = name.toLowerCase();

  // 1. C Language
  if (n.startsWith('c ') || n === 'c language') {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path
          d="M115.4 31.6L66.7 3.5c-1.6-.9-3.7-.9-5.3 0L12.6 31.6c-1.6.9-2.6 2.7-2.6 4.6v55.7c0 1.9 1 3.6 2.6 4.6l48.7 28.1c.8.5 1.7.7 2.6.7s1.8-.2 2.6-.7l48.8-28.1c1.6-.9 2.6-2.7 2.6-4.6V36.2c0-1.9-1-3.7-2.5-4.6z"
          fill="#00599C"
        />
        <path
          d="M106.2 36.9L65.5 13.4c-.9-.5-2.1-.5-3.1 0L21.8 36.9c-1 .6-1.6 1.6-1.6 2.7v48.8c0 1.1.6 2.1 1.6 2.7l40.6 23.4c.5.3 1 .4 1.5.4.5 0 1.1-.1 1.5-.4l40.7-23.4c1-.6 1.6-1.6 1.6-2.7V39.6c0-1.1-.6-2.1-1.5-2.7z"
          fill="#004482"
        />
        <path
          d="M83.5 73.6c-2.4 4.8-6.9 7.8-12.2 8.4-7.5.8-14.4-4-16.1-11.4-2-8.5 3.3-17 11.8-18.7 5.7-1.1 11.4 1 14.8 5.6l9.6-6.4c-5.4-7.3-14.3-10.8-23.5-9.3-14.3 2.3-24.3 15-22.3 29.3 2.1 14.7 15.6 24.8 30.3 22.8 9.8-1.3 17.8-7.5 21.6-16.6l-14-3.7z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 2. JavaScript
  if (n.includes('javascript')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path fill="#F7DF1E" d="M0 0h128v128H0z" rx="16" />
        <path
          d="M67.3 100.8c2.4 3.9 6.2 6.7 12.3 6.7 6.1 0 10-3 10-9.6V63.5h15.2v34.4c0 15.2-9 21.7-23.6 21.7-12.7 0-20.5-6.5-24.4-15.1l10.5-3.7zM24.7 101.4c2.2 3.8 5.2 6.4 10.3 6.4 5.3 0 8.7-2.7 8.7-6.5 0-4.5-3.6-6.1-9.9-8.8-10.2-4.4-16.8-9.9-16.8-21.4 0-11.8 9.1-20.7 23.3-20.7 10.2 0 17.5 3.6 22 12.1l-11.7 7.5c-2.5-4.5-5.3-6.3-10.3-6.3-4.6 0-7.6 2.9-7.6 6.3 0 4.1 3.1 5.7 9 8.2 11.5 5 18 10.2 18 22.4 0 13.5-10.6 21.4-24.8 21.4-14.1 0-22.7-6.9-26.6-15.6l14.4-7z"
          fill="#000000"
        />
      </svg>
    );
  }

  // 3. TypeScript
  if (n.includes('typescript')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path fill="#3178C6" d="M0 0h128v128H0z" rx="16" />
        <path
          d="M71.2 96.6c2.4 3.9 6.2 6.7 12.3 6.7 6.1 0 10-3 10-9.6V59.3h15.2v34.4c0 15.2-9 21.7-23.6 21.7-12.7 0-20.5-6.5-24.4-15.1l10.5-3.7zM21.1 59.3h41.4v13.6H48.4v42.9H32.4V72.9H21.1V59.3z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 4. React.js
  if (n.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 115.3 100">
        <ellipse cx="57.65" cy="50" rx="10" ry="10" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="4.5" fill="none">
          <ellipse cx="57.65" cy="50" rx="55" ry="21" />
          <ellipse cx="57.65" cy="50" rx="55" ry="21" transform="rotate(60 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="55" ry="21" transform="rotate(120 57.65 50)" />
        </g>
      </svg>
    );
  }

  // 5. Next.js
  if (n.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <circle cx="64" cy="64" r="64" fill="#000000" />
        <path
          d="M93.3 98.7L50.4 43.6H41.5V84.4H49.3V53.7L87.8 103.3c1.9-1.4 3.7-2.9 5.5-4.6z"
          fill="url(#next_grad)"
        />
        <path d="M78.7 43.6h7.8v40.8h-7.8z" fill="#FFFFFF" />
        <defs>
          <linearGradient id="next_grad" x1="68" y1="67" x2="94" y2="101" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 6. TailwindCSS
  if (n.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path
          d="M64 25.6c-25.6 0-38.4 12.8-38.4 38.4 6.4-9.6 14.4-14.4 24-14.4 14.4 0 21.6 7.2 28.8 14.4 7.2 7.2 14.4 14.4 28.8 14.4 25.6 0 38.4-12.8 38.4-38.4-6.4 9.6-14.4 14.4-24 14.4-14.4 0-21.6-7.2-28.8-14.4-7.2-7.2-14.4-14.4-28.8-14.4zM25.6 64C0 64-12.8 76.8-12.8 102.4c6.4-9.6 14.4-14.4 24-14.4 14.4 0 21.6 7.2 28.8 14.4 7.2 7.2 14.4 14.4 28.8 14.4 25.6 0 38.4-12.8 38.4-38.4-6.4 9.6-14.4 14.4-24 14.4-14.4 0-21.6-7.2-28.8-14.4-7.2-7.2-14.4-14.4-28.8-14.4z"
          fill="#06B6D4"
          transform="translate(10, 0) scale(0.85)"
        />
      </svg>
    );
  }

  // 7. Node.js
  if (n.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path
          d="M64 4.5l54.8 31.6v63.3L64 123.5 9.2 99.4V36.1L64 4.5z"
          fill="#5FA04E"
        />
        <path
          d="M64 16.5L19.5 42.2v51.5L64 119.5l44.5-25.7V42.2L64 16.5z"
          fill="#333333"
        />
        <path
          d="M64 28.2l34.4 19.9v39.7L64 107.7 29.6 87.8V48.1L64 28.2z"
          fill="#5FA04E"
        />
      </svg>
    );
  }

  // 8. PHP / Laravel
  if (n.includes('php') || n.includes('laravel')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <ellipse cx="64" cy="64" rx="60" ry="36" fill="#777BB4" />
        <path
          d="M44.8 52.8c-2.4 0-4.4.9-5.9 2.7l-4.7 19.4h7.5l2.2-9.2c.6-.3 1.4-.5 2.3-.5 3.5 0 6.1-2.4 6.8-5.3.7-2.9-.8-7.1-8.2-7.1zm-1.8 6.7c-.5 2.1-1.8 2.8-3.4 2.8h-1.6l1.4-5.8h1.8c1.6 0 2.3.9 1.8 3zm25.9-6.7c-2.8 0-4.9 1.4-6.1 3.5l.8-3.5H56l-4.7 19.4h7.5l2-8.3c.7-2.9 2.2-4.4 4.7-4.4 2.1 0 3 .9 2.4 3.4l-2.2 9.3h7.6l2.3-9.7c.9-3.7-.6-9.7-6.7-9.7zm28.4 0c-2.4 0-4.4.9-5.9 2.7l-4.7 19.4h7.5l2.2-9.2c.6-.3 1.4-.5 2.3-.5 3.5 0 6.1-2.4 6.8-5.3.7-2.9-.8-7.1-8.2-7.1zm-1.8 6.7c-.5 2.1-1.8 2.8-3.4 2.8h-1.6l1.4-5.8h1.8c1.6 0 2.3.9 1.8 3z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 9. Python
  if (n.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path
          d="M63.3 2.1c-14.7 0-23.8 6.4-23.8 18.7v13.8h24.5v3.5H23.8C10.7 38.1 0 47.9 0 63.8c0 15.6 9.6 24.8 23.8 24.8h7.9V77.4c0-10.7 9.2-20.1 20.3-20.1h24.5c8.9 0 16.3-7.2 16.3-16.3V20.8c0-11.8-9.4-18.7-29.5-18.7zm-12.7 8.8c2.9 0 5.3 2.4 5.3 5.3 0 2.9-2.4 5.3-5.3 5.3-2.9 0-5.3-2.4-5.3-5.3 0-2.9 2.4-5.3 5.3-5.3z"
          fill="#3776AB"
        />
        <path
          d="M64.7 125.9c14.7 0 23.8-6.4 23.8-18.7V93.4H64v-3.5h40.2c13.1 0 23.8-9.8 23.8-25.7 0-15.6-9.6-24.8-23.8-24.8h-7.9v11.2c0 10.7-9.2 20.1-20.3 20.1H51.5c-8.9 0-16.3 7.2-16.3 16.3v20.2c0 11.8 9.4 18.7 29.5 18.7zm12.7-8.8c-2.9 0-5.3-2.4-5.3-5.3 0-2.9 2.4-5.3 5.3-5.3 2.9 0 5.3 2.4 5.3 5.3 0 2.9-2.4 5.3-5.3 5.3z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // 10. ESP32 / Arduino
  if (n.includes('esp32') || n.includes('arduino')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path
          d="M38.8 38.4C17.4 38.4 0 50 0 64s17.4 25.6 38.8 25.6c13.7 0 25.8-4.8 33.2-12.2l-9.1-9.1c-5.1 5.1-14.1 8.5-24.1 8.5-14.5 0-26-7.8-26-12.8s11.5-12.8 26-12.8c10 0 19 3.4 24.1 8.5l9.1-9.1C64.6 43.2 52.5 38.4 38.8 38.4zm50.4 0c-13.7 0-25.8 4.8-33.2 12.2l9.1 9.1c5.1-5.1 14.1-8.5 24.1-8.5 14.5 0 26 7.8 26 12.8s-11.5 12.8-26 12.8c-10 0-19-3.4-24.1-8.5l-9.1 9.1c7.4 7.4 19.5 12.2 33.2 12.2 21.4 0 38.8-11.6 38.8-25.6s-17.4-25.6-38.8-25.6z"
          fill="#00979C"
        />
        <path d="M26 61h16v6H26zm67-5h6v5h5v6h-5v5h-6v-5h-5v-6h5z" fill="#00979C" />
      </svg>
    );
  }

  // 11. Web-GIS / Leaflet
  if (n.includes('gis') || n.includes('leaflet')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path
          d="M110.5 7.5C70.3 7.8 24.1 43.2 13.8 84.8c-4.4 17.8 3.5 28.3 18.2 28.3 48.7 0 88.5-62.1 88.5-98.3 0-5.1-4.9-7.3-10-7.3z"
          fill="#199900"
        />
        <path
          d="M24 105.7c20.5-20.5 49-41.5 86.5-56.2-32.3 23-56.4 51.5-70.3 71.8l-16.2-15.6z"
          fill="#78C600"
        />
      </svg>
    );
  }

  // 12. Blender (3D Animation)
  if (n.includes('blender')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path
          d="M62.5 45.3c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm0 44c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"
          fill="#EA7600"
        />
        <circle cx="62.5" cy="73.3" r="10" fill="#265787" />
        <path
          d="M59 13.3c-3.1 0-5.6 2.5-5.6 5.6v23.5c3.6-1.1 7.3-1.7 11.2-1.7s7.6.6 11.2 1.7V18.9c0-3.1-2.5-5.6-5.6-5.6H59zM19.2 38.6c-2.2-2.2-5.7-2.2-7.9 0s-2.2 5.7 0 7.9l17.7 17.7c2.3-3.1 5.1-5.8 8.1-8.1L19.2 38.6zm81.7 0l-17.9 17.5c3.1 2.3 5.8 5 8.1 8.1l17.7-17.7c2.2-2.2 2.2-5.7 0-7.9s-5.7-2.2-7.9 0z"
          fill="#EA7600"
        />
      </svg>
    );
  }

  // 13. CapCut (Video Editing)
  if (n.includes('capcut')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="28" fill="#000000" />
        <path
          d="M34 46l26 18-26 18V46zm60 0L68 64l26 18V46z"
          fill="#FFFFFF"
        />
        <path
          d="M36 64h56"
          stroke="#00F0FF"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 14. CorelDRAW (T-Shirts)
  if (n.includes('coreldraw')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path
          d="M64 4C36.4 4 14 26.4 14 54c0 23.4 16.3 43.1 38.2 48.4L49 116h30l-3.2-13.6C97.7 97.1 114 77.4 114 54 114 26.4 91.6 4 64 4z"
          fill="#52B743"
        />
        <path
          d="M64 12c-23.2 0-42 18.8-42 42 0 19.8 13.7 36.4 32.2 40.8L51 112h26l-3.2-17.2C92.3 90.4 106 73.8 106 54c0-23.2-18.8-42-42-42z"
          fill="#78D64B"
        />
        <path
          d="M64 12c-12 0-22 18.8-22 42 0 19.8 7.2 36.4 16.9 40.8L56 112h16l-2.9-17.2c9.7-4.4 16.9-21 16.9-40.8 0-23.2-10-42-22-42z"
          fill="#9BE76A"
        />
        <ellipse cx="64" cy="54" rx="8" ry="42" fill="#BAF396" />
      </svg>
    );
  }

  // 15. Adobe Photoshop
  if (n.includes('photoshop')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="26" fill="#001E36" />
        <path
          d="M32 40.2h20.7c11.7 0 18.9 5.8 18.9 15.6 0 10.7-8.1 16.5-19.7 16.5H41.5V94H32V40.2zm9.5 24.3h10.3c6.4 0 10.3-3.2 10.3-8.6 0-5.7-4-8.3-10.4-8.3H41.5v16.9zM76.4 79.5c3.2 3.8 7.9 6.1 13.5 6.1 6.5 0 10.5-3.3 10.5-8.2 0-4.6-3.4-7.2-10.8-9.4-10.1-3-15.1-6.8-15.1-15.1 0-8.6 6.9-14.7 17.5-14.7 6.9 0 12.3 2.1 16.2 5.9l-4.7 6.4c-3.1-2.9-6.8-4.5-11.4-4.5-5.9 0-9.2 3.1-9.2 6.9 0 4.1 3.2 6.1 10.3 8.3 10.8 3.2 15.7 7.4 15.7 15.9 0 9.7-7.6 15.8-19.2 15.8-8.2 0-14.5-2.8-18.9-7.2l5.6-6.2z"
          fill="#31A8FF"
        />
      </svg>
    );
  }

  // 16. Adobe Illustrator
  if (n.includes('illustrator')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="26" fill="#330000" />
        <path
          d="M48.8 35.8L68.5 92H58.2l-4.3-12.8H35.6L31.3 92H21.2l19.5-56.2h8.1zm-4.2 15.8L38 71.4h13.7l-7.1-19.8zM80.6 34.2c3.4 0 6.1 2.7 6.1 6.1s-2.7 6.1-6.1 6.1-6.1-2.7-6.1-6.1 2.7-6.1 6.1-6.1zm-4.4 20h8.7V92h-8.7V54.2z"
          fill="#FF9A00"
        />
      </svg>
    );
  }

  // 17. MySQL / SQL
  if (n.includes('mysql') || n.includes('sql')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path
          d="M64 12c-28.7 0-52 10.7-52 24v56c0 13.3 23.3 24 52 24s52-10.7 52-24V36c0-13.3-23.3-24-52-24z"
          fill="#00758F"
        />
        <path
          d="M116 36c0 13.3-23.3 24-52 24S12 49.3 12 36s23.3-24 52-24 52 10.7 52 24z"
          fill="#005A70"
        />
        <path
          d="M116 64c0 13.3-23.3 24-52 24S12 77.3 12 64"
          fill="none"
          stroke="#F29111"
          strokeWidth="6"
        />
        <path
          d="M116 92c0 13.3-23.3 24-52 24S12 105.3 12 92"
          fill="none"
          stroke="#F29111"
          strokeWidth="6"
        />
      </svg>
    );
  }

  // 18. Supabase / Firebase
  if (n.includes('supabase') || n.includes('firebase')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path
          d="M69.8 124.6c-2.4 3-7.4 1.3-7.4-2.6V68.7H13.6c-3.9 0-5.8-4.7-3.1-7.5L67.3 3.4c2.4-3 7.4-1.3 7.4 2.6v53.3h48.8c3.9 0 5.8 4.7 3.1 7.5L69.8 124.6z"
          fill="#3ECF8E"
        />
      </svg>
    );
  }

  // 19. Git & GitHub
  if (n.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path
          d="M125.7 58.7L69.3 2.3c-3.1-3.1-8.1-3.1-11.2 0L46.8 13.6l14.2 14.2c3.3-1.1 7.2-.4 9.9 2.3 2.7 2.7 3.4 6.6 2.3 9.9l13.7 13.7c3.3-1.1 7.2-.4 9.9 2.3 3.8 3.8 3.8 10 0 13.9-3.8 3.8-10 3.8-13.9 0-2.9-2.9-3.6-7.1-2-10.6L68 46.2v36.6c1 .5 2 1.3 2.8 2.1 3.8 3.8 3.8 10 0 13.9-3.8 3.8-10 3.8-13.9 0-3.8-3.8-3.8-10 0-13.9.9-.9 2-1.6 3.1-2.2V45.6c-1.1-.6-2.2-1.3-3.1-2.2-2.9-2.9-3.6-7.1-2-10.6L40.9 18.7 2.3 57.3c-3.1 3.1-3.1 8.1 0 11.2l56.4 56.4c3.1 3.1 8.1 3.1 11.2 0l55.8-55c3.1-3.1 3.1-8.1 0-11.2z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // 20. Vite & PWA
  if (n.includes('vite') || n.includes('pwa')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <path
          d="M122.9 20.2L68.8 120.9c-2 3.7-7.4 3.7-9.4 0L4.5 20.4c-2.3-4.2 1.4-9.2 6-8.2l51.5 10.9c1.3.3 2.7.3 4 0l50.8-11.1c4.7-.9 8.3 4.1 6.1 8.2z"
          fill="url(#vite_grad)"
        />
        <path
          d="M87.7 7.2L42.5 31.9c-1.8 1-2.7 3.1-2.1 5.1l11.1 37.8c.7 2.4 3.6 3.4 5.6 2l16.1-11.7c1.7-1.2 4-1 5.4.6l10.8 12.1c1.8 2 5.1 1.6 6.3-.7L109 23.3c1.7-3.3-.8-7.3-4.5-7.3l-16.8 1.2z"
          fill="#FFD62E"
        />
        <defs>
          <linearGradient id="vite_grad" x1="10" y1="10" x2="118" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 21. AI API Integration
  if (n.includes('ai api') || n.includes('ai / saas')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="28" fill="#10A37F" />
        <path
          d="M64 24l7.8 24.2 24.2 7.8-24.2 7.8L64 88l-7.8-24.2-24.2-7.8 24.2-7.8L64 24zm32 56l3.9 12.1 12.1 3.9-12.1 3.9L96 112l-3.9-12.1-12.1-3.9 12.1-3.9L96 80z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 22. Servo & Robotics
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

  // 23. OS & SysAdmin / Linux
  if (n.includes('os') || n.includes('sysadmin') || n.includes('linux')) {
    return (
      <svg className={className} viewBox="0 0 128 128">
        <circle cx="64" cy="64" r="60" fill="#E95420" />
        <circle cx="64" cy="64" r="46" fill="none" stroke="#FFFFFF" strokeWidth="12" />
        <circle cx="64" cy="24" r="9" fill="#FFFFFF" />
        <circle cx="30" cy="84" r="9" fill="#FFFFFF" />
        <circle cx="98" cy="84" r="9" fill="#FFFFFF" />
      </svg>
    );
  }

  // Fallback default
  return (
    <span className="text-[11px] font-black tracking-wider uppercase text-blue-600">
      {name.slice(0, 3)}
    </span>
  );
};

