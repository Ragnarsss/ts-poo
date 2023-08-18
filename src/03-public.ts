class User {
  public name: string;
  public nickname: string;
  public role: string;
  constructor(name: string, nickname: string) {
    this.name = name;
    this.nickname = nickname;
    this.role = '';
  }

  public sayMyName(): string {
    return `my name is ${this.name}`;
  }
}

const user = new User('cristian', 'ragnar');
user.name = 'carl';

export { User };
