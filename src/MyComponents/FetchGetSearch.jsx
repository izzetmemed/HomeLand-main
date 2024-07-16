async function FetchGetSearch(formData, Kind) {
  const baseUrl = process.env.REACT_APP_API_KEY;
  try {
    const response = await fetch(`${baseUrl}${Kind}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Data uploaded successfully:", );
    return responseData;

  } catch (error) {
    console.error("Error uploading data:", error);
    throw error; // rethrow the error after logging it
  }
}

export default FetchGetSearch;
