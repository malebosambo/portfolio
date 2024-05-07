import axios from 'axios';
import { useState, useEffect } from 'react';

export function useRequestAPI(url) {
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setIsLoaded(true);

      axios.get(url).then((response) => {
        setData(response.data);

        setIsLoaded(false);
      })
       .catch((error) => {
         setError(error.message);

         setIsLoaded(false);
      });
    };

    fetchData();
  }, [url]);

  return { data, isLoaded, error };
};