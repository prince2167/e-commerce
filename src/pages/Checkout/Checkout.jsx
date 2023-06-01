import classes from "./Checkout.module.css";
import { address } from "../../data/filterData";
import { useProducts } from "../../contexts/product-contex";
const Checkout = () => {
  const { state, dispatch } = useProducts();
  const { selectedAddress, cart, totalMrp, totalPrice } = state;
  const discountPrice = totalMrp - totalPrice;

  return (
    <div className={classes.checkoutPage}>
      <div className={classes.CheckoutContainer}>
        <div className={classes.addressInfo}>
          <h1>Select Address</h1>
          <div className={classes.cardList}>
            {address.map((user) => (
              <label key={user.id} className={classes.addressCard}>
                <input
                  type="radio"
                  name="user"
                  value={user}
                  onChange={() =>
                    dispatch({
                      type: "SELECT_ADDRESS",
                      payload: user,
                    })
                  }
                />
                <div className={classes.details}>
                  <h2>{user.name}</h2>
                  <p>{user.address}</p>
                  <p>
                    Phone Number: +1 <span>{user.contact}</span>
                  </p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className={classes.orderDetails}>
          <h1>Order Details</h1>
          <ul className={classes.productDetails}>
            {cart.map((product) => (
              <li key={product.id} className={classes.productList}>
                <strong>Name: {product.category}</strong>
                <p>Quantity: {product.quantity}</p>
                <p>Price: ₹{product.price}</p>
              </li>
            ))}
          </ul>

          <div className={classes.priceDetails}>
            <p>
              Price: <span>₹{totalMrp}</span>
            </p>
            <p className={classes.discountPrice}>
              Discount: <span>-₹{discountPrice}</span>
            </p>
          </div>

          <h2 className={classes.totalAmount}>
            Total Amount:<span>₹{totalPrice}</span>
          </h2>

          <div className={classes.diliverTo}>
            <h1>Deliver To</h1>
            {selectedAddress.map((user) => (
              <div className={classes.details} key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.address}</p>
                <p>
                  Phone Number: +1 <span>{user.contact}</span>
                </p>
              </div>
            ))}
          </div>
          <button className={classes.orderPlace}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
