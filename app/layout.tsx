import { GoogleAnalytics } from '@next/third-parties/google';
import "./styles/globals.scss";
import { Inter, Tenor_Sans } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], weight: ['200', '600', '900'], variable: '--font-inter' });
const tenor = Tenor_Sans({ subsets: ['latin'], weight: ['400'], variable: '--font-tenor' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className={`${inter.variable} ${tenor.variable} theme-light`}>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
    </html>
  )
}
