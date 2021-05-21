export default function canAddProductToUserShoppingCart({ user, shoppingCartUserId }) {
  return (user.id === shoppingCartUserId && user.roles.includes('customer'))
  || user.roles.includes('care');
}
