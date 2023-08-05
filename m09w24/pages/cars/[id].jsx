import { useRouter } from 'next/router';

export default function CarsList() {
	const router = useRouter();
	console.log(router);

	const handleBack = () => {
		router.back();
	};

	const handleReplace = () => {
		router.replace('/');
	};

	return (
		<div>
			<h1>This is the cars list: {router.query.id}</h1>
			<button onClick={handleBack}>Go back</button>
			<button onClick={handleReplace}>Replace</button>
		</div>
	);
}
