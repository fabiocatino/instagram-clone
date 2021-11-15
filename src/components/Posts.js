import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import Spinner from './Layout/Spinner';
import Post from './Post';

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(
		() =>
			onSnapshot(
				query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
				(snapshot) => {
					setPosts(snapshot.docs);
					setIsLoading(false);
				}
			),
		[db]
	);

	return (
		<div className="space-y-8 ">
			{isLoading && <Spinner />}
			{posts.length === 0 && !isLoading ? (
				<h1 className="text-2xl ">No posts yet.</h1>
			) : (
				posts.map((post) => (
					<Post key={post.id} id={post.id} {...post.data()} />
				))
			)}
		</div>
	);
};

export default Posts;
