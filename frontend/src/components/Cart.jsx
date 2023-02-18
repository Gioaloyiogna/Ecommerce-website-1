import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addTocart } from "../redux/constants/cartAction";

function Cart() {
  const params = useParams();
  const productId = params.id;
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addTocart(productId, qty));
    }
  }, [productId, qty, dispatch]);
  return (
    <div className="mx-auto max-w-[1640px] p-4 h-[100vh] lg:flex sm:flex-column">
      <div className="w-[60%] ">
        <h2 className="text-center text-3xl text-[goldenrod]">
          Shopping Bag <span className="text-white">$300</span>
        </h2>
        <div className="cart-items-box flex lg:h-[10rem] justify-between bg-white mt-4 border-2 border-black]">
          <div>
            <img
              src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              alt=""
              srcset=""
              className="w-full h-full"
            />
          </div>
          <div className="w-[100%]">
            <div className="flex justify-between p-2 border-b-2 border-b-[#ddd]">
              <h2>White Gold</h2>
              <span className="text-[goldenrod] cursor-pointer">
                {" "}
                <FaTimes />{" "}
              </span>
            </div>
            <div className="flex-wrap p-2 lg:flex sm:hidden">
              <span className="font-light">
                This place will serve to describe the article you bought. don't
                worry This place will serve to describe the article you bought.
                don't worry
              </span>
            </div>
            <div className="flex justify-between p-2">
              <span className="text-[goldenrod]">$300</span>
              <span>Qtity</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white w-[30%] ml-2 h-[20rem]">
        <div className="flex  text-[goldenrod] justify-around">
          <span className="flex items-center ">
            <AiFillCheckCircle /> <a href="www.google.com">Delivery fees</a>
          </span>
          <span>
            <select id="country" name="country" className="w-[1rem]">
              <option selected="true">select country</option>
              <option value="AF">Afghanistan</option>
              <option value="AX">Aland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
            </select>
          </span>
          <span>$300</span>
        </div>
        <button className="w-[100%] mt-2 bg-black text-white">Checkout</button>
        <div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            srcset=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
export default Cart;
