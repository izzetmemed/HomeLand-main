
import { useEffect,useState } from 'react';
const FetchGetId = (id,Kind) => {
    var [GetById, setGetById] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:5224/api/${Kind}/${id}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setGetById(data);
        } catch (error) {
          console.error("Error in fetchData:", error);
        }
      };
      fetchData();
    }, [id]);
  return GetById
}

export default FetchGetId