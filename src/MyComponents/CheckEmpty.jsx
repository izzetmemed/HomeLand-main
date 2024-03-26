
const CheckEmpty = (inputValue, setWarning,inputName) => {
    if (inputValue === "") {
        setWarning(prevWarnings => [...prevWarnings, inputName]);
        return false;
    } else {
        return true;
    }
}

export default CheckEmpty