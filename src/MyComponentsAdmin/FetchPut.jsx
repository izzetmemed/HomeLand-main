
const FetchPut = (Data,Kind) => {
  var token=sessionStorage.getItem("Resp");
  const baseUrl = process.env.REACT_APP_API_KEY;
  console.log(Data)
    fetch(`${baseUrl}${Kind}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${JSON.parse(token)}`,
        },
        body: JSON.stringify(Data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response;
        })
        .then((responseData) => {
          console.log("Data uploaded successfully:", responseData);
        })
        .catch((error) => {
          console.error("Error uploading data:", error);
        });
}

export default FetchPut