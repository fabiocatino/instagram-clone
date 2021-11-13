import React, { useEffect, useState } from 'react';
import faker from 'faker';

const Suggestions = () => {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const suggestions = [...Array(5)].map((item, index) => ({
			...faker.helpers.contextualCard(),
			id: index,
		}));

		setSuggestions(suggestions);
	}, []);

	return (
		<div className="space-y-4">
			<div className="flex justify-between text-sm mb-5">
				<p className="text-sm text-gray-500 font-semibold">
					Suggestions for you
				</p>
				<button className="text-xs font-semibold">See all</button>
			</div>

			{suggestions.map((user) => (
				<div
					key={user.id}
					className="flex items-center justify-between gap-2 mt-3"
				>
					<img
						className="h-8 w-8 object-contain rounded-full border p-[2px]"
						src={user.avatar}
						alt={user.name}
					/>
                    <div className='flex-1 ml-0.5'>
					<p className="text-sm font-semibold">{user.name}</p>
                    <p  className="text-xs text-gray-400 truncate">Works at {user.company.name}</p>
                    </div>

					<button className="text-xs font-semibold text-blue-500">
						Follow
					</button>
				</div>
			))}
		</div>
	);
};

export default Suggestions;
