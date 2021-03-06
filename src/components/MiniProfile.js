import React from 'react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const MiniProfile = () => {
	const { data: session, status } = useSession();
	const {
		user: { name, username, image },
	} = session;

	return (
		<div className="mb-2.5 flex items-center">
			<img
				src={image}
				alt="propic"
				className="h-14 w-14 border rounded-full cursor-pointer object-contain"
			/>
			<div className="flex-1 mx-4">
				<p className="text-sm font-bold">{username}</p>
				<p className="text-sm text-gray-400">{name}</p>
			</div>

			<button
				onClick={signOut}
				className="text-blue-400 text-xs font-semibold justify-end"
			>
				Sign out
			</button>
		</div>
	);
};

export default MiniProfile;
