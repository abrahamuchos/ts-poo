// function getValue(value: number|string){
//   return value;
// }
//
// const value = getValue(12);
//
// if( typeof value === 'number'){
//   console.log(value.toFixed());
// }else{
//   console.log(value.trim());
// }

function getValue<T>(value: T){
  return value;
}

const value = getValue(12);
console.log(value.toFixed());

const value2 = getValue<number>(12);
console.log(value2.toFixed());

const value3 = getValue<string>('12');
console.log(value3.trim());



