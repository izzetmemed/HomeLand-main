
const DateCutting = (x) => {
    return (x.toString().replace("T", " ").substring(0, 16));
  };
export default DateCutting