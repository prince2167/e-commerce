import { useProducts } from "../../contexts/product-contex";
import { ProductCard } from "../../components/index";
import classes from "./Home.module.css";
const Home = () => {
  const { state } = useProducts();
  const { products } = state;
  return (
    <div>
      <div className={classes.cardList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
