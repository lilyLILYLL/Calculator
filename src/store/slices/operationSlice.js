import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const operations = createSlice({
    name: "operation",
    initialState: {
        inputValue: "0",
        outputValue: "0",
        chosenOperator: "",
    },
    reducers: {
        numberPress(state, action) {
            console.log(action.payload);
            state.inputValue =
                state.inputValue === "0" && action.payload !== ","
                    ? action.payload
                    : state.inputValue + action.payload;
        },

        operatorPress(state, action) {
            state.chosenOperator = action.payload;
            const lastElement = state.inputValue.slice(-1);
            //is the last element is not a number (i.e. '123+'), it means we're trying to change the opartor
            // we remove the last element in inputValue, then add new operator into inputValue
            if (isNaN(lastElement)) {
                state.inputValue =
                    state.inputValue.slice(0, -1) + action.payload;
            }
            // there are 2 cases here: inputValue might be '123' or '123+123'
            else {
                // update inputValue and adding new operator into inputValue
                state.inputValue =
                    eval(state.inputValue).toString() + action.payload;
            }
        },

        // reset everything
        reset(state) {
            state.inputValue = "0";
            state.outputValue = "0";
            state.chosenOperator = "";
        },

        modifierButtonPress(state, action) {
            if (action.payload === "+/-") {
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
            }
        },
    },
});

export const { numberPress, operatorPress, modifierButtonPress, reset } =
    operations.actions;
export const operationSlice = operations.reducer;
