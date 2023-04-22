const COMMA = ",";
const DOT = ".";
const hasDot = (inputValue) => {
    if (inputValue.includes(DOT)) {
        return true;
    }
    return false;
};

export const formatString = (input) => {
    if (hasDot(input)) {
        return input.replace(DOT, COMMA);
    }
    console.log(input);
    return input;
};
export const formatOutput = (inputValue, chosenOperator) => {
    // input values could('123+123' or '123' or '123+')
    // we split the inputValue based on 'chosenOprator',
    //if there exits a number behind the operator,(i.e. '123+123') we asign it as a outputValue(the value is displayed on Screen)
    // otherwise,(i.e. '123' or '123+'), we display the first value
    const numbers = inputValue.split(
        chosenOperator === "" ? "#" : chosenOperator
    );
    console.log(numbers);
    return numbers[1] ? formatString(numbers[1]) : formatString(numbers[0]);
};
