import {useEffect, useState} from "react";

const useLocalStorage = (initialState, key) => {

  const getItem = () => {
    const item = localStorage.getItem(key);

    if (item)
      return item;

    return initialState;
  };

  const [storedItem, setStoredItem] = useState(getItem());

  const setItem = (value) => {
    localStorage.setItem(key, value);
    setStoredItem(value);
  }

  useEffect(() => {
    setItem(localStorage.getItem(key));
  }, [localStorage.getItem(key)]);

  const removeItem = () => {
    localStorage.removeItem(key);
    setStoredItem(null);
  }

  return [storedItem, setItem, removeItem];
}

export default useLocalStorage;