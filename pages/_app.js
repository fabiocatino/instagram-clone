import '../styles/globals.css';
import NProgress from 'nprogress';
import '../public/nprogress.css';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	const router = useRouter();

	useEffect(() => {
		router.events.on('routeChangeStart', () => NProgress.start());
		router.events.on('routeChangeComplete', () => NProgress.done());
	}, [router.events]);

	return (
		<SessionProvider session={session}>
			<Head>
				<title>Instagram clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</SessionProvider>
	);
}

export default MyApp;
