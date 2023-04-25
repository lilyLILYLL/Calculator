import { createSlice } from "@reduxjs/toolkit";
import {
    formatResult,
    DOT,
    EQUAL,
    cal,
    MINUS,
    TWO_MINUS,
} from "../../constants/format";

const operations = createSlice({
    name: "operation",
    initialState: {
        inputValue: "", // eval function
        currentValue: "0", //
        result: "",
        operator: "",
        previousValue: "",
    },
    reducers: {
        numberPress(state, action) {
            // allows users to enter at most 9 digits into currentValue
            if (state.currentValue.length < 9) {
                state.currentValue =
                    state.currentValue === "0" || state.currentValue === "-0"
                        ? state.currentValue.replace("0", action.payload)
                        : state.currentValue + action.payload;
            }
        },

        dotPress(state, action) {
            // There should be only one dot (decimal) in a currentValue
            if (!state.currentValue.includes(DOT)) {
                const formatedValue =
                    state.currentValue === "" ? "0" + DOT : DOT;
                state.currentValue += formatedValue;
            }
        },

        // need to modify again
        equalPress(state, action) {
            // there is no more than 1 equal press in a row
            if (!state.inputValue.includes(EQUAL)) {
                state.inputValue += state.currentValue; // update inputVAlue with new currentValue
                state.previousValue = state.currentValue;
                state.currentValue = "";
            }
            // there are more than 1 equal presses in a row
            else {
                const operaton =
                    state.result + state.operator + state.previousValue;
                state.inputValue = operaton;
            }
            state.result = formatResult(cal(state.inputValue));
            state.inputValue = state.result + EQUAL;
        },

        operatorPress(state, action) {
            state.operator = action.payload;

            // after pressing equal button,
            //if users press an operator => currentValue now is empty => then remove '=' sign from inputValue
            // if users press a number => currentValue is not empty => rewrite inputValue=''
            if (state.inputValue.includes(EQUAL)) {
                state.inputValue =
                    state.currentValue === ""
                        ? state.inputValue.slice(0, -1)
                        : "";
            }
            // update inputValue with new the currentValue which has been entered
            state.inputValue += state.currentValue;

            //if the last element is not a number (i.e. '123+'), it means we're trying to change the operator
            // we replace an old operator with new operator
            const lastElement = state.inputValue.slice(-1);
            if (isNaN(lastElement)) {
                state.inputValue = state.inputValue.replace(
                    lastElement,
                    action.payload
                );
            }
            // there are 2 cases here: inputValue might be '123' or '123+123'
            else {
                // update inputValue and adding new operator into inputValue
                state.result = formatResult(cal(state.inputValue));
                state.previousValue = state.result;
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
            state.previousValue = "";
        },
        //
        plusMinusButtonPress(state, action) {
            const value = state.currentValue || "0";
            state.currentValue = (MINUS + value).replace(TWO_MINUS, "");
        },

        // percent button press
        percentButtonPress(state, action) {
            const percentOf = state.previousValue || "1";
            const currentValue = state.currentValue || state.result;
            state.currentValue = cal(percentOf + "*" + currentValue + "/100");
        },
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
    percentButtonPress,
} = operations.actions;
export const operationSlice = operations.reducer;
