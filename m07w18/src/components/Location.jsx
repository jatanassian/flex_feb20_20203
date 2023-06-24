import React from 'react';
import useLocation from '../hooks/useLocation';

export const Location = () => {
	const { long, lat } = useLocation();

	return (
		<div>
			<h1>Latitude: {lat}</h1>
			<h1>Longitude: {long}</h1>
		</div>
	);
};
