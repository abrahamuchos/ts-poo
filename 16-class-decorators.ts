function loggable (target :any){
  console.log('Decorator class >> ' + target.name)
}

@loggable
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("Hello, world!");
const greet = greeter.greet();
console.log(greet)
