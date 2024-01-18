
const FetchPut = (Data,Kind) => {
    fetch(`http://localhost:5224/api/${Kind}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
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