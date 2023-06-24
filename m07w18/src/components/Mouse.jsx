import React from 'react';
import useMouse from '../hooks/useMouse';

export const Mouse = () => {
	const coordinates = useMouse();

	const styling = {
		fontSize: '100px', // font-size: 100px;
		padding: '10px',
		border: `dotted 10px rgb(${coordinates.x / 4}, ${coordinates.y / 4}, 0)`,
		backgroundColor: `rgb(0, ${coordinates.x / 4}, 0, ${coordinates.y / 4})`,
		color: `rgb(${coordinates.x / 4}, 0, ${coordinates.y / 4})`,
	};

	return (
		<div style={styling}>
			<h1>X: {coordinates.x}</h1>
			<h1>Y: {coordinates.y}</h1>
		</div>
	);
};
