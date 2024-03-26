
const GetImg = (downloadImages) => {
    try {
        const urls = downloadImages.map(imgName => `https://res.cloudinary.com/dmttplmw7/image/upload/c_scale,q_auto,f_auto/${imgName}`);
       return urls;
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

export default GetImg