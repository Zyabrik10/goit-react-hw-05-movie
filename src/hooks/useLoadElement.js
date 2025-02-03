import { useEffect, useState } from 'react';
import loadElement from 'utility/loadElement';

export default function useLoadElement(apiFunc, property, query = '') {
  const [data, setData] = useState([]);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    loadElement(setLoad, setIsNothingFound, apiFunc, query, setData, property);
  }, [apiFunc, property, query]);

  return [data, isNothingFound, load];
}
