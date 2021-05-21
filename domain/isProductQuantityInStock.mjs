export default function isProductQuantityInStock({ quantity, stock }) {
  return quantity <= stock;
}
