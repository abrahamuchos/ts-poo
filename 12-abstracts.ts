export abstract class Animal {

  constructor(public name: string) {

  }

  move(): void {
    console.log('Moving');
  }

  protected doSomething(): void {
    console.log('doing something');
  }
}

export class Dog extends Animal {

  constructor(name: string) {
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

const chase = new Dog('chase');
chase.woof(1); //woof chase doing something
// chase.move(); // moving as a dog Moving


