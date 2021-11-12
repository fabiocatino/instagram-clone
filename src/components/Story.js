import React from 'react';

const Story = ({ img, username }) => {
	return (
		<div className="space-x-3 flex flex-col items-center">
			<img
				src={img}
				alt={username}
				className="h-16 w-16 rounded-full p-[1.5px] border-red-500 border-2 object-contained cursor-pointer
                hover:scale-110 transition transform duration-200 ease-out"
			/>
			<p className="text-xs w-14 truncate">{username}</p>
		</div>
	);
};

export default Story;
