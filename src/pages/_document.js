import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/maifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content = "#f69435"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
