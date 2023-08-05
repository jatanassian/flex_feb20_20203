import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Fetch(props) {
	console.log;
	const [url, setUrl] = useState('');
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div>
			<h1>Fetch page</h1>
			<p>Hello</p>
			{isLoaded && <img src={url} />}
		</div>
	);
}

export const getStaticProps = async () => {
	const res = await axios.get('https://dog.ceo/api/breeds/image/random');
	return {
		props: {
			data: res.data.message,
		},
	};
};
