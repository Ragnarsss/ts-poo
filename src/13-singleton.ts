export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

// const service1 = new MyService(); Da error
const myService = MyService.create('service');
const myService1 = MyService.create('service 1');
console.log(myService.getName());
console.log(myService1.getName());
console.log(myService === myService1);
