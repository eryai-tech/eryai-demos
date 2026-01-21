import './globals.css'

export const metadata = {
  title: 'EryAI Demos - AI Customer Service',
  description: 'Se hur EryAI fungerar för restauranger och bilverkstäder',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}
