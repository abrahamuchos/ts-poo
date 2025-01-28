export class MyDate {
  year: number;
  private _month: number;
  private _day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this._month = month;
    this._day = day;
  }

  get month(): number {
    return this._month;
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('Month out of range');
    }
  }

}

const myDate = new MyDate(2024, 8, 29);
console.log("My month:" + myDate.month)// My month:8
myDate.month = 10;
console.log("My month was updated to:" + myDate.month)// My month was updated to:10


