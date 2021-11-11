import Head from 'next/head';
import Header from '../src/components/Layout/Header';

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Instagram clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
		</div>
	);
}
