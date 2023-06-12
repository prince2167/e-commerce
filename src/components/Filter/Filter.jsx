import { useProducts } from "../../contexts/product-contex";
import classes from "./Filter.module.css";
import { category, ratingsBy, sortingBy } from "../../data/filterData";
import { useWindowSize } from "../../hooks/useWindowSize";

const Filter = ({ showFilter, setShowFilter }) => {
  const { width } = useWindowSize();
  const { dispatch, state } = useProducts();
  const { priceInput, categoryFilters, rating, sortBy } = state;

  const categoryCheckboxHandler = (event) => {
    const category = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      dispatch({
        type: "CATEGORY_FILTERS",
        payload: [...categoryFilters, category],
      });
    } else {
      const updatedCategoryFilters = categoryFilters.filter(
        (filter) => filter !== category
      );
      dispatch({ type: "CATEGORY_FILTERS", payload: updatedCategoryFilters });
    }
  };

  return (
    <div
      className={
        showFilter && width < 800 ? classes.mobileContainer : classes.container
      }
    >
      <div className={classes.filterHeader}>
        <p>Filter</p>

        {showFilter ? (
          <button onClick={() => setShowFilter(false)}>Apply</button>
        ) : (
          <button onClick={() => dispatch({ type: "CLEAR_FILTER" })}>
            clear
          </button>
        )}
      </div>

      <div className={classes.filterByCategory}>
        <h2>Category</h2>

        {category.map((item, index) => (
          <label key={index} className={classes.category}>
            <input
              type="checkbox"
              value={item}
              onChange={categoryCheckboxHandler}
              checked={categoryFilters?.includes(item)}
            />
            <p>{item}</p>
          </label>
        ))}
      </div>

      <div className={classes.filterByPrice}>
        <h2>Ratings</h2>
        {ratingsBy.map((rate, index) => (
          <label key={index} className={classes.sort}>
            <input
              type="radio"
              name="rate"
              value={rate}
              checked={rate === rating}
              onChange={(event) =>
                dispatch({ type: "RATING", payload: event.target.value })
              }
            />

            <p>{rate} star & above</p>
          </label>
        ))}
      </div>

      <div className={classes.filterByPrice}>
        <h2>Sort by</h2>
        {sortingBy.map((sort, index) => (
          <label key={index} className={classes.sort}>
            <input
              type="radio"
              name="sort"
              value={sort}
              checked={sort === sortBy}
              onChange={(event) =>
                dispatch({ type: "SORT_BY", payload: event.target.value })
              }
            />
            <p>{sort}</p>
          </label>
        ))}
      </div>

      <div className={classes.filterByPrice}>
        <h2>Price</h2>
        <p>{priceInput}</p>
        <input
          className={classes.priceSlider}
          type="range"
          min={0}
          max={5000}
          step={500}
          value={priceInput}
          onChange={(event) =>
            dispatch({ type: "PRICE_RANGE_INPUT", payload: event.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Filter;
