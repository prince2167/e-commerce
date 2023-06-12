import { useNavigate } from "react-router";
import { emptyWishlist } from "../../assets/images";
import { Loader, WishlistCard } from "../../components/index";
import { useProducts } from "../../contexts/product-contex";
import classes from "./Wishlist.module.css";
import { useEffect } from "react";
const Wishlist = () => {
  const { state } = useProducts();
  const { wishlist, isLoading } = state;
  const navigate = useNavigate();

  if (isLoading) return <Loader />;
  // 👇️ scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={classes.wishlistPage}>
      {wishlist.length === 0 && (
        <div className={classes.emptyWishlistCard}>
          <img src={emptyWishlist} alt="Wishlist empty" />
          <div className={classes.wishlistText}>
            <h1>Your wishlist is empty!</h1>
            <p>Save your favourite items so you don’t lose sight of them.</p>
          </div>
          <button onClick={() => navigate("/home")}>
            Be inspired by the latest
          </button>
        </div>
      )}
      <div className={classes.wishlistCardList}>
        {wishlist.map((product) => (
          <WishlistCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
