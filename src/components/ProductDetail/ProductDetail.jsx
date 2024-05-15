import React, { useEffect, useState } from "react";
import { all_products, product } from "../../shared/data";
import { ProductSwiper } from "../SubComponents/ProductSwiper";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  

  const { id } = useParams();
  const [coverImg, setCoverImg] = useState(product.images[0]);


  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-md-6 text-center">
          <img className="product-detail-image image-fluid" src={coverImg} alt="productImage" />
          <div className="row mt-4 ps-3 pe-3">
            {product.images.map((image, i) => {
              return (
                <div key={i} className="col-3">
                  <img
                    className="product-detail-images"
                    src={image}
                    onClick={() => setCoverImg(image)}
                    alt="productImage"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-lg-1 p-4 p-md-1">
          <p className="product-path">
            Home/{product.category}/{product.name}/{id}
          </p>
          <h1>{product.title}</h1>
          <h3>{numberFormat(product.price)}</h3>
          <button className="custom-btn mt-5">Add to Cart</button>
          <br />
          <br />
          <h4>Offers</h4>
          <ul>
            {product.offers.map((offer, i) => {
              return <li key={i}>{offer}</li>;
            })}
          </ul>

          <br />
          <h4>About this item</h4>
          <ul>
            {product.description_points.map((point, i) => {
              return <li key={i}>{point}</li>;
            })}
          </ul>
        </div>
      </div>
      <hr />
      <div className="row mt-5">
        <h3>Similar products</h3>
        <ProductSwiper category={all_products[0]} />
      </div>
    </div>
  );
};
