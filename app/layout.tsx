import { siteConfig } from '@/data/config/site.settings';
import { ThemeProviders } from './theme-providers';
import { Metadata } from 'next';

import { colors } from '@/data/config/colors.js';

import '@/css/globals.css';
import { SearchProvider } from '@/components/shared/SearchProvider';
import { AnalyticsWrapper } from '@/components/shared/Analytics';

const globalColors = colors;
const style: string[] = [];

Object.keys(globalColors).map((variant) => {
  return Object.keys(globalColors[variant as keyof typeof globalColors]).map((color) => {
    const value = globalColors[variant as keyof typeof globalColors][color as keyof (typeof globalColors)[keyof typeof globalColors]];
    style.push(`--${variant}-${color}: ${value}`);
  });
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: './',
    siteName: siteConfig.title,
    images: [siteConfig.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteConfig.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteConfig.title,
    card: 'summary_large_image',
    images: [siteConfig.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteConfig.language}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Use system fonts with CSS variables */}
        <style>
          {`
          :root, :before, :after {
            --font-space-default: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            --font-space-display: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            ${style.join(';')}
          }
        `}
        </style>

        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="generator" content="CrepeLoft" />
        <meta name="msapplication-TileColor" content="#C8517E" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#F9F2E1"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#120B0D"
        />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>

      <body className="flex flex-col antialiased min-h-screen bg-secondary-100 text-[#0A0303] dark:bg-[#120B0D] dark:text-[#FFF5F7]">
        <ThemeProviders>
          <AnalyticsWrapper />
          <SearchProvider>
            {children}
          </SearchProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
