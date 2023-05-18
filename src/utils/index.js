export const getIsInWishlist = (products, id) => {
  const product = products?.find((product) => product.productId === Number(id));

  return product;
};
