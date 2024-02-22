import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
const FetchGetId = (id,Kind) => {
    var [GetById, setGetById] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        var token=sessionStorage.getItem("Resp");
        try {
          const baseUrl = process.env.REACT_APP_API_KEY;
          const response = await fetch(
            `${baseUrl}${Kind}/${id}`,{
              headers: {
                "Authorization": `Bearer ${JSON.parse(token)}`,
              }}
          );
          if (!response.ok) {
                    if (response.status === 404) {
                        navigate('/Error');
                        return; 
                    }
                    throw new Error(`HTTP error! status: `);
                }
          const data = await response.json();
          setGetById(data);
        } catch (error) {
          console.error("Error in fetchData:", );
        }
      };
      fetchData();
    }, [id]);
  return GetById
}

export default FetchGetId