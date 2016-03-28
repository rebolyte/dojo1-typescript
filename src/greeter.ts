interface IPerson {
	firstname: string;
	lastname: string;
}

export default function greeter(person: IPerson) {
	return `Hello, ${person.firstname} ${person.lastname}`;
}
