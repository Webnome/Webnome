'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const technologies = [
    { name: 'React', logo: '/tech/react.svg' },
    { name: 'Next.js', logo: '/tech/nextjs.svg' },
    { name: 'TypeScript', logo: '/tech/typescript.svg' },
    { name: 'Node.js', logo: '/tech/nodejs.svg' },
    { name: 'Python', logo: '/tech/python.svg' },
    { name: 'AWS', logo: '/tech/aws.svg' },
    { name: 'Docker', logo: '/tech/docker.svg' },
    { name: 'Tailwind', logo: '/tech/tailwind.svg' },
    { name: 'Figma', logo: '/tech/figma.svg' },
    { name: 'MongoDB', logo: '/tech/mongodb.svg' },
    { name: 'PostgreSQL', logo: '/tech/postgresql.svg' },
    { name: 'GraphQL', logo: '/tech/graphql.svg' },
];

// Duplicate for infinite scroll
const marqueeItems = [...technologies, ...technologies, ...technologies];

export default function TechStack() {
    return (
        <section className="py-16 bg-[var(--background-secondary)] border-y border-[var(--card-border)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
                <p className="text-[var(--foreground-secondary)] font-medium">
                    Powered by modern technologies
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex gap-16 py-4 animate-scroll whitespace-nowrap"
                    animate={{
                        x: [0, -1035],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {marqueeItems.map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center min-w-[100px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer"
                        >
                            {/* Using text placeholder if images don't exist yet, but structure is ready for images */}
                            <span className="text-2xl font-bold text-[var(--foreground)]">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[var(--background-secondary)] to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[var(--background-secondary)] to-transparent z-10" />
            </div>
        </section>
    );
}
