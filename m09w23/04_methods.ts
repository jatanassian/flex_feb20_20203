interface Dog {
	name: string;
	age: number;
	feed: (foodType: string) => boolean;
}

const myDog: Dog = {
	name: 'Kimi',
	age: 2,
	feed: (food: string) => {
		return true;
	},
};

myDog.feed('kibbles');
