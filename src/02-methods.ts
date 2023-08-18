class User {
  name: string;
  nickname: string;
  role: string;
  constructor(name: string, nickname: string) {
    this.name = name;
    this.nickname = nickname;
    this.role = '';
  }

  sayMyName(): string {
    return `my name is ${this.name}`;
  }
}

export { User };
