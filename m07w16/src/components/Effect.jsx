import React from 'react';
import useAxios from '../hooks/useAxios';

export const Effect = () => {
	// CAT
	const [count, data, increment] = useAxios(
		'https://catfact.ninja/fact',
		'fact'
	);

	// DOG
	const [count2, data2, increment2] = useAxios(
		'https://dog.ceo/api/breeds/image/random',
		'message'
	);

	return (
		<div>
			<div>
				<h1>Fact #{count}:</h1>
				<button onClick={increment}>Increment</button>
				<p>{data}</p>
			</div>
			<div>
				<h1>Fact #{count2}:</h1>
				<button onClick={increment2}>Increment</button>
				<br />
				<img src={data2} alt='Dog' />
			</div>
		</div>
	);
};
