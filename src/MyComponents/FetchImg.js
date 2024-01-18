import { useEffect, useState } from "react";

const UseFetchData = (imgNames, Kind) => {
  const [keepingImgSource, setKeepingImgSource] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (imgNames && imgNames.length > 0) {
          const baseUrl = process.env.REACT_APP_API_KEY;
          const response = await fetch(
            `${baseUrl}${Kind}/DownloadImages?imgNames=${imgNames}`
          );
          const data = await response.json();
          setKeepingImgSource(data.imageUrls);
        } else {
          setKeepingImgSource([]);
        }
      } catch (error) {
        console.error("Error downloading images:", error);
        setKeepingImgSource([]); // Set to empty in case of error
      }
    };
    fetchData();
  }, [imgNames, Kind]); // Include all dependencies in the dependency array

  return keepingImgSource;
};

export default UseFetchData;
