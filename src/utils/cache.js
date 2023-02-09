const readFromCache = () => JSON.parse(localStorage.getItem('dogs')) || [];

const writeToCache = (data) =>
  localStorage.setItem('dogs', JSON.stringify(data));

export { readFromCache, writeToCache };