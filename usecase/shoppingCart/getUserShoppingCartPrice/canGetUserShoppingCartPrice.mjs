export default function canAddProductInUserShoppingCart({ user, shoppingCartUserId }) {
  return (user.id === shoppingCartUserId && user.roles.includes('customer'))
  || user.roles.includes('care');
}
