
import axios from 'axios';
const FetchGetAll =async (Controller) => {
    const resp = await axios.get(`http://localhost:5224/api/${Controller}`);
  return resp
}
export default FetchGetAll