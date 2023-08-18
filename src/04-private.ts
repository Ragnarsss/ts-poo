class User {
  private name: string;
  private nickname: string;
  private role: string;
  constructor(name: string, nickname: string) {
    this.name = name;
    this.nickname = nickname;
    this.role = '';
  }

  public sayMyName(): string {
    return `my name is ${this.name}`;
  }

  #awesomeName() {
    console.log(`${this.name} is an awesome name!`);
  }
}

const user = new User('cristian', 'ragnar');
// user.name = 'carl'; LANZA ERROR
// user.awesomeName(); LANZA ERROR
export { User };
