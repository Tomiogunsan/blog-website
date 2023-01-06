import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <Head
      {/* Banner */}
      <body>{children}</body>
    </html>
  )
}
