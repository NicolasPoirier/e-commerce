export default function calculateShoppingCartPrice({ productQuantities, productPrices }) {
  return productQuantities.reduce(
    (orderPrice, productQuantity) => orderPrice
        + productQuantity.quantity
        * productPrices.find((productPrice) => productPrice.id === productQuantity.id).price,
    0,
  );
}
