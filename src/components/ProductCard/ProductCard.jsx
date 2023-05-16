import { RiHeartAddLine } from "../../assets/icon";
import classes from "./ProductCard.module.css";
const ProductsCard = ({ product }) => {
  const { productName, price, mrp, brand, thumbnail, discountDisplayLabel } =
    product;
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imgWrapper}>
        <img src={thumbnail} alt="" />
        <button className={classes.wishlistButton}>
          <RiHeartAddLine size="18" />
        </button>
      </div>
      <div className={classes.productDetails}>
        <strong>{brand}</strong>
        <p>{productName}</p>
        <div className={classes.priceDetails}>
          <p className={classes.price}>₹{price}</p>
          <p className={classes.mrp}>{mrp}</p>
          <p className={classes.discountDisplayLabel}>{discountDisplayLabel}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
