import { createSlice } from "@reduxjs/toolkit";
import { formatResult, DOT } from "../../constants/format";

const operations = createSlice({
    name: "operation",
    initialState: {
        inputValue: "", // eval function
        currentValue: "0", //
        result: "",
        operator: "",
    },
    reducers: {
        numberPress(state, action) {
            if (state.currentValue.length < 9) {
                state.currentValue =
                    state.currentValue === "0"
                        ? action.payload
                        : state.currentValue + action.payload;
                state.inputValue += action.payload;
            }
        },
        dotPress(state, action) {
            if (!state.inputValue.includes(DOT)) {
                state.currentValue += DOT;
                state.inputValue += DOT;
            }
        },
        equalPress(state, action) {
            state.result = formatResult(eval(state.inputValue).toString());
            state.inputValue = state.result;
            state.currentValue = "";
        },

        operatorPress(state, action) {
            state.operator = action.payload;

            //if the last element is not a number (i.e. '123+'), it means we're trying to change the operator
            // we remove the last element in inputValue, then add new operator into inputValue
            const lastElement = state.inputValue.slice(-1);
            if (isNaN(lastElement)) {
                state.inputValue =
                    state.inputValue.slice(0, -1) + action.payload;
            }
            // there are 2 cases here: inputValue might be '123' or '123+123'
            else {
                // update inputValue and adding new operator into inputValue
                state.result = formatResult(eval(state.inputValue).toString());
                state.inputValue = state.result + action.payload;
                state.currentValue = "";
            }
        },

        // reset everything
        reset(state) {
            state.inputValue = "";
            state.result = "";
            state.currentValue = "0";
            state.operator = "";
        },
        //
        plusMinusButtonPress(state, action) {
            // if a user hasn't entered a operator yet
            // i.e. (inputValue: '123')
            if (state.chosenOperator === "") {
                state.inputValue = "-" + state.inputValue;
            }
            //('123+' or '123+123') => we need to find the index of 'chosenOperator'
            // add '-' right after the operator character in '123+123' case
            // or add '-0' right after the operator character in '123+' case
            else {
                const operatorIndex = state.inputValue.indexOf(
                    state.chosenOperator
                );
                // i.e. '123+123' => inputValue = '123' +'-' + '123'
                state.inputValue =
                    state.inputValue.slice(0, operatorIndex + 1) +
                    "-" +
                    (state.inputValue.slice(operatorIndex + 1) || "0");
            }
        },

        // percent button press
        percentButtonPress(state, action) {},
    },
});

export const {
    numberPress,
    operatorPress,
    modifierButtonPress,
    reset,
    plusMinusButtonPress,
    dotPress,
    equalPress,
} = operations.actions;
export const operationSlice = operations.reducer;
