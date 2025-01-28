// Math Object
// No necesita instanciarse para ser usado
// Math es un objeto estático
console.log(Math.PI);
console.log(Math.max(1,11,3,6,10,29));

class MyMath{
  static PI = 3.1416;

  static max(...numbers: number[]){
    return numbers.reduce((max, current) => (current > max ? current : max));
  }
}

console.log('My own Math:' + MyMath.PI);
console.log('My own Math:' + MyMath.max(1,11,3,6,10,29));