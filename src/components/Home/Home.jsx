import React from "react";
import { all_products } from "../../shared/data";
import { Categories } from "./Categories";
import { CategoryDeal } from "./CategoryDeal";

import { Deals } from "./Deals";

export const Home = () => {
  return (
    <div>
      <Deals />
      <Categories />
      {all_products.map((category, i) => {
        return <CategoryDeal key={i} category={category} />;
      })}
    </div>
  );
};
