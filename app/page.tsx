import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Webnome - Tech Solution | Transform Your Digital Future',
  description: 'Leading technology solutions and software development services. AI, Web Development, Digital Marketing, Data Science, and more.',
  keywords: 'web development, software development, AI solutions, digital marketing, data science, mobile apps, cloud solutions',
  authors: [{ name: 'Webnome Tech Solution' }],
  creator: 'Webnome',
  openGraph: {
    title: 'Webnome - Transform Your Digital Future',
    description: 'Leading technology solutions and software development services',
    url: 'https://webnome.com',
    siteName: 'Webnome Tech Solution',
    type: 'website',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Webnome Tech Solution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webnome - Transform Your Digital Future',
    description: 'Leading technology solutions and software development services',
    images: ['/logo.jpg'],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Clients />
      <Services />
      <Capabilities />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}

