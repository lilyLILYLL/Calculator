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

export const displayOutput = (value) => {
    return value
        .replace(DOT, COMMA)
        .replace("+", "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
export const cal = (inputValue) => {
    return eval(inputValue).toString();
};
