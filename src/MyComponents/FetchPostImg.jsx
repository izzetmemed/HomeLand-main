
function FetchPostImg(formData,Kind) {
    fetch(`http://localhost:5224/api/${Kind}`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response)
        .then((data) => {
          console.log("Image uploaded successfully:", data);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
}

export default FetchPostImg