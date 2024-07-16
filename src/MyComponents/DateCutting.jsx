
const DateCutting = (date) => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const inputDate = new Date(date);
  const hours = String(inputDate.getHours()).padStart(2, '0');
  const minutes = String(inputDate.getMinutes()).padStart(2, '0');
  const time = `${hours}:${minutes}`;
  today.setHours(0, 0, 0, 0);
  yesterday.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);
  if (inputDate.getTime() === today.getTime()) {
    return `Bu gün ${time}`;
  } else if (inputDate.getTime() === yesterday.getTime()) {
    return `Dünən ${time}`;
  } else {
    return (date.toString().replace("T", " ").substring(0, 16));
  }
  };
export default DateCutting