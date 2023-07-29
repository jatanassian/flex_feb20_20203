"use strict";
const sayHello = (name, age) => {
    return `Hello ${name}`;
};
// const sayHello = function(name: string): string {
// 	return `Hello ${name}`;
// };
const returnValue = sayHello('John');
const myPromise = (arg) => {
    return new Promise(resolve => {
        resolve(arg);
    });
};
myPromise('hello').then(data => { });
const higherOrderFunc = (callback) => {
    callback('hello');
    return true;
};
