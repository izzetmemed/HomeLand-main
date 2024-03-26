
const CheckLength = (inputValue, setWarning,count,inputName) => {
    if (inputValue>count) {
        setWarning(prevWarnings => [...prevWarnings, inputName]);
        return false;
    } else {
        return true;
    }
}

export default CheckLength