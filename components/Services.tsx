'use client';

import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone, Cloud, Bot, Shield, Megaphone, Server, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Tailored enterprise solutions designed to scale with your business needs.',
    gradient: 'from-blue-600 to-cyan-500',
    colSpan: 'md:col-span-2 lg:col-span-2',
    bg: 'bg-blue-500/5'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance web applications with stunning interactive experiences.',
    gradient: 'from-indigo-500 to-purple-500',
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-indigo-500/5'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform apps that users love.',
    gradient: 'from-orange-500 to-pink-500',
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-orange-500/5'
  },
  {
    icon: Bot,
    title: 'AI & ML Solutions',
    description: 'Intelligent automation and predictive analytics to drive growth.',
    gradient: 'from-emerald-500 to-teal-500',
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-emerald-500/5'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Secure, scalable cloud architecture and DevOps automation.',
    gradient: 'from-cyan-500 to-blue-500',
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-cyan-500/5'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven strategies to amplify your online presence.',
    gradient: 'from-rose-500 to-red-500',
    colSpan: 'md:col-span-2 lg:col-span-2',
    bg: 'bg-rose-500/5'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--background)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary-blue/10 rounded-full border border-primary-blue/20">
            <span className="text-primary-blue font-semibold text-sm uppercase tracking-wider">
              Our Expertise
            </span>
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--foreground)]">
            Solutions for the
            <span className="gradient-text"> Digital Age</span>
          </h2>
          <p className="text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto">
            We combine creativity with technical excellence to deliver products that stand out.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${service.colSpan} group relative p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-transparent transition-all duration-500 overflow-hidden hover:shadow-2xl`}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon size={32} className="text-[var(--foreground)] group-hover:text-primary-blue transition-colors duration-300" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
                      {service.title}
                    </h3>
                    <p className="text-[var(--foreground-secondary)] leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="flex items-center gap-2 text-[var(--foreground)] font-medium group-hover:text-primary-blue transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Decorative Blob */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

