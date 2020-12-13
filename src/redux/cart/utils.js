const _filterDataByPath = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((value, key) => {
    return value[key];
  }, obj[firstKey]);
};

export const getTotalData = (obj, path) => {
  return Object.values(obj).reduce((total, obj) => {
    const value = _filterDataByPath(obj, path) + total;
    return value;
  }, 0);
};

export const getTotalPrice = (arr) => arr.reduce((total, { price }) => total + price, 0);
