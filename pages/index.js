import Feed from '../src/components/Feed';
import Header from '../src/components/Layout/Header';
import { getSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
	
	return (
		<>
			<div className="h-screen overflow-y-scroll scrollbar-hide">
				<Header />
				<div className="">
					<Feed />
				</div>
			</div>
		</>
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
