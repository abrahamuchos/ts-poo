export class MyDate{
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string{
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years'){
    if(type === 'days'){
      this.day += amount;
    }
    if(type === 'months'){
      this.month += amount;
    }
    if(type === 'years'){
      this.year += amount;
    }
  }
}

const myDate = new MyDate(2024, 8, 29);
console.log(myDate.printFormat()); // 29/8/2024

myDate.add(2, 'days');
console.log(myDate.printFormat()); // 31/8/2024

