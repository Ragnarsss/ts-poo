//Manera implicita de definir el constructor, los parametros y sus modificadores de acceso
class User {
  constructor(
    private _name: string,
    private _nickname: string,
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

  public set nickname(v: string) {
    this._nickname = v;
  }

  public get nickname(): string {
    return this._nickname;
  }
}

const user = new User('cristian', 'ragnar');
// user.name = 'carl'; LANZA ERROR
// user.awesomeName(); LANZA ERROR
console.log(user.name);
user.nickname = 'TUSI';
console.log(user.nickname);

export { User };
