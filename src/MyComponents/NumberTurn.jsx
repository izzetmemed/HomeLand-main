
const NumberTurn = (number) => {
        const result = number.toString().replace(/-|\s/g, "");
        return result;
}

export default NumberTurn