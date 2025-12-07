import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Webnome Tech Solution',
  description: 'Get in touch with Webnome. Ready to start your project? Contact us for a free consultation.',
  keywords: 'contact webnome, consultation, project inquiry',
  openGraph: {
    title: 'Contact Us - Webnome Tech Solution',
    description: 'Get in touch with our team',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


