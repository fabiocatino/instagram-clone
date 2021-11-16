import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
} from '@firebase/firestore';
import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { db } from '../../firebase';

const Post = ({ id, username, image, profileImg, caption, timestamp }) => {
	const {
		data: {
			user: { username: usernameSession, uid },
		},
	} = useSession();

	const [comment, setComment] = useState('');
	const [comments, setComments] = useState([]);
	const [commentLikes, setCommentLikes] = useState([]);
	const [likes, setLikes] = useState([]);
	const [isLiked, setIsLiked] = useState(false);
	const [hasLiked, setHasLiked] = useState(false);

	useEffect(
		() =>
			onSnapshot(
				query(
					collection(db, 'posts', id, 'comments'),
					orderBy('timestamp', 'desc')
				),
				(snapshot) => {
					setComments(snapshot.docs);
				}
			),
		[id]
	);

	const submitHandler = async (e) => {
		e.preventDefault();

		const commentToSend = comment;
		setComment('');

		await addDoc(collection(db, 'posts', id, 'comments'), {
			comment: commentToSend,
			username,
			image,
			timestamp: serverTimestamp(),
		});
	};

	//LIKES SECTION

	//LIKE POST LOGI

	useEffect(
		() =>
			onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
				setLikes(snapshot.docs)
			),
		[id]
	);

	useEffect(
		() =>
			onSnapshot(
				collection(db, 'posts', id, 'comments', uid, 'likes'),
				(snapshot) => setCommentLikes(snapshot.docs)
			),
		[uid]
	);

	const likePostHandler = async () => {
		if (hasLiked) {
			await deleteDoc(doc(db, 'posts', id, 'likes', uid));
		} else {
			await setDoc(doc(db, 'posts', id, 'likes', uid), {
				usernameSession,
			});
		}
	};

	useEffect(
		() => setHasLiked(likes.findIndex((like) => like.id === uid) !== -1),
		[likes, uid]
	);

	//LIKE COMMENT LOGIC

	const likeCommentHandler = async (commentId) => {
		if (isLiked) {
			await deleteDoc(doc(db, 'posts', id, 'comments', uid, 'likes', uid));
		} else {
			await setDoc(doc(db, 'posts', id, 'comments', uid, 'likes', uid), {
				usernameSession,
				timestamp: serverTimestamp(),
			});

			onSnapshot(
				query(collection(db, 'posts', id, 'comments', uid, 'likes')),
				(snapshot) => {
					setCommentLikes(snapshot.docs);
				}
			);
		}
	};

	useEffect(
		() => setIsLiked(commentLikes.findIndex((like) => like.id === uid) !== -1),
		[commentLikes, uid]
	);

	return (
		<div className="border">
			<div className="flex items-center  bg-white p-2 rounded-sm">
				<img
					src={profileImg}
					alt={username}
					className="h-12 w-12 rounded-full object-contain border p-1 mr-3"
				/>
				<p className="flex-1 font-semibold text-xs">{username}</p>
				<DotsHorizontalIcon className="h-5 right-2 cursor-pointer" />
			</div>
			<img src={image} alt={username} className="object-contain w-full" />

			{/* BUTTONS */}

			<div className="flex justify-between px-4 pt-4">
				<div className="space-x-4">
					{hasLiked ? (
						<HeartIconSolid
							onClick={likePostHandler}
							className="btn text-red-500"
						/>
					) : (
						<HeartIcon onClick={likePostHandler} className="btn " />
					)}
					<ChatIcon className="btn" />
					<PaperAirplaneIcon className="btn rotate-45" />
				</div>
				<BookmarkIcon className="btn" />
			</div>

			{/* CAPTION */}

			<div className="px-4 py-4">
				<div className=" space-y-2">
					{likes && (
						<p className="text-sm font-semibold">
							{likes.length} {likes.length === 1 ? 'like' : 'likes'}
						</p>
					)}
					<p className="truncate text-sm">
						<span className="font-semibold "> {username}</span> {caption}
					</p>

					{comments.map((comment) => (
						<div key={comment.id} className="flex justify-between space-x-2">
							<div className="flex gap-2">
								<p className="font-semibold text-sm">
									{comment.data().username}
								</p>
								<p className="text-sm">{comment.data().comment}</p>
							</div>
							{isLiked ? (
								<HeartIconSolid
									onClick={() => likeCommentHandler(comment.id)}
									className="btn h-3 text-red-500"
								/>
							) : (
								<HeartIcon
									onClick={() => likeCommentHandler(comment.id)}
									className="btn h-3 "
								/>
							)}
						</div>
					))}
				</div>
				<div className="mt-2 text-[10px] uppercase text-gray-500">
					<Moment fromNow date={timestamp?.toDate()} />
				</div>
			</div>

			{/* INPUT BOX */}

			<form className="form pt-2 flex items-center p-2 border-t-2 border-gray-100">
				<EmojiHappyIcon className="h-8 color" />
				<input
					onChange={(e) => setComment(e.target.value)}
					value={comment}
					type="text"
					className="border-none flex-1 focus:ring-0 outline-none"
					placeholder="Add a comment..."
				/>
				<button
					onClick={submitHandler}
					type="submit"
					className="text-blue-400 font-semibold"
				>
					Post
				</button>
			</form>
		</div>
	);
};

export default Post;
