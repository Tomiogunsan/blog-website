import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      {/* H */}
      <body>{children}</body>
    </html>
  )
}
