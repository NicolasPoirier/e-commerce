export default function canGetProductPrice({ userRoles }) {
  return userRoles !== undefined;
}
