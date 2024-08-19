import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

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
        <ColorSchemeScript defaultColorScheme='dark' />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme='dark'>{children}</MantineProvider>
      </body>
    </html>
  );
}

export default RootLayout;
