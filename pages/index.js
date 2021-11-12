import Feed from '../src/components/Feed';
import Header from '../src/components/Layout/Header';

export default function Home() {
	return (
		<div className="h-screen overflow-y-scroll scrollbar-hide">
			<Header />
			<div className="">
				<Feed />
			</div>
		</div>
	);
}
