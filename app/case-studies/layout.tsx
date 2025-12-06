import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - WEBNOME Tech Solution',
  description: 'Real results from real projects. See how we\'ve helped businesses achieve success.',
  keywords: 'case studies, portfolio, success stories, project results',
  openGraph: {
    title: 'Case Studies - WEBNOME Tech Solution',
    description: 'Real results from real projects',
    type: 'website',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


