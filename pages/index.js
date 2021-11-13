import { getSession } from 'next-auth/react';
import Feed from '../src/components/Feed';
import Header from '../src/components/Layout/Header';
import Modal from '../src/components/Modal';

export default function Home() {
	return (
		<div className="h-screen overflow-y-scroll scrollbar-hide">
			<Header />
			<Feed />
			<Modal />
		</div>
	);
}

export async function getServerSideProps(req) {
	const session = await getSession(req);

	if (!session) {
		return {
			redirect: { destination: '/auth/signin', permanent: false },
		};
	}

	return {
		props: {
			session,
		},
	};
}
