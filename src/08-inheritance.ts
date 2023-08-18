export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving');
  }

  greeting() {
    return `Hello im ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(public owner: string, name: string) {
    super(name);
  }
  public ladra(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('ñadra');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());
const pastora = new Dog('cristian', 'pastora');
console.log(pastora.greeting());
pastora.ladra(10);
console.log(pastora.owner);
