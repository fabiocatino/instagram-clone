import React from 'react';
import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';

const Feed = () => {
	return (
		<main
			className="grid grid-cols-1 md:grid-cols-1 md:max-w-3xl xl:grid-cols-3
        xl:max-w-[935px] mx-auto mt-8"
		>
			{/* Section 1 */}
			<section className="col-span-2 space-y-8 max-w-[614px] md:mr-7">
				<Stories />
				<Posts />
			</section>

			{/* Section 2 */}

			<section className="hidden lg:inline-grid md:col-span-1 max-w-[293px]">
				<div className="fixed w-[293px]">
					<MiniProfile />
					<Suggestions />
				</div>
			</section>
		</main>
	);
};

export default Feed;
