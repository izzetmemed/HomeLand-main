async function SendLog(formData, Kind) {
    try {
      const response = await fetch(`http://localhost:5224/api/${Kind}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log("Data uploaded successfully:", );
      return responseData; // Return the response data
    } catch (error) {
      console.error("Error uploading data:", error);
      throw error; // Rethrow the error for the caller to handle
    }
  }
  
  export default SendLog;
  