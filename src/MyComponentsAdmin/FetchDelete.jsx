

const FetchDelete =async (Id,Kind) => {
        try {
          const response = await fetch(`http://localhost:5224/api/${Kind}/${Id}`, {
            method: 'DELETE'
          });
          console.log(response)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
            
          if (response.status === 204) { 
            console.log("Item deleted successfully");
        
          }
      
        } catch (error) {
          console.error("Error in deleteItem:", error);
        }
}

export default FetchDelete