export const getLocalStorage = () => {
  const data = localStorage.getItem("products");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};
