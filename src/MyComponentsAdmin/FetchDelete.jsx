

const FetchDelete =async (Id,Kind) => {
  var token=sessionStorage.getItem("Resp");
        try {
          const baseUrl = process.env.REACT_APP_API_KEY;
          const response = await fetch(`${baseUrl}${Kind}/${Id}`, {
            method: 'DELETE',
            headers: {
              "Authorization": `Bearer ${JSON.parse(token)}`,
            }
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status:`);
          }
      
            
          if (response.status === 204) { 
            console.log("Item deleted successfully");
        
          }
      
        } catch (error) {
          console.error("Error in deleteItem:", );
        }
}

export default FetchDelete