'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const services = [
    'Custom Software',
    'Web Development',
    'Mobile Apps',
    'Backend & APIs',
    'Cloud Solutions',
    'AI & ML',
    'Digital Marketing',
    'Cybersecurity'
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[var(--background-secondary)] border-t border-[var(--card-border)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={theme === 'dark' ? '/logo-night.webp' : '/logo.webp'}
                // src={'/logo.webp'}
                alt="Webnome Logo"
                width={180}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-[var(--foreground-secondary)] mb-6 leading-relaxed">
              Transforming businesses with innovative technology solutions. Your trusted partner for digital excellence.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground-secondary)] hover:bg-gradient-to-r hover:from-primary-blue hover:to-primary-orange hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-[var(--foreground)] text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[var(--foreground-secondary)] hover:text-primary-blue transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-primary-blue group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-6 text-[var(--foreground)] text-lg">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-[var(--foreground-secondary)] hover:text-primary-blue transition-colors cursor-pointer inline-flex items-center gap-2 group">
                    <span className="w-0 h-[2px] bg-primary-blue group-hover:w-4 transition-all duration-300" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6 text-[var(--foreground)] text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@webnome.com"
                  className="flex items-start gap-3 text-[var(--foreground-secondary)] hover:text-primary-blue transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>contact@webnome.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-start gap-3 text-[var(--foreground-secondary)] hover:text-primary-blue transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[var(--foreground-secondary)]">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Serving clients globally with dedicated teams worldwide</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--card-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--foreground-secondary)] text-sm">
              © {currentYear} Webnome Tech Solution. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-[var(--foreground-secondary)]">
              <Link href="/privacy" className="hover:text-primary-blue transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary-blue transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
