import "./styles/globals.css";
import Head from 'next/head';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Mini Thread</title>
        <meta name="description" content="app to post your thoughts" />
        <link rel="icon" href="/images/logos/minithread-favicon.webp" />
      </Head>
      <body className='theme-light'>{children}</body>
    </html>
  )
}
