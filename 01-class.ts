// Instaciar la clase Date nos permite acceder a sus métodos
const date = new Date();
date.getMonth();
date.getDay();

// También podemos instanciar la clase Date con parámetros (constructor)
const date2 = new Date(1993, 1, 12);
date2.getMonth();
date2.getDay();

console.log('Date 1:', date);
console.log('Date 2:', date2);

class MyDate{
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

}

const myDate = new MyDate(2024, 8, 29);
console.log('MyDate:', myDate);


