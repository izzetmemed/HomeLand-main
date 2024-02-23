import axios from 'axios';
const FetchGetAll = (Controller) => {
  var token=sessionStorage.getItem("Resp");
  try {
    const baseUrl = process.env.REACT_APP_API_KEY;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const resp =  axios.get(`${baseUrl}${Controller}`,{
      headers: {
        "Authorization": `Bearer ${JSON.parse(token)}`,
      }});
=======
>>>>>>> izzet
    console.log(baseUrl)
    const resp =  axios.get(`${baseUrl}${Controller}`);
>>>>>>> main
    return resp;
  } catch (error) {
    console.error("Error fetching data: ", );
    return null; 
  }
}

export default FetchGetAll;
