import "./styles/globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className='theme-light'>{children}</body>
    </html>
  )
}
