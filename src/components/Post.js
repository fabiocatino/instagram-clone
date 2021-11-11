import {
	DotsHorizontalIcon,
	HeartIcon,
	ChatIcon,
	PaperAirplaneIcon,
	BookmarkIcon,
} from '@heroicons/react/outline';

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

import React from 'react';

const Post = ({ id, username, img, userImg, caption }) => {
	return (
		<div>
			<div className="flex items-center  border bg-white p-2 rounded-sm">
				<img
					src={img}
					alt={username}
					className="h-12 w-12 rounded-full object-contain border p-1 mr-3"
				/>
				<p className="flex-1 font-semibold text-xs">{username}</p>
				<DotsHorizontalIcon className="h-5 right-2 cursor-pointer" />
			</div>
			<img src={img} alt={username} className="object- w-full" />

			{/* BUTTONS */}

			<div className='flex justify-between px-4 pt-4'>
				<div className="space-x-4">
					<HeartIcon className="btn" />
					<ChatIcon className="btn" />
					<PaperAirplaneIcon className="btn rotate-45" />
				</div>
				<BookmarkIcon className="btn" />
			</div>
		</div>
	);
};

export default Post;
