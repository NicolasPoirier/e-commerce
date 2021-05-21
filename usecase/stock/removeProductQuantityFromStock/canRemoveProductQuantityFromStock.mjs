export default function canRemoveProductQuantityFromStock({ userRoles }) {
  return userRoles.includes('stock manager');
}
