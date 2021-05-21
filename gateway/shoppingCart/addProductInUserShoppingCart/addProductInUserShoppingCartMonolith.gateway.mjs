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
  // Get the current database transaction from the async hook
  // Rollback the transaction
  // Clean async hook
}

async function getUserRoles({ userId }) {
  // Call database
}

async function getProductStock({ productId }) {
  // Call database
}

async function removeProductQuantityFromStock({ productId, quantity }) {
  // Call database
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
