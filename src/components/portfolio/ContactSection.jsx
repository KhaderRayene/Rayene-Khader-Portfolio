import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from './LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rayenkhader123@gmail.com',
      href: 'mailto:rayenkhader123@gmail.com',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
      hoverBorder: 'hover:border-cyan-500/40'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+33 7 54 36 93 64',
      href: 'https://wa.me/33754369364',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      hoverBorder: 'hover:border-emerald-500/40'
    }
  ];
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg px-4">
            {t.contact.subtitle}
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" 
                       style={{ background: `linear-gradient(135deg, ${method.color.split(' ')[1]} 0%, ${method.color.split(' ')[3]} 100%)`, opacity: 0.1 }} />
                  
                  <div className={`relative p-8 rounded-2xl ${method.bgColor} backdrop-blur-sm border ${method.borderColor} ${method.hoverBorder} transition-all duration-300`}>
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${method.color} bg-opacity-10 border ${method.borderColor}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-1">{method.label}</h3>
                        <p className="text-gray-400 text-sm">{method.value}</p>
                      </div>
                      <Button className={`w-full bg-gradient-to-r ${method.color} hover:opacity-90 text-white font-medium`}>
                        Contact via {method.label}
                      </Button>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
          
          {/* Location & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            {/* Location */}
            <div className="p-6 rounded-2xl bg-[#0f0f1a]/80 backdrop-blur-sm border border-white/5 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <h4 className="text-white font-medium">Based in Paris, France</h4>
              </div>
              <p className="text-gray-500 text-sm">Available for remote and on-site projects</p>
            </div>
            
            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="https://www.linkedin.com/in/rayene-khader"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0f0f1a]/80 backdrop-blur-sm border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ y: -3 }}
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 font-medium text-sm">LinkedIn</span>
              </motion.a>
              
              <motion.div
                className="relative p-4 rounded-2xl bg-[#0f0f1a]/80 backdrop-blur-sm border border-white/5 flex items-center justify-center gap-3 cursor-not-allowed"
                whileHover={{ y: -3 }}
              >
                <Github className="w-5 h-5 text-gray-500" />
                <span className="text-gray-500 font-medium text-sm">GitHub</span>
                <div className="absolute -top-2 -right-2 px-2 py-1 bg-gray-700 rounded-md text-xs text-gray-400">
                  Coming soon
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}