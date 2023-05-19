import { useProducts } from "../../contexts/product-contex";
import classes from "./Filter.module.css";
import { category, ratings, sortBy } from "../../data/filterData";
const Filter = () => {
  const { dispatch, state } = useProducts();
  const { priceInput, categoryFilters } = state;

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
    <div className={classes.container}>
      <div className={classes.filterHeader}>
        <p>Filter</p>
        <button>clear</button>
      </div>

      <div className={classes.filterByCategory}>
        <h2>Category</h2>

        {category.map((item, index) => (
          <label key={index} className={classes.category}>
            <input
              type="checkbox"
              value={item}
              onChange={categoryCheckboxHandler}
              checked={categoryFilters.includes(item)}
            />
            <p>{item}</p>
          </label>
        ))}
      </div>

      <div className={classes.filterByRating}>
        <h2>Ratings</h2>
        {ratings.map((rating, index) => (
          <label key={index} className={classes.rating}>
            <input
              type="radio"
              name="rating"
              value={rating}
              onChange={(event) =>
                dispatch({ type: "RATING", payload: event.target.value })
              }
            />
            <p>{rating} star & above</p>
          </label>
        ))}
      </div>

      <div className={classes.filterByPrice}>
        <h2>Sort by</h2>
        {sortBy.map((sort, index) => (
          <label key={index} className={classes.sort}>
            <input
              type="radio"
              name="sort"
              value={sort}
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
          onChange={(event) =>
            dispatch({ type: "PRICE_RANGE_INPUT", payload: event.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Filter;
