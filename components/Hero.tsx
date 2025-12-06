'use client';

import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-orange-50">
      <Navbar />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#00AEEF] opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#F7931E] opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00AEEF] to-[#F7931E] opacity-5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 mb-4 bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider">
                Welcome to WEBNOME
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-gray-900">Transform Your</span>
              <br />
              <span className="bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent">
                Digital Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Cutting-edge software solutions tailored to your business needs. 
              We deliver innovation, quality, and results that drive success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-[#00AEEF] to-[#F7931E] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Our Services
              </a>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Gradient Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF] to-[#F7931E] rounded-full blur-3xl opacity-30 animate-pulse-slow" />
              
              {/* Segmented Circle (representing logo) */}
              <div className="relative w-96 h-96 mx-auto">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={i}
                      x1="100"
                      y1="100"
                      x2="100"
                      y2="0"
                      stroke={i % 2 === 0 ? '#00AEEF' : '#F7931E'}
                      strokeWidth="8"
                      strokeLinecap="round"
                      transform={`rotate(${i * 30} 100 100)`}
                      className="animate-float"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}


