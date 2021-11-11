import React, { useEffect, useState } from 'react';
import faker from 'faker';
import Story from './Story';

const Stories = () => {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const suggestions = [...Array(20)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));

		setSuggestions(suggestions);
	}, []);

	return (
		<div>
			<div
				className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-black space-x-2 p-6 mt-8 
            bg-white border-gray-20 border  rounded-sm"
			>
				{suggestions.map((profile) => (
					<Story
						key={profile.id}
						img={profile.avatar}
						username={profile.username}
					/>
				))}
			</div>
		</div>
	);
};

export default Stories;
