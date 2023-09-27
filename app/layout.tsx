import './globals.css' // Tailwindcss styles import

import Header from '../components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
	<body className='bg-gradient-to-b from-blue-600 from-5% via-slate-950 via-40% to-slate-950 to-90% h-screen overflow-x-hidden'>
	    <Header />
	    <main>
		{children}
	    </main>
	</body>
    </html>
  )
}
