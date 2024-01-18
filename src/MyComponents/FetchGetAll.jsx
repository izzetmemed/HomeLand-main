import axios from 'axios';
const FetchGetAll = (Controller) => {
  try {
    const baseUrl = process.env.REACT_APP_API_KEY;
    const resp =  axios.get(`${baseUrl}${Controller}`);
    return resp;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null; // Or however you wish to handle this
  }
}

export default FetchGetAll;
