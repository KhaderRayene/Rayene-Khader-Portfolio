import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageSquareOff, Bot, LineChart } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const mindsetIcons = [Zap, MessageSquareOff, Bot, LineChart];

export default function MindsetSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]" />
      
      {/* Sharp accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t.mindset.title}
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            {t.mindset.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mt-4" />
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6 md:gap-8">
          {t.mindset.items.map((item, index) => {
            const Icon = mindsetIcons[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 md:p-8 rounded-2xl bg-[#0f0f1a]/80 backdrop-blur-sm border border-white/5 hover:border-red-500/20 transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white pt-2">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Bottom accent */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent" />
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom manifesto quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-red-500/5 to-orange-500/5 border border-red-500/20">
            <p className="text-gray-300 text-sm md:text-base italic max-w-3xl">
              "Real engineers build systems that scale. Everything else is just noise."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}