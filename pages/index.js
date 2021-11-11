import Head from 'next/head';
import Feed from '../src/components/Feed';
import Header from '../src/components/Layout/Header';

export default function Home() {
	return (
		<div className="h-screen overflow-y-scroll scrollbar-hide">
			<Head>
				<title>Instagram clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<div className=''>
				<Feed />
			</div>
		</div>
	);
}
