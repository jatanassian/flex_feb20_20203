import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (url, key) => {
	const [count, setCount] = useState(0);
	const [data, setData] = useState('');

	useEffect(() => {
		axios
			.get(url)
			.then(res => {
				setData(res.data[key]);
			})
			.catch(error => console.log('error ->', error));
	}, [url, key, count]);

	const increment = () => {
		setCount(count + 1);
	};

	return [count, data, increment];
};

export default useAxios;
