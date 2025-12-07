'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Animated Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue via-primary-orange to-primary-blue rounded-3xl p-[2px] animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
            <div className="absolute inset-[2px] bg-[var(--background)] rounded-3xl" />
          </div>

          {/* Content Container */}
          <div className="relative bg-gradient-to-br from-primary-blue via-primary-blue to-primary-orange p-12 md:p-16 rounded-3xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            {/* Floating Orbs */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />

            {/* Content */}
            <div className="relative text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/20 rounded-full backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Let&apos;s Talk</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let&apos;s discuss how we can help you achieve your goals with cutting-edge technology solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="mailto:contact@webnome.com"
                  className="group px-8 py-4 bg-white text-primary-blue rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white transition-all duration-300"
                >
                  Learn More
                </a>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
                <motion.a
                  href="mailto:contact@webnome.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-3 text-white hover:text-white/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>contact@webnome.com</span>
                </motion.a>
                <motion.a
                  href="tel:+15551234567"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-3 text-white hover:text-white/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-3 text-white"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Global Team</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
