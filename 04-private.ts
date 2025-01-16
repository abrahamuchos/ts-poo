export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  getDay(): number {
    return this.day;
  }

}

const myDate = new MyDate(2024, 8, 29);
console.log(`myDate: ${myDate.printFormat()}`) // myDate: 29/8/2024
// console.log(`Day: ${myDate.day}`); // Day: 29
console.log(`Day: ${myDate.getDay()}`); // Day: 29
console.log(`Month: ${myDate.month}`); // Month: 8
console.log(`Year: ${myDate.year}`); // Year: 2024

// myDate.addPadding(3); // Error Private method
