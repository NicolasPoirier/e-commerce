async function startTransaction() {
  // Start a database transaction
  // Add it to the async hook
}

async function commitTransaction() {
  // Get the current database transaction from the async hook
  // Commit the transaction
  // Clean async hook
}

async function rollbackTransaction() {
  // Get the productId and quantity, and the current database transaction from the async hook
  // Call stock manager microservice to add quantity in stock
  // Rollback the database transaction
  // Clean async hook
}

async function getUserRoles({ userId }) {
  // Call role manager microservice
}

async function getProductStock({ productId }) {
  // Call stock manager microservice
}

async function removeProductQuantityFromStock({ productId, quantity }) {
  // Add productId and quantity in the async hook
  // Call stock manager microservice
}

async function addProductInShoppingCart({ userId, productId, quantity }) {
  // Call database
}

const addProductUserInShoppingCartGateway = {
  startTransaction,
  commitTransaction,
  rollbackTransaction,
  getUserRoles,
  getProductStock,
  removeProductQuantityFromStock,
  addProductInShoppingCart,
};

export default addProductUserInShoppingCartGateway;
