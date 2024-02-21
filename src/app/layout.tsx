import type { Metadata, Viewport } from 'next';

import '@/styles/globals.css';

import { fontSans } from 'lib/fonts';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: siteConfig.icons,
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen font-sans antialiased ${fontSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
