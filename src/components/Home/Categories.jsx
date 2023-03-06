import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../shared/data";

export const Categories = () => {
  return (
    <div className="categories container mt-1 mb-md-5 mt-md-5">
      <div className="row">
        {categories.map((category, index) => {
          return (
            <div key={index} className="col-3 text-center">
              <Link className="react-link">
                <img
                  className="categories-img img-fluid"
                  src={category.image}
                  alt="categories"
                />
                <p>{category.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
