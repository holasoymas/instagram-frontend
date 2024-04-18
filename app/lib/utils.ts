export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (!data) return "";
  return data;
};
