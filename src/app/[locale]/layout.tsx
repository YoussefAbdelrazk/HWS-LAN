import { Footer, Navbar } from '@/components/features/Home';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Geist, Geist_Mono, Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// const hanson = localFont({
//   src: './fonts/Hanson.woff2',
//   variable: '--font-hanson',
//   display: 'swap',
// });
export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}
export const metadata: Metadata = {
  title: 'Hawssa Dance Fitness - The Global Dance Fitness Experience',
  description:
    'Join millions worldwide in the most energetic dance fitness program. Get certified, find classes, and transform your fitness journey with rhythm and movement.',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased ${
          isRTL ? 'rtl' : 'ltr'
        }`}
      >
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
