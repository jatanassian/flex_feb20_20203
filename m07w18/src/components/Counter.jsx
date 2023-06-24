import React from 'react';
import useCounter from '../hooks/useCounter';

export const Counter = () => {
	const [count, increment, decrement, reset] = useCounter();
	const [count2, increment2, decrement2, reset2] = useCounter();

	return (
		<div>
			<div>
				<h1>Count: {count}</h1>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				<button onClick={reset}>Reset</button>
			</div>
			<div>
				<h1>Count: {count2}</h1>
				<button onClick={increment2}>Increment</button>
				<button onClick={decrement2}>Decrement</button>
				<button onClick={reset2}>Reset</button>
			</div>
		</div>
	);
};
