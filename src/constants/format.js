import { format, string } from "mathjs";

export const COMMA = ",";
export const DOT = ".";
export const EQUAL = "=";
export const MINUS = "-";
export const TWO_MINUS = "--";
export const MAX_LENGTH = 9;
export const LENGTH_THRESHOLD = 6;

//format string
export const formatString = (outputValue, threshold) => {
    return format(parseFloat(outputValue), {
        precision: threshold,
        upperExp: threshold,
        lowerExp: -(threshold - 3),
    });
};
export const formatResult = (outputValue) => {
    // calculation for very big number
    return outputValue.length > MAX_LENGTH
        ? formatString(outputValue, LENGTH_THRESHOLD)
        : formatString(outputValue, MAX_LENGTH);
};

// replace dot by comma, and also get rid of '+' sign when result comes to something like '1e+18
// add '.' after 3 digits
export const displayOutput = (value) => {
    let output = value.replace(DOT, COMMA).replace("+", "");
    return parseFloat(output) > 0
        ? output.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        : output;
};

export const cal = (inputValue) => {
    if (isNaN(inputValue.slice(-1))) {
        inputValue = inputValue.slice(0, -1);
    }
    console.log(inputValue);

    return eval(inputValue).toString();
};
