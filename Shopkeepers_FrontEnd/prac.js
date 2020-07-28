const data = [
  {
    product: ["bingo", "polo", "maggie", "kitkat"],
    price: [2, 3],
    costprice: [12, 43],
    Quantity: [3, 4, 3, 1],
    category: ["snacks", "chocolate", "snacks", "chocolate"],
  },
  {
    product: ["lays", "polo"],
    price: [2, 3],
    costprice: [12, 43],
    Quantity: [13, 4],
    category: ["chocolate", "chocolate"],
  },
  {
    product: ["kurkure", "polo"],
    price: [2, 3],
    costprice: [12, 43],
    Quantity: [2, 14],
    category: ["snacks", "chocolate"],
  },
];

let snacks = [];
let chocolate = [];
let chocoQuantity = [];

data.forEach((element) => {
  element.category.forEach((child, e) => {
    if (child === "chocolate") chocolate.push(element.product[e]);
    if (child === "chocolate") chocoQuantity.push(element.Quantity[e]);
  });
});
console.log(chocoQuantity, chocolate);

var date = new Date().getMonth() + 1;
// console.log(date, "sd");

var prices = [3, 3, 4, 5, 5, 3, 7, 7, 45, 5];
var common = [...new Set(prices)];
// console.log(common);

let va = 10;
va *= 3;
// console.log(va);

let list = ["arun", "lst", "fdd", "sdf", "df d d"];

function emptyList() {
  list = [];
}
emptyList();
// console.log(list);

let p = 49.4;
let c = p - 0.1;
// console.log(Math.fround(c));

let result = "";
let i = 0;

let chuma = {
  a: [1, 23, 4, 5, 6],
  b: [23, 42, 345, 46, 3],
};

// let testArr = chuma.a.map((item, val) => console.log(item, chuma.b[val]));
