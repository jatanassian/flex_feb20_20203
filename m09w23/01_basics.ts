let username: string | number | boolean = 'Julien';

username = 'Bob';
username = 500;
username = true;

const numbers: (number | string)[] = [];
numbers.push(42);
const popOutput = numbers.pop();
numbers.push('hello');
