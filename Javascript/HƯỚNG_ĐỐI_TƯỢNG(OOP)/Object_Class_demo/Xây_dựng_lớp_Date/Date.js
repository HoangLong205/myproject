// Date {day(getDay; setDay); month(getMonth; setMonth); year(getYear; setYear)}

let MyDate = function(day, month, year) {
    this.day = day;

    this.month = month;

    this.year = year;

    this.getDay = function() {
        return this.day;
    }

    this.getMonth = function() {
        return this.month;
    }

    this.getYear = function() {
        return this.year;
    }

    this.setDay = function(day) {
        this.day = day;
    }

    this.setMonth = function(month) {
        this.month = month;
    }

    this.setYear = function(year) {
        this.year = year;
    }
};

let date = new MyDate(16,4,2025)
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();


console.log(day + '/' + month + '/' + year);

date.setDay(17);
date.setMonth(5);
date.setYear(2026);

let day2 = date.getDay();
let month2 = date.getMonth();
let year2 = date.getYear();
console.log(day2 + '/' + month2 + '/' + year2)