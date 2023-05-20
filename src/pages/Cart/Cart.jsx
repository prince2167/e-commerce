import React from "react";
import { useProducts } from "../../contexts/product-contex";
import { CartCard } from "../../components/index";
import classes from "./Cart.module.css";
import { emptyCart } from "../../assets/images";
import { useNavigate } from "react-router";
const Cart = () => {
  const { state } = useProducts();
  const { cart } = state;
  const navigate = useNavigate();

  return (
    <div className={classes.cartpage}>
      {cart.length === 0 && (
        <div className={classes.emptyCartCard}>
          <img src={emptyCart} alt="cart empty" />
          <div className={classes.emptyCartText}>
            <h1>Your shopping bag is empty!</h1>
            <p>
              Looks like you haven’t added anything to your bag. Let’s change
              that.
            </p>
            <button onClick={() => navigate("/home")}>Back to shopping</button>
          </div>
        </div>
      )}
      <div className={classes.cartCardList}>
        {cart.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
