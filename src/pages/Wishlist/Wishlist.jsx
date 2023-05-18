import { WishlistCard } from "../../components/index";
import { useProducts } from "../../contexts/product-contex";
import classes from "./Wishlist.module.css";
const Wishlist = () => {
  const { state } = useProducts();
  const { wishlist } = state;
  return (
    <div>
      <div className={classes.wishlistCardList}>
        {wishlist.map((product) => (
          <WishlistCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
