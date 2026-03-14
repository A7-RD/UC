import './globals.css'

export const metadata = {
  title: 'Urbano Cafe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.typekit.net/fme3fbi.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
