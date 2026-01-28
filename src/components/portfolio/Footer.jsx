import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4"
        >
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            RK
          </div>
          
          <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1 text-center">
            © {currentYear} Rayene Khader.
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 inline" fill="currentColor" />
          </p>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-gray-500 text-xs sm:text-sm">Available for work</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}