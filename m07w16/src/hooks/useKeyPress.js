import { useEffect, useState } from 'react';

const useKeyPress = key => {
	const [isKeyPressed, setIsKeyPressed] = useState(false);

	useEffect(() => {
		const keyDownHandler = event => {
			if (event.key === key) {
				setIsKeyPressed(true);
			}
		};

		const keyUpHandler = event => {
			if (event.key === key) {
				setIsKeyPressed(false);
			}
		};
		document.addEventListener('keydown', keyDownHandler);
		document.addEventListener('keyup', keyUpHandler);

		const cleanup = () => {
			document.removeEventListener('keydown', keyDownHandler);
			document.removeEventListener('keyup', keyUpHandler);
		};
		return cleanup;
	}, [key, isKeyPressed]);

	return isKeyPressed;
};

export default useKeyPress;
