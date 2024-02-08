import axios from 'axios';
const FetchGetAll = (Controller) => {
  var token=sessionStorage.getItem("Resp");
  try {
    const baseUrl = process.env.REACT_APP_API_KEY;
    const resp =  axios.get(`${baseUrl}${Controller}`,{
      headers: {
        "Authorization": `Bearer ${JSON.parse(token)}`,
      }});
    return resp;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null; 
  }
}

export default FetchGetAll;
