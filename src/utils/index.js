export const getIsInProducts = (products, id) => {
  const product = products?.find((product) => product.productId === Number(id));

  return product;
};

export const getFilteredProducts = (products, filters) => {
  return filters?.length > 0
    ? products.filter((product) => filters.includes(product.gender))
    : products;
};

export const getFilteredByRating = (products, rating) => {
  const updatedProduct =
    rating?.length > 0
      ? products.filter((product) => product.rating > rating)
      : products;
  return updatedProduct;
};

export const getSortedByPrice = (products, sortBy) => {
  let updatedProducts = [];
  if (sortBy === "Price: Low to High") {
    updatedProducts = products.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "Price: High to Low") {
    updatedProducts = products.sort((a, b) => b.price - a.price);
  }
  if (sortBy === "") {
    updatedProducts = products;
  }
  return updatedProducts;
};

export const getSortedProductsBySlider = (products, value) => {
  const updatedProducts = products?.filter((product) => product.price > value);
  return updatedProducts;
};

export const getSearchProducts = (products, value) => {
  const updatedProducts = products?.filter((product) =>
    product.brand.toLowerCase().includes(value.toLowerCase())
  );
  return updatedProducts;
};
