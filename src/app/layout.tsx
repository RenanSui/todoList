
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ReactNode } from 'react'
import '../styles/globals.css'

export const metadata = {
	title: 'T O D O',
	description: 'Simple and Elegant Pokédex App',
	icons: {
		icon: 'images/favicon.ico',
		shortcut: 'images/favicon.ico',
		apple: 'images/apple-touch-icon.png',
		other: {
			rel: 'apple-touch-icon',
			url: 'images/apple-touch-icon.png',
		},
	},
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="font-lato">
					{children}
					<TailwindIndicator />
			</body>
		</html>
	)
}
