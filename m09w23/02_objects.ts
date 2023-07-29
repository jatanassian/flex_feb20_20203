interface User {
	id?: number;
	username: string;
	password: string;
}

const myUser: User = {
	username: 'Bob',
	password: '1234',
};

const users: User[] = [];
users.push(myUser);

const user2: User = {
	id: 1,
	username: 'Jack',
	password: 'qwerty',
};
