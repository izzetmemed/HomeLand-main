import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
const FetchGetId = (id,Kind) => {
    var [GetById, setGetById] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const baseUrl = process.env.REACT_APP_API_KEY;
          const response = await fetch(
            `${baseUrl}${Kind}/${id}`
          );
          if (!response.ok) {
                    if (response.status === 404) {
                        navigate('/Error');
                        return; 
                    }
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