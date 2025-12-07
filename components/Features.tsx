'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Target, Users, Lightbulb, Check } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for performance with cutting-edge technology stack.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Bank-level security with robust backup and disaster recovery.'
  },
  {
    icon: Target,
    title: 'Result-Driven',
    description: 'Data-backed decisions to deliver measurable business outcomes.'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 expert support team ready to assist you anytime.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Staying ahead with latest technologies and methodologies.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[var(--background)]">
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
              Why Choose Us
            </span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--foreground)]">
            Features That
            <span className="gradient-text"> Matter</span>
          </h2>
          <p className="text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto">
            Experience the difference of working with a technology partner that truly understands your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 group p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-primary-blue/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue to-primary-orange flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-[var(--foreground)]">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--foreground-secondary)] text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Stats Card */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-orange rounded-3xl blur-3xl opacity-10 dark:opacity-20" />

              {/* Main card */}
              <div className="relative bg-[var(--card-bg)] rounded-3xl p-8 border border-[var(--card-border)] backdrop-blur-xl">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 ${i % 2 === 0 ? 'bg-primary-blue' : 'bg-primary-orange'} rounded-sm animate-float`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-[var(--foreground)] mb-2">Powerful Solutions</h4>
                  <p className="text-[var(--foreground-secondary)]">Built for scale and performance</p>
                </div>

                {/* Stats */}
                <div className="space-y-5">
                  {[
                    { label: 'Client Satisfaction', value: '98%', width: '98%' },
                    { label: 'Projects Delivered', value: '500+', width: '92%' },
                    { label: 'Team Members', value: '50+', width: '85%' }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-[var(--foreground-secondary)]">{stat.label}</span>
                        <span className="text-xl font-bold gradient-text">
                          {stat.value}
                        </span>
                      </div>
                      <div className="w-full bg-[var(--card-border)] rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: stat.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-2 bg-gradient-to-r from-primary-blue to-primary-orange rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Checkmarks */}
                <div className="mt-8 pt-6 border-t border-[var(--card-border)] grid grid-cols-2 gap-3">
                  {['24/7 Support', 'Free Consultation', 'Agile Development', 'NDA Protected'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[var(--foreground-secondary)]">
                      <Check className="w-4 h-4 text-primary-blue" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
