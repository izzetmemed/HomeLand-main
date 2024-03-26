
const StringCutting = (inputString, maxLength) => {
    if (typeof inputString !== "string") {
        console.error("Error: Input is not a string");
        return inputString;
      }
      if (inputString.length <= maxLength) {
        return inputString;
      }
      return inputString.slice(0, maxLength) + "...";
}

export default StringCutting