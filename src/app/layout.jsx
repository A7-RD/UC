import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://urbanocafe.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Urbano Cafe',
  description:
    'Urbano Cafe — Italian restaurant in Dallas. 5pm to midnight, seven days a week. 1410 N Fitzhugh Ave. Reservations and walk-ins welcome.',
  openGraph: {
    title: 'Urbano Cafe',
    description:
      'Urbano Cafe — Italian restaurant in Dallas. 5pm to midnight, seven days a week. 1410 N Fitzhugh Ave. Reservations and walk-ins welcome.',
    images: [{ url: '/assets/hero-bg.png', alt: 'Urbano Cafe' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urbano Cafe',
    description:
      'Urbano Cafe — Italian restaurant in Dallas. 5pm to midnight, seven days a week. 1410 N Fitzhugh Ave.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="site-root">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.typekit.net/fme3fbi.css" />
      </head>
      <body>
        <div className="site-bg-gradient" aria-hidden />
        {children}
      </body>
    </html>
  )
}
