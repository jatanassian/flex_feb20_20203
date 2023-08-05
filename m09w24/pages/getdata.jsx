import axios from 'axios';
import { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client';

export default function GetData({ posts }) {
	const [data, setData] = useState('');
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		axios
			.get('/api/userinfo')
			.then(res => {
				console.log(res.data);
				setData(res.data.name);
				setIsLoaded(true);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div>
			<h1>Get data page</h1>
			{isLoaded && data}
			{posts.map(post => {
				return <p key={post.id}>{post.content}</p>;
			})}
		</div>
	);
}

export async function getStaticProps() {
	const prisma = new PrismaClient();
	const posts = await prisma.post.findMany();

	console.log(posts);

	return {
		props: { posts },
	};
}
