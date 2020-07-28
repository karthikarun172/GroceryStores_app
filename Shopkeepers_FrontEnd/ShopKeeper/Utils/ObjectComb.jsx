import _ from "lodash";

export function ObjectCombine(product, quantity) {
  const source = _.zipWith(product, quantity, (name, quantity) => ({
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

  return result;
}
