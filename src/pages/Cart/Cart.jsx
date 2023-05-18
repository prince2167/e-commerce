import React from "react";
import { useProducts } from "../../contexts/product-contex";
import { CartCard } from "../../components/index";
import classes from "./Cart.module.css"
const Cart = () => {
  const { state } = useProducts();
  const { cart } = state;

  return (
    <div className={classes.cartpage}>
      <div className={classes.cartCardList}>
        {cart.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
