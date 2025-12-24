import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import ClarityProvider from '@/components/providers/ClarityProvider'
import { DeferredScripts } from '@/components/layout/DeferredScripts'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://webnome.com'),
  title: "Webnome - Tech Solution",
  description: "Leading technology solutions and software development services",
    verification: {
    yandex:process.env.NEXT_PUBLIC_YANDEX,
  },
  keywords: "web development, software development, AI solutions, digital marketing, data science, mobile apps, cloud solutions",
  authors: [{ name: "Webnome Tech Solution" }],
  creator: "Webnome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const enableAnalytics =
    process.env.NODE_ENV === 'production' &&
    process.env.NEXT_PUBLIC_SITE_URL === 'https://webnome.com'

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://dpi4fupzvxbqq.cloudfront.net" />
        <link rel="dns-prefetch" href="https://dpi4fupzvxbqq.cloudfront.net" />
        <meta name="gptbot" content="noai, notrain, nofollow" />
        <meta name="anthropic-ai" content="noai, notrain, nofollow" />
        <meta name="google-extended" content="none" />
        <meta name="ai" content="noai, notrain, noindex" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Webnome" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {enableAnalytics && <DeferredScripts />}
      </head>
      <body className={inter.className}>
          {enableAnalytics && (
            <>
              <ClarityProvider />
            </>
          )}
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

