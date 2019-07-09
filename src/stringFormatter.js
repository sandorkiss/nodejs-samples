function standardizeStoreId(storeId) {
  if (storeId.startsWith('t')) {
    return storeId.replace('t', 'T');
  }
  if (storeId.length < 4) {
    return `T${storeId.padStart(4, '0')}`;
  }
  return storeId;
}

module.exports = standardizeStoreId;
