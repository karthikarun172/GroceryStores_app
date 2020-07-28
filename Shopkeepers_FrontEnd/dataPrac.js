const _ = require("lodash");

const data = [
  {
    product: ["bingo", "polo", "maggie", "kitkat"],
    price: [5, 3, 12, 10],
    costprice: [4, 2, 10, 8],
    Quantity: [3, 4, 3, 1],
    category: ["snacks", "chocolate", "snacks", "chocolate"],
  },
  {
    product: ["lays", "polo"],
    price: [2, 3],
    costprice: [12, 43],
    Quantity: [13, 4],
    category: ["snacks", "chocolate"],
  },
  {
    product: ["kurkure", "DairyMilk"],
    price: [2, 3],
    costprice: [12, 43],
    Quantity: [2, 14],
    category: ["snacks", "chocolate"],
  },
  {
    product: ["kurkure", "DairyMilk"],
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
console.log(chocolate, chocoQuantity);

const source = _.zipWith(chocolate, chocoQuantity, (name, quantity) => ({
  name,
  quantity,
}));

var predicate = function (e) {
  return e.quantity > 1;
};
var result = _.chain(source)
  .filter(predicate)
  .groupBy(function (e) {
    return e.name;
  })
  .map(function (group) {
    return _.reduce(group, function (current, next) {
      return {
        name: next.name,
        quantity: current.quantity + next.quantity,
      };
    });
  })
  .union(
    _.filter(source, function (e) {
      return !predicate(e);
    })
  )
  .value();

console.log(result);
