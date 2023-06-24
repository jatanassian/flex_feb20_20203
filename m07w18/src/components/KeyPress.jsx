import React from 'react';
import useKeyPress from '../hooks/useKeyPress';

export const KeyPress = () => {
	const isKeyAPressed = useKeyPress('a');
	const isKeySPressed = useKeyPress('s');
	const isKeyDPressed = useKeyPress('d');
	return (
		<div>
			<h1>Hello</h1>
			{isKeyAPressed && <h1>🐱</h1>}
			{isKeySPressed && <h1>🐶</h1>}
			{isKeyDPressed && <h1>🐱</h1>}
		</div>
	);
};
