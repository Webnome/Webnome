'use client';

import { motion } from 'framer-motion';

// Placeholder client logos - you can replace with actual client images
const clients = [
    { name: 'TechCorp', initial: 'T' },
    { name: 'InnovateCo', initial: 'I' },
    { name: 'GlobalTech', initial: 'G' },
    { name: 'DataFlow', initial: 'D' },
    { name: 'CloudBase', initial: 'C' },
    { name: 'SmartSys', initial: 'S' },
    { name: 'NextGen', initial: 'N' },
    { name: 'FutureTech', initial: 'F' },
];

export default function Clients() {
    return (
        <section className="py-16 bg-[var(--background)] overflow-hidden border-y border-[var(--card-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <p className="text-[var(--foreground-secondary)] text-lg">
                        Trusted by <span className="gradient-text font-semibold">innovative companies</span> worldwide
                    </p>
                </motion.div>

                {/* Infinite Scroll Marquee */}
                <div className="relative">
                    {/* Gradient Fade Left */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
                    {/* Gradient Fade Right */}
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

                    <div className="flex overflow-hidden">
                        <motion.div
                            animate={{ x: [0, -50 * clients.length * 2] }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            className="flex gap-12 items-center"
                        >
                            {/* Duplicate for seamless loop */}
                            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-32 h-16 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl flex items-center justify-center group hover:border-primary-blue/50 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-orange/20 flex items-center justify-center">
                                            <span className="gradient-text font-bold text-lg">{client.initial}</span>
                                        </div>
                                        <span className="text-[var(--foreground-secondary)] text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                                            {client.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
