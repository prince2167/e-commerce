import { useProducts } from "../../contexts/product-contex";
import {
  Filter,
  ProductCard,
  Loader,
  ResponsiveFilter,
} from "../../components/index";
import classes from "./Home.module.css";
import {
  getFilteredByRating,
  getFilteredProducts,
  getSearchProducts,
  getSortedByPrice,
  getSortedProductsBySlider,
} from "../../utils";
const Home = () => {
  const { state } = useProducts();
  const {
    products,
    categoryFilters,
    rating,
    sortBy,
    priceInput,
    searchTerm,
    isLoading,
  } = state;

  const filteredProducts = getFilteredProducts(products, categoryFilters);
  const filteredByRatingProducts = getFilteredByRating(
    filteredProducts,
    rating
  );
  const sortedByPriceProducts = getSortedByPrice(
    filteredByRatingProducts,
    sortBy
  );
  const sortedProducts = getSortedProductsBySlider(
    sortedByPriceProducts,
    priceInput
  );
  const searchedProducts = getSearchProducts(sortedProducts, searchTerm);

  if (isLoading) return <Loader />;
  return (
    <div className={classes.homePage}>
      <div className={classes.filterContainer}>
        <Filter />
      </div>

      <div className={classes.responsiveFilterContainer}>
        <ResponsiveFilter />
      </div>

      <div className={classes.cardList}>
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {searchedProducts.length === 0 && <h1>Product does not found...</h1>}
      </div>
    </div>
  );
};

export default Home;
