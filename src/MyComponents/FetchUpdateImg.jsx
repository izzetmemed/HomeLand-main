function FetchUpdateImg(formData,Kind,id) {
    const baseUrl = process.env.REACT_APP_API_KEY;
      fetch(`${baseUrl}${Kind}/${id}`, {
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
  
  export default FetchUpdateImg