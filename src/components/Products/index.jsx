import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Product";
import { getAllProduct } from "../../features/product/productSlice";
import Basket from "../Basket";
import Wishlist from "../Wishlist";

const Products = () => {
  const initial = useSelector((state) => state.basket.initial);
  const isLoading = useSelector((state) => state.basket.isLoading);
  const basket = useSelector((state) => state.basket.basket);
  const wishlist = useSelector((state) => state.basket.wishlist);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="products">
        {isLoading ? (
          <p>...loading</p>
        ) : initial ? (
          initial.map((item) => <Product {...item} product={item} />)
        ) : (
          []
        )}
      </div>
      <div className="basket">
        <h1>Basket:</h1>
        <div className="products">
          {isLoading ? (
            <p>...loading</p>
          ) : basket ? (
            basket.map((item) => <Basket {...item} count={item.count} />)
          ) : (
            []
          )}
        </div>
      </div>
      <div className="basket">
        <h1>Wishlit:</h1>
        <div className="products">
          {isLoading ? (
            <p>...loading</p>
          ) : wishlist ? (
            wishlist.map((item) => <Wishlist id={item.id} {...item} />)
          ) : (
            []
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
