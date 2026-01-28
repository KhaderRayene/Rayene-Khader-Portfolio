import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Package, FileSpreadsheet, TrendingUp, 
  Smartphone, ShoppingCart, ArrowRight, X, 
  AlertCircle, Lightbulb, Zap, Code
} from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from './LanguageContext';

const projectIcons = [Calendar, FileSpreadsheet, Package, TrendingUp, Smartphone, ShoppingCart];

const projectColors = [
  { gradient: 'from-cyan-500 to-blue-500', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400' },
  { gradient: 'from-violet-500 to-purple-500', bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400' },
  { gradient: 'from-emerald-500 to-green-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
  { gradient: 'from-amber-500 to-orange-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400' },
  { gradient: 'from-pink-500 to-rose-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400' },
  { gradient: 'from-blue-500 to-indigo-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' }
];

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[150px]" />
      
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
              {t.projects.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.projects.items.map((project, index) => {
            const Icon = projectIcons[index];
            const colors = projectColors[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative p-6 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm hover:border-opacity-50 transition-all duration-500 cursor-pointer overflow-hidden`}
                onClick={() => setSelectedProject({ ...project, index })}
                whileHover={{ y: -5 }}
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl ${colors.bg} border ${colors.border} mb-4`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm ${colors.text} mb-4`}>
                    {project.subtitle}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors">
                    <span>{t.projects.viewDetails}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div
              className="relative max-w-2xl w-full bg-[#0f0f1a] rounded-2xl border border-white/10 p-8 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </Button>
              
              {(() => {
                const colors = projectColors[selectedProject.index];
                const Icon = projectIcons[selectedProject.index];
                
                return (
                  <>
                    <div className={`inline-flex p-4 rounded-xl ${colors.bg} border ${colors.border} mb-6`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    
                    <p className={`${colors.text} mb-6`}>
                      {selectedProject.subtitle}
                    </p>
                    
                    <div className="space-y-6">
                      <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="w-5 h-5 text-red-400" />
                          <h4 className="font-semibold text-red-400">{t.projects.problem}</h4>
                        </div>
                        <p className="text-gray-300">{selectedProject.problem}</p>
                      </div>
                      
                      <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-5 h-5 text-emerald-400" />
                          <h4 className="font-semibold text-emerald-400">{t.projects.solution}</h4>
                        </div>
                        <p className="text-gray-300">{selectedProject.solution}</p>
                      </div>
                      
                      <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-5 h-5 text-cyan-400" />
                          <h4 className="font-semibold text-cyan-400">{t.projects.impact}</h4>
                        </div>
                        <p className="text-gray-300">{selectedProject.impact}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="w-5 h-5 text-gray-400" />
                          <h4 className="font-semibold text-gray-400">{t.projects.stack}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.stack.map((tech, i) => (
                            <span 
                              key={i}
                              className={`px-4 py-2 text-sm font-medium ${colors.bg} ${colors.text} rounded-lg border ${colors.border}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}