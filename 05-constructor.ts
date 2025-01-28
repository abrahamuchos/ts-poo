export class MyDate {

  constructor(
    public year: number = 1996,
    public month: number = 8,
    public day: number = 29
  ) {

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

}

const myDate = new MyDate();
console.log(`myDate: ${myDate.printFormat()}`) // myDate: 29/8/1996
const myDate2 = new MyDate(1994, 8, 5);
console.log(`myDate: ${myDate2.printFormat()}`) // myDate: 5/8/1994

