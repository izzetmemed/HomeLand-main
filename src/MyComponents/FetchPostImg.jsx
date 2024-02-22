
function FetchPostImg(formData,Kind) {
  const baseUrl = process.env.REACT_APP_API_KEY;
    fetch(`${baseUrl}${Kind}`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response)
        .then((data) => {
          console.log("Image uploaded successfully:", );
        })
        .catch((error) => {
          console.error("Error uploading image:", );
        });
}

export default FetchPostImg