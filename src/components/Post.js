import {
	DotsHorizontalIcon,
	HeartIcon,
	ChatIcon,
	PaperAirplaneIcon,
	BookmarkIcon,
	EmojiHappyIcon,
} from '@heroicons/react/outline';

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

import React from 'react';

const Post = ({ id, username, img, userImg, caption }) => {
	return (
		<div className="border">
			<div className="flex items-center  bg-white p-2 rounded-sm">
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

			<div className="flex justify-between px-4 pt-4">
				<div className="space-x-4">
					<HeartIcon className="btn" />
					<ChatIcon className="btn" />
					<PaperAirplaneIcon className="btn rotate-45" />
				</div>
				<BookmarkIcon className="btn" />
			</div>

			{/* CAPTION */}

			<div className="px-4 py-4">
				<div className=" space-y-2">
					<p className="text-sm font-semibold">5,000 likes</p>
					<p className="truncate">
						<span className="font-semibold"> {username}</span> {caption}
					</p>
				</div>
			</div>

			{/* INPUT BOX */}

			<form className="form pt-2 flex items-center p-2 border-t-2 border-gray-100">
				<EmojiHappyIcon className="h-8 color" />
				<input
					type="text"
					className="border-none flex-1 focus:ring-0 outline-none"
					placeholder="Add a comment..."
				/>
				<button className="text-blue-400 font-semibold">Post</button>
			</form>
		</div>
	);
};

export default Post;
