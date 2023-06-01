import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { Searchbar } from "../index";
import {
  MdOutlineShoppingCart,
  AiOutlineHeart,
  RiAccountCircleLine
} from "../../assets/icon";
import { useProducts } from "../../contexts/product-contex";
import { useAuth } from "../../contexts/auth-context";

const Navbar = () => {
  const { authState } = useAuth();
  const { user } = authState;
  const { state } = useProducts();
  const { cart, wishlist } = state;


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
          <NavLink to="/profile">
            <RiAccountCircleLine size="23" />
          </NavLink>

          {user ? (
            <div className={classes.wishlistNavlink}>
              <NavLink to="/wishlist">
                <AiOutlineHeart size="23" />
              </NavLink>
              {wishlist.length > 0 && (
                <p className={classes.wishlistLength}>{wishlist.length}</p>
              )}
            </div>
          ) : (
            <div className={classes.wishlistNavlink}>
              <NavLink to="/login">
                <AiOutlineHeart size="23" />
              </NavLink>
            </div>
          )}

          {user ? (
            <div className={classes.cartNavlink}>
              <NavLink to="/cart">
                <MdOutlineShoppingCart size="23" />
              </NavLink>
              {cart.length > 0 && (
                <p className={classes.cartLength}>{cart.length}</p>
              )}
            </div>
          ) : (
            <div className={classes.cartNavlink}>
              <NavLink to="/login">
                <MdOutlineShoppingCart size="23" />
              </NavLink>
            </div>
          )}
        </div>
      </div>

      <div className={classes.responsiveNavbar}>
        <div className={classes.links}>
          <NavLink to="/">
            <h1>MyShoppingSite</h1>
          </NavLink>

          <div className={classes.navigator}>
            <NavLink to="/profile">
              <RiAccountCircleLine size="23" />
            </NavLink>

            {user ? (
              <div className={classes.wishlistNavlink}>
                <NavLink to="wishlist">
                  <AiOutlineHeart size="23" />
                </NavLink>
                {wishlist.length > 0 && (
                  <p className={classes.wishlistLength}>{wishlist.length}</p>
                )}
              </div>
            ) : (
              <div className={classes.wishlistNavlink}>
                <NavLink to="/login">
                  <AiOutlineHeart size="23" />
                </NavLink>
              </div>
            )}

            {user ? (
              <div className={classes.cartNavlink}>
                <NavLink to="/cart">
                  <MdOutlineShoppingCart size="23" />
                </NavLink>
                {cart.length > 0 && (
                  <p className={classes.cartLength}>{cart.length}</p>
                )}
              </div>
            ) : (
              <div className={classes.cartNavlink}>
                <NavLink to="/login">
                  <MdOutlineShoppingCart size="23" />
                </NavLink>
              </div>
            )}
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
