export class Hello {

	constructor(){
		this.firstName = 'Tom';
		this.lastName = 'Jones';
	}

	sayHello() {
		alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
	}
}