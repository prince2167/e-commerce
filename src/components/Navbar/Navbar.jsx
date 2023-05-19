import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { Searchbar } from "../index";
import { MdOutlineShoppingCart, AiOutlineHeart } from "../../assets/icon";
import { useProducts } from "../../contexts/product-contex";
const Navbar = () => {
  const { state } = useProducts();
  const { cart, wishlist } = state;
  return (
    <nav>
      <NavLink to="/">
        <h1>MyShoppingSite</h1>
      </NavLink>
      <Searchbar />
      <div className={classes.navigator}>
        <button className={classes.loginButton}>Login</button>

        <div className={classes.wishlistNavlink}>
          <NavLink to="wishlist">
            <AiOutlineHeart size="23" />
          </NavLink>
          {wishlist.length > 0 && (
            <p className={classes.wishlistLength}>{wishlist.length}</p>
          )}
        </div>

        <div className={classes.cartNavlink}>
          <NavLink to="/cart">
            <MdOutlineShoppingCart size="23" />
          </NavLink>
          {cart.length > 0 && (
            <p className={classes.cartLength}>{cart.length}</p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
