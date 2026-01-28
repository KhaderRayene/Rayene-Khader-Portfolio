import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Rocket, GraduationCap, User } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  
  const roles = [
    { icon: Building2, text: t.about.role1, color: 'cyan' },
    { icon: Rocket, text: t.about.role2, color: 'violet', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69595352ce3942af2c9052e5/4d67ad538_75b30342d_ab3a447d-0d5f-42a0-80zeadeeb-4623f9228b15-removebg-preview.png' },
    { icon: GraduationCap, text: t.about.role3, color: 'blue' }
  ];
  
  const colorClasses = {
    cyan: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/20'
    },
    violet: {
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/20',
      text: 'text-violet-400',
      glow: 'shadow-violet-500/20'
    },
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      text: 'text-blue-400',
      glow: 'shadow-blue-500/20'
    }
  };
  
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]" />
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Info Cards */}
          <motion.div 
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Age badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 mb-4 md:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <User className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
              <span className="text-gray-300 text-xs sm:text-sm font-medium">{t.about.age}</span>
            </motion.div>
            
            {roles.map((role, index) => {
              const colors = colorClasses[role.color];
              const Icon = role.icon;
              
              return (
                <motion.div
                  key={index}
                  className={`group p-4 sm:p-5 rounded-xl sm:rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm hover:border-opacity-50 transition-all duration-300 hover:shadow-lg ${colors.glow}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {role.logo ? (
                      <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${colors.bg} border ${colors.border} flex-shrink-0`}>
                        <img 
                          src={role.logo} 
                          alt="OptionWeb" 
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                        />
                      </div>
                    ) : (
                      <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${colors.bg} border ${colors.border} flex-shrink-0`}>
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`} />
                      </div>
                    )}
                    <span className="text-gray-200 font-medium text-sm sm:text-base md:text-lg">{role.text}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-6 lg:mt-0"
          >
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-2xl sm:rounded-3xl blur-xl" />
            <div className="relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-[#0f0f1a]/80 backdrop-blur-sm border border-white/5">
              <div className="absolute top-0 left-0 w-12 h-12 sm:w-20 sm:h-20 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-xl sm:rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-20 sm:h-20 border-r-2 border-b-2 border-violet-500/30 rounded-br-xl sm:rounded-br-2xl" />
              
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {t.about.description}
              </p>
              
              {/* Decorative elements */}
              <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-500" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-violet-500" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500" />
                <div className="flex-1 h-px bg-gradient-to-l from-violet-500/50 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}