
function FetchPutImg(id,Kind) {
  var token=sessionStorage.getItem("Resp");
  const baseUrl = process.env.REACT_APP_API_KEY;
    fetch(`${baseUrl}${Kind}/${id}`, {
        method: "Put",
        headers: {
          "Authorization": `Bearer ${JSON.parse(token)}`,
        }
      })
        .then((response) => response)
        .then((data) => {
          console.log("Image uploaded successfully:", data);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
}

export default FetchPutImg