import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css";
import { Searchbar } from "../index";
import {
  MdOutlineShoppingCart,
  AiOutlineHeart,
  RiAccountCircleLine,
} from "../../assets/icon";
import { useProducts } from "../../contexts/product-contex";
const Navbar = () => {
  const { state } = useProducts();
  const { cart, wishlist } = state;
  const navigate = useNavigate();
  return (
    <nav>
      <div className={classes.navbar}>
        <NavLink to="/">
          <h1>MyShoppingSite</h1>
        </NavLink>
        <div className={classes.searchbar}>
          <Searchbar />
        </div>

        <div className={classes.navigator}>
          <button
            className={classes.loginButton}
            onClick={() => navigate("/login")}
          >
            Login
          </button>

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
      </div>

      <div className={classes.responsiveNavbar}>
        <div className={classes.links}>
          <NavLink to="/">
            <h1>MyShoppingSite</h1>
          </NavLink>

          <div className={classes.navigator}>
            <NavLink to="/login">
              <RiAccountCircleLine size="23" />
            </NavLink>

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
        </div>
        <div className={classes.searchbar}>
          <Searchbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
