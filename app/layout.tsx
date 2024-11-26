import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Custom Kicks - Shoes Beyond Imagination 🚀',
  description: 'Customize your sneakers with unique designs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Customize sneakers with unique designs" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
