import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const operations = createSlice({
    name: "operation",
    initialState: { previousNumber: "", currentNumber: "0", operator: "" },
    reducers: {
        numberPress(state, action) {
            //update currentNumber's state
            state.currentNumber =
                state.currentNumber === "0"
                    ? action.payload
                    : state.currentNumber + action.payload;
        },

        operatorPress(state, action) {
            //payload here is new operator, we set new operator to state when a operation is completed
            if (state.operator === "") {
                state.previousNumber = state.currentNumber;
                state.operator = action.payload;
                state.currentNumber = "";
            } // this case is when we change operator instead of entering new number
            else if (state.currentNumber === "") {
                state.operator = action.payload;
            } // this case when choose an operator after entering a number
            else {
                switch (state.operator) {
                    case "+":
                        state.previousNumber = (
                            parseFloat(state.previousNumber) +
                            parseFloat(state.currentNumber)
                        ).toString();
                        break;
                    case "-":
                        state.previousNumber = (
                            parseFloat(state.previousNumber) -
                            parseFloat(state.currentNumber)
                        ).toString();
                        break;
                    case "*":
                        state.previousNumber = (
                            parseFloat(state.previousNumber) *
                            parseFloat(state.currentNumber)
                        ).toString();
                        break;
                    case "/":
                        state.previousNumber = (
                            parseFloat(state.previousNumber) /
                            parseFloat(state.currentNumber)
                        ).toString();
                        break;
                }
                state.operator = action.payload;
                state.currentNumber = "";
            }
        },
        reset(state) {
            state.currentNumber = "0";
            state.previousNumber = "";
            state.operator = "";
        },

        modifierButtonPress(state, action) {
            if (action.payload === "+/-") {
                state.currentNumber = (
                    0 - parseFloat(state.currentNumber)
                ).toString();
            }
            if (action.payload === "%") {
                if (state.previousNumber === "") {
                    state.currentNumber = (
                        parseFloat(state.currentNumber) / 100
                    ).toString();
                } else {
                    state.currentNumber = (
                        (parseFloat(state.previousNumber) *
                            parseFloat(state.currentNumber)) /
                        100
                    ).toString();
                }
            }
        },
    },
});

export const { numberPress, operatorPress, modifierButtonPress, reset } =
    operations.actions;
export const operationSlice = operations.reducer;
