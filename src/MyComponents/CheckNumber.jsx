
const CheckNumber = (inputValue, setWarning,inputName) => {
    if (isNaN(parseFloat(inputValue)) && inputValue!=="") {
        setWarning(prevWarnings => [...prevWarnings, inputName]);
        return false;
    } else {
        return true;
    }
}

export default CheckNumber