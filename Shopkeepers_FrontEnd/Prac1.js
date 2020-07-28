const { element } = require("prop-types");

function endOfWeek(date) {
  var lastday = date.getDate() - (date.getDay() - 1) - 30;
  return new Date(date.setDate(lastday));
}

dt = new Date();

let week = endOfWeek(dt).toLocaleDateString();
console.log(week);

// let vals = new Date();
// // console.log(vals);
// let date = ["18", "17", "16", "15", "14", "13", "12"];

// let dataDates = [
//   {
//     name: "18",
//     date: "2020-06-18T06:45:59.163Z",
//     profit: 10,
//   },
//   {
//     name: "18",
//     date: "2020-06-18T06:45:13.163Z",
//     profit: 21,
//   },
//   {
//     name: "17",
//     date: "2020-06-17T07:48:15.445Z",
//     profit: 34,
//   },
//   {
//     name: "16",
//     date: "2020-05-16T07:13:57.736Z",
//     profit: 19,
//   },
//   {
//     name: "14",
//     date: "2020-05-14T06:45:59.163Z",
//     profit: 12,
//   },
//   {
//     name: "eleventh",
//     date: "2020-05-14T06:45:59.163Z",
//     profit: 20.34,
//   },
//   {
//     name: "12",
//     date: "2020-05-12T06:45:59.163Z",
//     profit: 11,
//   },
//   {
//     name: "11",
//     date: "2020-05-11T06:45:59.163Z",
//     profit: 12,
//   },

//   {
//     name: "10",
//     date: "2020-05-10T06:45:59.163Z",
//     profit: 11,
//   },
//   {
//     name: "9",
//     date: "2020-05-09T06:45:59.163Z",
//     profit: 22,
//   },
// ];

// let weekDate = [];
// let pastWeekDays = [];

// function day() {
//   var day = new Date();
//   console.log(day, "sdfsdf");
//   var week = new Array(
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   );
//   week.forEach((element, r) => {
//     // console.log(day.toISOString().slice(0, 10));
//     pastWeekDays.push(week[(day.getDate() - 1 - r) % 7]);
//     weekDate.push(day.getDate() - r - 1);
//   });
// }

// day();
// console.log(weekDate);
