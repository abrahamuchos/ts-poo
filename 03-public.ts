export class MyDate{
  public year: number;
  public month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string{
    return `${this.day}/${this.month}/${this.year}`;
  }

}

const myDate = new MyDate(2024, 8, 29);
console.log(`myDate: ${myDate.printFormat()}`)
console.log(`Day: ${myDate.day}`); // Day: 29
console.log(`Month: ${myDate.month}`); // Month: 8
console.log(`Year: ${myDate.year}`); // Year: 2024

