export class Animal {

  constructor(public name: string) {

  }

  move(): void {
    console.log('Moving');
  }

  greet(): string {
    return `Helllo, I'm ${this.name}`
  }
}

export class Dog extends Animal {

  constructor(name: string, public owner:string) {
    super(name);
  }

  woof(times: number): void {
    for(let i = 0; i < times; i++) {
      console.log('woof');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move(); // Moving
console.log(fifi.greet()); // Hello, I'm fifi

const chase = new Dog('chase', 'Abraham');
chase.move(); // Moving
console.log(chase.greet()); // Hello, I'm chase
chase.woof(2); // woof woof
console.log(`Owner is: ${chase.owner}`); // Owner is: Abraham