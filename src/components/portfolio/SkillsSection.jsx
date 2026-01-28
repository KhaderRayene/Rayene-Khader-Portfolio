import React from "react";
import { motion } from "framer-motion";
import { Server, Layout, Smartphone, Cpu, Code } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const skillCategories = [
  {
    key: "backend",
    icon: Server,
    color: "cyan",
    skills: [
      { name: "Java / Spring Boot", level: 95 },
      { name: "REST APIs", level: 90 },
      { name: "Hibernate / JPA", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "Apache POI (Excel)", level: 85 },
    ],
  },
  {
    key: "frontend",
    icon: Layout,
    color: "violet",
    skills: [
      { name: "Angular", level: 90 },
      { name: "React / TypeScript", level: 85 },
      { name: "HTML / CSS / JS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    key: "mobile",
    icon: Smartphone,
    color: "blue",
    skills: [
      { name: "Flutter", level: 80 },
      { name: "Cross-platform Apps", level: 80 },
    ],
  },
  {
    key: "automation",
    icon: Cpu,
    color: "emerald",
    skills: [
      { name: "Excel / VBA", level: 90 },
      { name: "Python", level: 85 },
      { name: "Machine Learning", level: 75 },
      { name: "Trading Bots", level: 80 },
    ],
  },
  {
    key: "other",
    icon: Code,
    color: "amber",
    skills: [
      { name: "Lua (FiveM)", level: 85 },
      { name: "API Integration", level: 90 },
      { name: "Performance Optimization", level: 85 },
    ],
  },
];

const colorConfig = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    bar: "from-cyan-500 to-cyan-400",
    glow: "shadow-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/50",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-400",
    bar: "from-violet-500 to-violet-400",
    glow: "shadow-violet-500/20",
    hoverBorder: "hover:border-violet-500/50",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    bar: "from-blue-500 to-blue-400",
    glow: "shadow-blue-500/20",
    hoverBorder: "hover:border-blue-500/50",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    bar: "from-emerald-500 to-emerald-400",
    glow: "shadow-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/50",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400",
    bar: "from-amber-500 to-amber-400",
    glow: "shadow-amber-500/20",
    hoverBorder: "hover:border-amber-500/50",
  },
};

export default function SkillsSection() {
  const { t } = useLanguage();

  const categoryLabels = {
    backend: t.skills.backend,
    frontend: t.skills.frontend,
    mobile: t.skills.mobile,
    automation: t.skills.automation,
    other: t.skills.other,
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 right-0 w-1/2 h-96 bg-violet-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-64 bg-cyan-500/5 rounded-full blur-[100px]" />

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
              {t.skills.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, catIndex) => {
            const colors = colorConfig[category.color];
            const Icon = category.icon;

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                className={`group p-6 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm ${colors.hoverBorder} transition-all duration-300 hover:shadow-xl ${colors.glow}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-xl ${colors.bg} border ${colors.border}`}
                  >
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {categoryLabels[category.key]}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIndex * 0.1 + index * 0.05,
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className={`text-xs ${colors.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${colors.bar} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay:
                              catIndex * 0.1 +
                              index * 0.05 +
                              0.2,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
