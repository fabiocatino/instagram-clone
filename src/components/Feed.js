import React from 'react';
import Posts from './Posts';
import Stories from './Stories';

const Feed = () => {
	return (
		<main
			className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3
        xl:max-w-6xl mx-auto"
		>
			{/* Section 1 */}
			<section className="col-span-2 space-y-14">
				<Stories />
				<Posts />
			</section>

			{/* Section 2 */}
			<section></section>

			{/* Mini profile */}
			{/* Suggestions */}
		</main>
	);
};

export default Feed;
