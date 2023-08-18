class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}

//const math new MyMath()
//math.PI
console.log('MyMath.PI', MyMath.PI);
console.log(MyMath.max(-1, -3, -9));
