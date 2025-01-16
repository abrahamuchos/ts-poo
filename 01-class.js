"use strict";

var date = new Date();
date.getMonth();
date.getDay();

var date2 = new Date(1993, 1, 12);
date2.getMonth();
date2.getDay();
console.log('Date 1:', date);
console.log('Date 2:', date2);
var MyDate = /** @class */ (function () {
    function MyDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    return MyDate;
}());
var myDate = new MyDate(2024, 8, 29);
console.log('MyDate:', myDate);
