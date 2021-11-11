import React from 'react';
import Post from './Post';

const posts = [
	{
		id: '1',
		username: 'fabioc',
		userImg: 'https://links.papareact.com/3ke',
		img: 'https://links.papareact.com/3ke',
		caption: 'lorem ipsum dolor sit amet, consectetur adip',
	},
	{
		id: '2',
		username: 'fabioc',
		userImg: 'https://links.papareact.com/3ke',
		img: 'https://links.papareact.com/3ke',
		caption: 'lorem ipsum dolor sit amet, consectetur adip',
	},
	{
		id: '3',
		username: 'fabioc',
		userImg: 'https://links.papareact.com/3ke',
		img: 'https://links.papareact.com/3ke',
		caption: 'lorem ipsum dolor sit amet, consectetur adip',
	},
];

const Posts = () => {
	return (
		<div className='space-y-8'>
			{posts.map((post) => (
				<Post key={post.id} {...post} />
			))}
		</div>
	);
};

export default Posts;
