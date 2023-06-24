import { useEffect, useState } from 'react';

const useMouse = () => {
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const mouseHandler = event => {
			const { x, y } = event;
			setCoordinates({ x, y });
		};

		document.addEventListener('mousemove', mouseHandler);

		const cleanup = () => {
			document.removeEventListener('mousemove', mouseHandler);
		};
		return cleanup;
	}, []);

	return coordinates;
};

export default useMouse;
