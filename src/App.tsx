import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { ResumeSection } from './components/ResumeSection';
import { ContactFooter } from './components/ContactFooter';
import { ImageLightboxModal } from './components/Modals';

export function App() {
  const [previewImg, setPreviewImg] = useState<{ src: string | null; title: string }>({
    src: null,
    title: '',
  });

  const handlePreviewImage = (src: string, title: string) => {
    setPreviewImg({ src, title });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Skills />
      <Projects onPreviewImage={handlePreviewImage} />
      <Experience />
      <Certificates onPreviewImage={handlePreviewImage} />
      <ResumeSection />
      <ContactFooter />

      <ImageLightboxModal
        imageSrc={previewImg.src}
        title={previewImg.title}
        onClose={() => setPreviewImg({ src: null, title: '' })}
      />
    </div>
  );
}

export default App;
