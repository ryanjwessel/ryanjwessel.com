export const getLocalStorageValue = (key) => {
  return localStorage.getItem(key);
};

export const setLocalStorageValue = (key, val) => {
  localStorage.setItem(key, val);
};
