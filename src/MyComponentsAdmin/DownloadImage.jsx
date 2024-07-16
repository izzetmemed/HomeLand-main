import React from 'react';
import axios from 'axios';

const DownloadImage = ({ImageUrl}) => {
  const download = async () => {
    if (ImageUrl) {
      for (const url of ImageUrl) {
        try {
          const response = await axios.get(url, { responseType: 'blob' });
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(new Blob([response.data]));
          link.setAttribute('download', 'Homeland.jpg');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error('Error downloading the image:', error);
        }
      }
    }
  };

  return (
    <button onClick={download} className='btn btn-success p-2 ms-4'>
      <i className="fa-solid fa-download"></i>
    </button>
  );
};

export default DownloadImage;
