
async function  FetchPostAll(formData,Kind,imgFunc){
  const baseUrl = process.env.REACT_APP_API_KEY;
  var token=sessionStorage.getItem("Resp");
  await  fetch(`${baseUrl}${Kind}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${JSON.parse(token)}`,
        },
        body: JSON.stringify(formData),
      }) 
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
          imgFunc();
        
        return response;
      })
      .then((responseData) => {
        console.log("Data uploaded successfully:", responseData);
      })
      .catch((error) => {
        console.error("Error uploading data:", error);
      });
}

export default FetchPostAll