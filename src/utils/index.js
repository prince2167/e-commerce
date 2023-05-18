export const getIsInProducts = (products, id) => {
  const product = products?.find((product) => product.productId === Number(id));

  return product;
};
