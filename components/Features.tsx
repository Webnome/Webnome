'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Shield, Target, Users, Lightbulb } from 'lucide-react';

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
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Features That
            <span className="bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent"> Matter</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference of working with a technology partner that truly understands your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#F7931E] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF] to-[#F7931E] rounded-3xl blur-3xl opacity-20 animate-pulse-slow" />
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                {/* Pixel art decoration */}
                <div className="absolute -top-4 -right-4 flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 ${i % 2 === 0 ? 'bg-[#00AEEF]' : 'bg-[#F7931E]'} animate-float`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Powerful Solutions</h4>
                  <p className="text-gray-600">Built for scale and performance</p>
                </div>
                
                {/* Stats */}
                <div className="space-y-4">
                  {[
                    { label: 'Client Satisfaction', value: '98%' },
                    { label: 'Projects Delivered', value: '500+' },
                    { label: 'Team Members', value: '50+' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">{stat.label}</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent">
                          {stat.value}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 bg-gradient-to-r from-[#00AEEF] to-[#F7931E] rounded-full"
                          style={{ width: `${90 + i * 3}%` }}
                        />
                      </div>
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


