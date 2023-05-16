import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { Searchbar } from "../index";
import { MdOutlineShoppingCart, AiOutlineHeart } from "../../assets/icon";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <h1>MyShoppingSite</h1>
      </NavLink>
      <Searchbar />
      <div className={classes.navigator}>
        <button className={classes.loginButton}>Login</button>
        <NavLink to="wishlist">
          <AiOutlineHeart size="23" />
        </NavLink>
        <NavLink to="/cart">
          <MdOutlineShoppingCart size="23" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
