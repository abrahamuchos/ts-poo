export class MyDate {
  year: number;
  month: number;
  private _day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this._day = day;
  }

  get day(): number {
    return this._day;
  }

  /**
   * Determina si el año es bisiesto
   */
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

}

const myDate = new MyDate(2024, 8, 29);
const isLeap = myDate.isLeapYear;
console.log(isLeap); // True

const myDay = myDate.day;
console.log(myDay);
// myDate.day = 30 // Error No puedo hacer modificaciones

const myDate2 = new MyDate(2001, 8, 29);
const isLeap2 = myDate2.isLeapYear;
console.log(isLeap2); // False


