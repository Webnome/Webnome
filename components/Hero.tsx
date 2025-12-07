'use client';

import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary-blue opacity-20 dark:opacity-30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-primary-orange opacity-20 dark:opacity-30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-blue/10 to-primary-orange/10 rounded-full blur-3xl" />

        {/* Grid Pattern for Dark Mode */}
        <div className="absolute inset-0 dark:opacity-30 opacity-0 transition-opacity duration-300"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 174, 239, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 174, 239, 0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-primary-blue/10 to-primary-orange/10 dark:from-primary-blue/20 dark:to-primary-orange/20 rounded-full border border-[var(--card-border)]">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-blue to-primary-orange animate-pulse" />
                <span className="gradient-text font-semibold text-sm uppercase tracking-wider">
                  Welcome to Webnome
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-[var(--foreground)]">Transform Your</span>
              <br />
              <span className="gradient-text">
                Digital Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-[var(--foreground-secondary)] mb-8 max-w-2xl"
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
                className="group px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-orange text-white rounded-full font-semibold text-lg hover:shadow-glow-gradient hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] rounded-full font-semibold text-lg hover:border-primary-blue hover:shadow-glow-blue transition-all duration-300"
              >
                Our Services
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-[var(--card-border)]"
            >
              <p className="text-sm text-[var(--foreground-secondary)] mb-4">Trusted by innovative companies worldwide</p>
              <div className="flex items-center gap-8 justify-center lg:justify-start opacity-60 dark:opacity-40">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-20 h-8 bg-[var(--foreground-secondary)]/20 rounded animate-pulse" />
                ))}
              </div>
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
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-orange rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse-slow" />

              {/* Modern 3D-like Element */}
              <div className="relative w-96 h-96 mx-auto">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-blue/30 animate-spin-slow" />

                {/* Middle Ring */}
                <div className="absolute inset-8 rounded-full border-2 border-primary-orange/30 animate-spin-slow" style={{ animationDirection: 'reverse' }} />

                {/* Inner Content */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[var(--card-bg)] to-transparent border border-[var(--card-border)] backdrop-blur-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text">W</div>
                    <div className="text-sm text-[var(--foreground-secondary)] mt-2">EBNOME</div>
                  </div>
                </div>

                {/* Floating Elements */}
                {[
                  { icon: '💻', position: 'top-0 left-1/2 -translate-x-1/2', delay: '0s' },
                  { icon: '🌐', position: 'bottom-0 left-1/2 -translate-x-1/2', delay: '0.5s' },
                  { icon: '📱', position: 'left-0 top-1/2 -translate-y-1/2', delay: '1s' },
                  { icon: '☁️', position: 'right-0 top-1/2 -translate-y-1/2', delay: '1.5s' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`absolute ${item.position} w-14 h-14 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl flex items-center justify-center text-2xl animate-float shadow-lg dark:shadow-glow-gradient`}
                    style={{ animationDelay: item.delay }}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[var(--foreground-secondary)]/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-gradient-to-b from-primary-blue to-primary-orange rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
