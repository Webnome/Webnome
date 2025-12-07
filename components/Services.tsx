'use client';

import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone, Cloud, Bot, Shield, Megaphone, Server } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored solutions designed specifically for your business needs. From concept to deployment, we build scalable applications.',
    gradient: 'from-primary-blue to-cyan-400'
  },
  {
    icon: Globe,
    title: 'Web Application Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies. Engaging user experiences that drive results.',
    gradient: 'from-blue-500 to-primary-blue'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. Apps that users love and businesses rely on.',
    gradient: 'from-primary-orange to-orange-500'
  },
  {
    icon: Server,
    title: 'Backend & API Development',
    description: 'Robust backend systems and RESTful/GraphQL APIs. Scalable architecture that powers your applications.',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Cloud,
    title: 'Cloud & IT Infrastructure',
    description: 'Cloud computing solutions with AWS, Azure, and GCP. Modernize your business with cloud migration and DevOps.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Bot,
    title: 'AI & Machine Learning',
    description: 'Intelligent automation and AI-powered solutions. Transform your business processes with cutting-edge ML.',
    gradient: 'from-primary-blue to-primary-orange'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies. SEO, PPC, social media, and content marketing to grow your online presence.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Shield,
    title: 'Cybersecurity Solutions',
    description: 'Protect your digital assets with comprehensive security solutions. Robust measures to keep your data safe.',
    gradient: 'from-red-500 to-primary-orange'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-primary-blue/10 to-primary-orange/10 dark:from-primary-blue/20 dark:to-primary-orange/20 rounded-full border border-[var(--card-border)]">
            <span className="gradient-text font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--foreground)]">
            Solutions for Every
            <span className="gradient-text"> Need</span>
          </h2>
          <p className="text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto">
            Comprehensive software solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-6 bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] hover:border-primary-blue/50 transition-all duration-300 card-hover"
              >
                {/* Gradient Background Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon size={26} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 text-[var(--foreground)] group-hover:text-primary-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 flex items-center text-primary-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Top Gradient Border on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
