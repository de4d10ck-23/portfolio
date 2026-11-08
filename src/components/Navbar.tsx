import React, { useState } from 'react';
import { Menu, X, ExternalLink, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Skills', href: '#skills' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Projects', href: '#projects' },
    { label: 'CV', href: '#resume' },
    { label: 'Journey', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="text-[15px] font-extrabold text-gray-900 tracking-tight hover:opacity-80 transition-opacity"
        >
          {PERSONAL_INFO.brandPrefix}
          <span className="text-blue-600">.</span>
          {PERSONAL_INFO.brandSuffix}
          <span className="ml-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-400 align-middle">
            {PERSONAL_INFO.brandRole}
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[13px] font-medium text-gray-500 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-all duration-150"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile (@de4d10ck-23)"
            className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-all duration-150"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="http://ehuwat.tortor.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] font-semibold text-emerald-700 hover:text-emerald-900 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-all duration-150"
          >
            E-Huwat Radar
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://waterwatch.tortor.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-all duration-150"
          >
            WaterWatch
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://pixefy.tortor.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] font-semibold text-white bg-gray-900 hover:bg-gray-700 px-3.5 py-1.5 rounded-lg transition-all duration-150 shadow-sm"
          >
            Pixefy SaaS
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-1.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 pb-5 pt-2 border-t border-gray-100 bg-white">
          <ul className="flex flex-col gap-1 mb-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-[13px] font-medium text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-100">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-all duration-150"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="http://ehuwat.tortor.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-all duration-150"
            >
              <span>E-Huwat</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://waterwatch.tortor.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-all duration-150"
            >
              WaterWatch
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://pixefy.tortor.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-semibold text-white bg-gray-900 hover:bg-gray-700 px-3.5 py-1.5 rounded-lg transition-all duration-150"
            >
              Pixefy SaaS
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

