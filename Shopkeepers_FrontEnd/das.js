// const _ = require("lodash");
// const data = require("./DummyDatas");

const { element } = require("prop-types");

// let Category = "Vegetables";
// let profit = [];
// let dates = [];
// let op = [];

// data.forEach((element, r) => {
//   element.Categories.forEach((child, e) => {
//     let obj = {};

//     if (child === Category) {
//       obj.dates = element.Date.slice(0, 10);
//       obj.profit = element.IndividualProfit[e];
//       op.push(obj);
//     }
//   });
// });

// function ObjectCombine(product, quantity) {
//   const source = _.zipWith(product, quantity, (name, quantity) => ({
//     name,
//     quantity,
//   }));
//   var predicate = function (e) {
//     return e.quantity > 1;
//   };
//   var result = _.chain(source)
//     .filter(predicate)
//     .groupBy(function (e) {
//       return e.name;
//     })
//     .map(function (group) {
//       return _.reduce(group, function (current, next) {
//         return {
//           name: next.name,
//           quantity: current.quantity + next.quantity,
//         };
//       });
//     })
//     .union(
//       _.filter(source, function (e) {
//         return !predicate(e);
//       })
//     )
//     .value();

//   return result;
// }
// let com = ObjectCombine(
//   op.map((m) => m.dates),
//   op.map((p) => p.profit)
// );

// let day = new Date();

// let week = new Array(
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// );

// let pastWeekDate = [];
// let pastWeekDays = [];

// week.forEach((element, r) => {
//   pastWeekDate.push(day.getDate() - r - 1);
//   pastWeekDays.push(week[(day.getDate() - 1 - r) % 7]);
// });
// let Profits = [];
// let Days = [];
// let Sales = [];

// pastWeekDate.forEach((element, r) => {
//   com.forEach((child) => {
//     if (element === parseInt(child.name.slice(8, 10))) {
//       Profits.push(child.quantity);
//       // Sales.push(child.TotalPrice);
//       Days.push(pastWeekDays[r]);
//     }
//   });
// });

// let da = ObjectCombine(Days, Profits);

// //======================================================//

// let today = new Date().toISOString();
// let pastMonth = parseInt(today.slice(6, 7)) - 1;

// let pastMonthData = [];
// data.forEach((element, r) => {
//   // console.log(parseInt(data[r].Date.slice(8, 10)));
//   if (parseInt(data[r].Date.slice(6, 7)) === pastMonth) {
//     pastMonthData.push(element);
//   }
// });

// const pastMonthList = [];
// pastMonthData.forEach((element, r) => {
//   element.Categories.forEach((child, e) => {
//     let objs = {};

//     if (child === Category) {
//       // objs.dates = element.Date.slice(0, 10);
//       if (element.Date.slice(8, 10) <= 7) {
//         objs.dates = "Week_1";
//       }
//       if (element.Date.slice(8, 10) >= 8 && element.Date.slice(8, 10) <= 14) {
//         objs.dates = "Week_2";
//       }
//       if (element.Date.slice(8, 10) >= 15 && element.Date.slice(8, 10) <= 21) {
//         objs.dates = "Week_3";
//       }
//       if (element.Date.slice(8, 10) >= 22 && element.Date.slice(8, 10) <= 31) {
//         objs.dates = "Week_4";
//       }
//       objs.profit = element.IndividualProfit[e];
//       objs.SellingPrice = element.SellingPrice[e];
//       pastMonthList.push(objs);
//     }
//   });
// });

// let MonthAnalsys = ObjectCombine(
//   pastMonthList.map((m) => m.dates),
//   pastMonthList.map((m) => m.profit)
// );
// let SalesAnalsys = ObjectCombine(
//   pastMonthList.map((m) => m.dates),
//   pastMonthList.map((m) => m.SellingPrice)
// );

// let totalProfit = MonthAnalsys.reduce((a, b) => a + b.quantity, 0);
// console.log(totalProfit);
let val = [{ _id: 1 }, { _id: 2 }, { _id: 4 }];

let newDAta = { _id: 3 };
// let fa;
// val.forEach((element, r) => {
//   if (element._id !== newDAta._id) {
//     return (fa = [...val, newDAta]);
//   } else {
//     val[r]._id++;
//   }
// });
// val = [...fa];
// console.log(val, "sd");
let f = [];
val.filter((v) => {
  if (v._id !== newDAta) {
    f = [...val, newDAta];
  }
});
val = [...f];
console.log(val);
