'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00AEEF] via-[#00AEEF] to-[#F7931E] p-12 md:p-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'
            }}></div>
          </div>

          {/* Content */}
          <div className="relative text-center max-w-3xl mx-auto">
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
                className="px-8 py-4 bg-white text-[#00AEEF] rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight size={20} />
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div className="flex items-center justify-center gap-3 text-white">
                <Mail className="w-6 h-6" />
                <span>contact@webnome.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <Phone className="w-6 h-6" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <MapPin className="w-6 h-6" />
                <span>Global Team</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

