import { useState } from 'react';
import style from '../styles/Hello.module.css';

export default function Hello() {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};

	const decrement = () => {
		setCounter(counter - 1);
	};

	return (
		<div>
			<h1 className={style.title}>Hello</h1>
			<p className={style.counter}>Counter: {counter}</p>
			<div className={style.btnContainer}>
				<button className={style.btn} onClick={increment}>
					Increment
				</button>
				<button className={style.btn} onClick={decrement}>
					Decrement
				</button>
			</div>
		</div>
	);
}
