import { useProducts } from "../../contexts/product-contex";
import { Filter, ProductCard, Loader } from "../../components/index";
import classes from "./Home.module.css";
import {
  getFilteredByRating,
  getFilteredProducts,
  getSearchProducts,
  getSortedByPrice,
  getSortedProductsBySlider,
} from "../../utils";
import { useEffect, useState } from "react";
const Home = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { state, dispatch } = useProducts();

  const {
    products,
    categoryFilters,
    rating,
    sortBy,
    priceInput,
    searchTerm,
    isLoading,
  } = state;

  const clearFilterHandler = () => {
    dispatch({ type: "CLEAR_FILTER" });
    setShowFilter(false);
  };

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

  // 👇️ scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  if (isLoading) return <Loader />;
  return (
    <>
      <div className={classes.homePage}>
        <Filter showFilter={showFilter} setShowFilter={setShowFilter} />

        <div className={classes.cardList}>
          {searchedProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {searchedProducts?.length === 0 && <h1>Product does not found...</h1>}
        </div>
      </div>
      <div className={classes.bottomBar}>
        <button onClick={() => setShowFilter(true)}>Filters</button>
        <button onClick={clearFilterHandler}>clear</button>
      </div>
    </>
  );
};

export default Home;
