import React, { useContext } from "react";
import { Context } from "../Context/CartContext";

export function TodayProfit(Category) {
  const { state } = useContext(Context);

  let today = new Date().toISOString();
  let todayData = state.filter(
    (m) => m.Date.slice(0, 10) === today.slice(0, 10)
  );

  let Datas_today = [];

  todayData.forEach((element) => {
    element.Categories.forEach((child, e) => {
      let objs = {};
      if (child === Category) {
        objs.product = element.Products[e];
        objs.quantity = element.Quantity[e];
        objs.profit = element.IndividualProfit[e];
        objs.sales = element.SellingPrice[e];
        Datas_today.push(objs);
      }
    });
  });

  let profits = Datas_today.reduce((a, b) => a + b.profit, 0);
  return profits;
}
