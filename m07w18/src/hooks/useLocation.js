import { useEffect, useState } from 'react';

const useLocation = () => {
	const [coordinates, setCoordinates] = useState({ lat: 0, long: 0 });

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(data => {
			const { coords } = data;

			setCoordinates({
				lat: coords.latitude,
				long: coords.longitude,
			});
		});
	}, []);

	return { lat: coordinates.lat, long: coordinates.long };
};

export default useLocation;
