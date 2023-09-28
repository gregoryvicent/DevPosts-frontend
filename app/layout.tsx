import './globals.css' // Tailwindcss styles import

import Header from '../components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
	<body className="bg-zinc-950 h-screen overflow-x-hidden relative">
	    <Header />
	    <main>
		{children}
	    </main>
	</body>
    </html>
  )
}
