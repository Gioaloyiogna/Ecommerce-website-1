import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Productcomponent from "./Productcomponent";
import { listProduct } from "../redux/Action/ProductAction";
import {  useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productlist);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <>
    <div className="max-w-[1640px] mx-auto p-4 mt-8">
        <h1 className="text-center text-[goldenrod] text-5xl p-4">
          All Products
        </h1>
        <div>
         
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1   bg-[#ddd] p-2 gap-[2px] ">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error:{error}</p>
          ) : (
            <>
              {products.map((product, index) => {
                return (
                  <Link to={`/products/${product._id}`}>
                    <Productcomponent
                      image={product.image}
                      productId={product._id}
                      price={product.price}
                      desc={product.description}
                      productName={product.name}
                     
                    />
                  </Link>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  )
};

export default Products;
