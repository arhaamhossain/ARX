import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning style={{ scrollBehavior: 'auto' }}>
      <Head>
        <link rel="icon" href="/ARX/arx.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if ('scrollRestoration' in window.history) {
                  window.history.scrollRestoration = 'manual';
                }
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              })();
            `,
          }}
        />
      </Head>
      <body style={{ scrollBehavior: 'auto' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
