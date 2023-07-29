interface PotentialUser {
	username: string;
	password: string;
}

const login = (user: PotentialUser): boolean => {
	return false;
};

const newUser = {
	username: 'Matt',
	password: '0000',
	age: 42,
};

login(newUser);
