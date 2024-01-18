
function FetchPutImg(id,Kind) {
  const baseUrl = process.env.REACT_APP_API_KEY;
    fetch(`${baseUrl}${Kind}/${id}`, {
        method: "Put",
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