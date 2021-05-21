export default function canGetProductStock({ userRoles }) {
  return userRoles !== undefined;
}
