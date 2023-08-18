//Manera implicita de definir el constructor, los parametros y sus modificadores de acceso
class User {
  constructor(
    private _name: string,
    private nickname: string,
    private role: string = 'user'
  ) {}

  public sayMyName(): string {
    return `my name is ${this.name}`;
  }

  #awesomeName() {
    console.log(`${this.name} is an awesome name!`);
  }

  public get name() {
    return this._name;
  }
}

const user = new User('cristian', 'ragnar');
// user.name = 'carl'; LANZA ERROR
// user.awesomeName(); LANZA ERROR
console.log(user.name);

export { User };
