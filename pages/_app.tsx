import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Scroll on route change
    const handleRouteChangeStart = () => {
      scrollToTop();
    };

    const handleRouteChangeComplete = () => {
      // Extra scroll after route completes
      requestAnimationFrame(() => {
        scrollToTop();
      });
      setTimeout(() => {
        scrollToTop();
      }, 100);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  useEffect(() => {
    // Extra scroll to top on mount
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTop();
    requestAnimationFrame(scrollToTop);
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 200);
  }, []);

  return <Component {...pageProps} />;
}
