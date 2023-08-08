const d = new Date();
console.log(d);

const d1 = new Date("2022-03-25");
console.log(d1);

//new Date(date string)
const d2 = new Date("October 13, 2014 11:13:00");
console.log(d2);

const d3 = new Date("2022-03-25");
console.log(d3);


//new Date(year,month)
const d4 = new Date(2018,11);
console.log(d4);

//new Date(year,month,day)
const d5 = new Date(2018,11,24);
console.log(d5);

//new Date(year,month,day,hour)
const d6 = new Date(2018,11,24,10);
console.log(d6);

//new Date(year,month,day,hour,minute)
const d7 = new Date(2018,11,24,10,33);
console.log(d7);

//new Date(year,month,day,hour,minute,second)
const d8 = new Date(2018,11,24,10,33,30);
console.log(d8);

//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
const d9 = new Date(2018);
console.log(d9);

//Specifying a day higher than max, will not result in an error but add the overflow to the next month:
const d10 = new Date(2018, 5, 35, 10, 33, 30);
console.log(d10);

//Previous Century -->One and two digit years will be interpreted as 19xx:
const d11 = new Date(99, 11, 24);
console.log(d11);

const d12 = new Date(9, 11, 24);
console.log(d12);

//new Date(milliseconds)
const d13 = new Date(100000000000);//01 January 1970 plus 100 000 000 000 milliseconds
console.log(d13);

const d14 = new Date(-100000000000);//January 01 1970 minus 100 000 000 000 milliseconds
console.log(d14);

const d15 = new Date(24 * 60 * 60 * 1000);//January 01 1970 plus 24 hours
// or
const d16 = new Date(86400000);//January 01 1970 plus 24 hours
console.log(d15);
console.log(d16);

//Displaying Dates
//(by default) output dates using the toString() method.
console.log("Displaying Date");
const d17 = new Date();
console.log(d17);

//toString() method.
const d18 = new Date();
console.log(d18.toString());


//toDateString() method.
const d19 = new Date();
console.log(d19.toDateString());


//toUTCString() method.
const d20 = new Date();
console.log(d20.toUTCString());


//toISOString() method.
const d21 = new Date();
console.log(d21.toISOString());

//ISO Date	"2015-03-25" (The International Standard)
//Short Date	"03/25/2015"
//Long Date	"Mar 25 2015" or "25 Mar 2015"
//The ISO format follows a strict standard in JavaScript.The other formats are not so well defined and might be browser specific.

//JavaScript ISO Dates

//Complete date
const d22 = new Date("2015-03-25");
console.log(d22);

//ISO Dates (Year and Month)
const d23 = new Date("2015-03");
console.log(d23);

//ISO Dates (Only Year)
const d24 = new Date("2015");
console.log(d24);

//ISO Dates (Date-Time)  (YYYY-MM-DDTHH:MM:SSZ):
const d25 = new Date("2015-03-25T12:00:00Z");
console.log(d25);

//If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:
const d26 = new Date("2015-03-25T12:00:00-06:30");
console.log(d26);

//JavaScript Short Dates.
const d27 = new Date("03/25/2015");
console.log(d27);


//WARNINGS !
//In some browsers, months or days with no leading zeroes may produce an error:

const d28 = new Date("2015-3-25");
console.log(d28);

//The behavior of "YYYY/MM/DD" is undefined.
//Some browsers will try to guess the format. Some will return NaN.

const d29 = new Date("2015/03/25");
console.log(d29);

//The behavior of  "DD-MM-YYYY" is also undefined.
//Some browsers will try to guess the format. Some will return NaN.

const d30 = new Date("25-03-2015");
console.log(d30);

//JavaScript Long Dates.
//Long dates are most often written with a "MMM DD YYYY" syntax like this:

const d31 = new Date("Mar 25 2015");
console.log(d31);
//Month and day can be in any order:

const d32 = new Date("25 Mar 2015");
console.log(d32);
//And, month can be written in full (January), or abbreviated (Jan):

const d33 = new Date("January 25 2015");
console.log(d33);

const d34 = new Date("Jan 25 2015");
console.log(d34);
//Commas are ignored. Names are case insensitive:

const d35 = new Date("JANUARY, 25, 2015");
console.log(d35);

//Date Input - Parsing Dates
// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
// Date.parse() returns the number of milliseconds between the date and January 1, 1970:

let msec1 = Date.parse("March 21, 2012");
console.log(msec1);
//You can then use the number of milliseconds to convert it to a date object:

let msec2 = Date.parse("March 21, 2012");
const d36 = new Date(msec2);
console.log(d36);

//JavaScript Get Date Methods
// getFullYear()	-->Get year as a four digit number (yyyy)
// getMonth()	-->Get month as a number (0-11)
// getDate()	-->Get day as a number (1-31)
// getDay()	-->Get weekday as a number (0-6)
// getHours()	-->Get hour (0-23)
// getMinutes()	-->Get minute (0-59)
// getSeconds()	-->Get second (0-59)
// getMilliseconds()	-->Get millisecond (0-999)
// getTime()	-->Get time (milliseconds since January 1, 1970)


//The getFullYear() Method
const d37 = new Date("2021-03-25");
console.log(d37.getFullYear());

const d38 = new Date();
console.log(d38.getFullYear());

//The getMonth() Method
const d39 = new Date("2021-03-25");
console.log(d39.getMonth());

const d40 = new Date();
console.log(d.getMonth());

//we can use an array of names to return the month as a name:

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d41 = new Date("2021-03-25");
let month1 = months[d41.getMonth()];
console.log(month1);

const d42 = new Date();
let month2 = months[d42.getMonth()];
console.log(month2);

//JavaScript Set Date Methods
// setDate()	-->Set the day as a number (1-31)
// setFullYear()	-->Set the year (optionally month and day)
// setHours()	-->Set the hour (0-23)
// setMilliseconds()	-->Set the milliseconds (0-999)
// setMinutes()	-->Set the minutes (0-59)
// setMonth()	-->Set the month (0-11)
// setSeconds()	-->Set the seconds (0-59)
// setTime()	-->Set the time (milliseconds since January 1, 1970)

//The setFullYear() Method
const d43 = new Date();
d43.setFullYear(2020);
console.log(d43);

const d44 = new Date();
d44.setFullYear(2020, 11, 3);
console.log(d44);

//The setMonth() Method
const d45 = new Date();
d45.setMonth(11);
console.log(d45);
