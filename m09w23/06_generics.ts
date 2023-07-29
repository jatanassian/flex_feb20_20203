interface Container<T, S> {
	name: string;
	content: T;
	array?: S[];
}

const stringContrainer: Container<string, boolean> = {
	name: 'string container',
	content: 'hello',
};

const numberContainer: Container<number, void> = {
	name: 'number container',
	content: 42,
};
