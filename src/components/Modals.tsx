import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const ImageLightboxModal: React.FC<{
  imageSrc: string | null;
  title: string;
  onClose: () => void;
}> = ({ imageSrc, title, onClose }) => {
  return (
    <AnimatePresence>
      {imageSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
          >
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-900 text-white">
              <p className="text-[13px] font-bold tracking-wide truncate pr-4">{title}</p>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-gray-100 max-h-[80vh] overflow-auto flex items-center justify-center p-3">
              <img
                src={imageSrc}
                alt={title}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-sm"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
