import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import '@/styles/globals.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });
const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spark Web',
  description: 'A Web App to view the Spark Challenge Website',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='/favicon.ico'
          sizes='any'
        />
        <link
          rel='icon'
          href='/favicons/favicon-16x16.png'
          sizes='16x16'
          type='image/png'
        />
        <link
          rel='icon'
          href='/favicons/favicon-32http://localhost:3000/x32.png'
          sizes='32x32'
          type='image/png'
        />
        <link
          rel='apple-touch-icon'
          href='/favicons/apple-touch-icon.png'
          sizes='180x180'
        />
        <link
          rel='manifest'
          href='/site.webmanifest'
        />
        <ColorSchemeScript defaultColorScheme='dark' />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme='dark'>{children}</MantineProvider>
      </body>
    </html>
  );
}

export default RootLayout;
