import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../redux/Action/ProductAction";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Product() {
  const Routes = useParams();
  const navigate = useNavigate();
  const productId = Routes.id;
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productListDetails = useSelector((state) => state.ProductDetails);
  const { loading, error, product } = productListDetails;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);
  const addToCart = (e) => {
    e.preventDefault();
    navigate(`/cart/${productId}?qty=${qty}`);
  };
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error:{error}</p>
      ) : (
        <div className=" max-w-[1640px] grid lg:grid-cols-2 gap-2 p-4 mx-auto text-white ">
          <div className="p-4">
            <img
              src={product.image}
              alt=""
              srcset=""
              className="w-full object-fit rounded-2xl"
            />
          </div>
          <div>
            <h1 className="font-bold text-4xl text-black p-2">
              {product.name}
            </h1>
            <div className="flex flex-wrap p-4 items-center flex-column border-b-2 border-b-black-500 max-w-[500px]">
              <span className="text-white text-light fonts">
                {product.description}
              </span>
              <span className="flex items-center p-1 text-[goldenrod] ">
                <AiFillStar size={25} />
                <AiFillStar size={25} />
                <AiOutlineStar size={25} />
                <span>(120)</span>
              </span>
            </div>
            <div className="border-b-2 border-b-black-500  max-w-[500px]">
              <span className="font-bold">${product.price}</span>
            </div>
            <div>
              <div className="flex">
                <button className="bg-[goldenrod] text-white mr-2 mt-2">
                  Buy item
                </button>
                <button
                  className="mr-2 mt-2 bg-[goldenrod]"
                  onClick={addToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
