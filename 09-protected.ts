export class Animal {

  constructor(protected name: string) {

  }

  move(): void {
    console.log('Moving');
  }

  greet(): string {
    return `Helllo, I'm ${this.name}`
  }

  protected doSomething(): void {
    console.log('doing something');
  }
}

export class Dog extends Animal {

  constructor(name: string, public owner:string) {
    super(name);
  }

  woof(times: number): void {
    for(let i = 0; i < times; i++) {
      console.log(`woof ${this.name}`);
    }
    this.doSomething();
  }

  move(){
    console.log('moving as a dog');
    super.move();
  }
}

const chase = new Dog('chase', 'Abraham');
// chase.name = 'otro nombre';
chase.woof(1); // woof otro nombre doing something
chase.move(); // moving as a dog Moving
