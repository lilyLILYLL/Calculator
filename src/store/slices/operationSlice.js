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
            state.inputValue =
                state.inputValue === "0"
                    ? action.payload
                    : state.inputValue + action.payload;
            // input values could('123+123' or '123' or '123+')
            // we split the inputValue based on 'chosenOprator',
            //if there exits a number behind the operator,(i.e. '123+123') we asign it as a outputValue(the value is displayed on Screen)
            // otherwise,(i.e. '123' or '123+'), we display the first value
            const numbers = state.inputValue.split(
                state.chosenOperator === "" ? "#" : state.chosenOperator
            );
            state.outputValue = numbers[1] ? numbers[1] : numbers[0];
            console.log(numbers);
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

                // update new outputValue
                const numbers = state.inputValue.split(state.chosenOperator);
                state.outputValue = numbers[1] ? numbers[1] : numbers[0];
                console.log(numbers);
            }
            // change chosen opeartor of state
        },

        // reset everything
        reset(state) {
            state.inputValue = "0";
            state.outputValue = "0";
            state.chosenOperator = "";
        },

        modifierButtonPress(state, action) {},
    },
});

export const { numberPress, operatorPress, modifierButtonPress, reset } =
    operations.actions;
export const operationSlice = operations.reducer;
