const sayHello = (name: string, age?: number): string => {
	return `Hello ${name}`;
};

// const sayHello = function(name: string): string {
// 	return `Hello ${name}`;
// };

const returnValue = sayHello('John');

const myPromise = (arg: string): Promise<string> => {
	return new Promise(resolve => {
		resolve(arg);
	});
};

myPromise('hello').then(data => {});

const higherOrderFunc = (callback: (name: string) => void): boolean => {
	callback('hello');
	return true;
};
