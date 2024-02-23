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
      return responseData; 
    } catch (error) {
      console.error("Error uploading data:", );
      throw error; 
    }
  }
  
  export default SendLog;
  