import React from "react";
import { ProductSwiper } from "../SubComponents/ProductSwiper";

export const CategoryDeal = ({ category }) => {
  return (
    <div className="container p-4">
      <h3
        className="categories-heading"
        style={{
          backgroundColor: category.categoryBackground || "orange",
          color: category.categoryText || "white",
        }}
      >
        Deals on {category.name}
      </h3>
      <ProductSwiper category={category} />
    </div>
  );
};
