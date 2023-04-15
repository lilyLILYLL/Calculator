import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useReducer } from "react";

const ACTIONS = {
    NUMBER_PRESS: "enter-number",
    OPERATOR_PRESS: "enter-operator",
    CLEAR: "clear",
    PLUS: "+",
    MINUS: "-",
    TIMES: "*",
    DIVISION: "/",
    PERCENT: "%",
    EQUAL: "=",
    PLUS_MINUS: "+/-",
    CHANGE_OPERATION: "change_operation",
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.NUMBER_PRESS:
            return { ...state, currentValue: action.payload };
        case ACTIONS.PLUS:
        case ACTIONS.MINUS:
        case ACTIONS.TIMES:
        case ACTIONS.DIVISION:
            return {
                ...state,
                previousValue: action.payload.previousValue,
                operator: action.payload.operator,
                currentValue: "",
            };
        case ACTIONS.CLEAR:
            return {
                previousValue: "",
                operator: "",
                currentValue: "0",
            };
        case ACTIONS.CHANGE_OPERATION:
            return { ...state, operator: action.payload };
        default:
            return state;
    }
};

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        previousValue: "",
        currentValue: "0",
        operator: "",
    });
    console.log(state);

    const getResult = (operator) => {
        switch (operator) {
            case ACTIONS.PLUS:
                return (
                    parseFloat(state.previousValue) +
                    parseFloat(state.currentValue)
                );
            case ACTIONS.MINUS:
                return (
                    parseFloat(state.previousValue) -
                    parseFloat(state.currentValue)
                );
            case ACTIONS.TIMES:
                return (
                    parseFloat(state.previousValue) *
                    parseFloat(state.currentValue)
                );
            case ACTIONS.DIVISION:
                return (
                    parseFloat(state.previousValue) /
                    parseFloat(state.currentValue)
                );
            case ACTIONS.PLUS_MINUS:
                return 0 - parseFloat(state.currentValue);
            case ACTIONS.PERCENT:
                return parseFloat(currentValue) / 100;
        }
    };

    const numberPress = (character) => {
        const updatedValue =
            state.currentValue === "0"
                ? character
                : state.currentValue + character;
        dispatch({ type: ACTIONS.NUMBER_PRESS, payload: updatedValue });
    };

    const operatorPress = (value) => {
        if (state.currentValue !== "") {
            if (value !== ACTIONS.PLUS_MINUS && value !== PERCENT) {
                // the first operator, when state's operator = ''
                const updatedPreviousValue =
                    state.operator === ""
                        ? state.currentValue
                        : getResult(state.operator);
                dispatch({
                    type: value,
                    payload: {
                        previousValue: updatedPreviousValue.toString(),
                        operator: value,
                    },
                });
            }
            // call a dispatch
        } else {
            dispatch({
                type: ACTIONS.CHANGE_OPERATION,
                payload: value,
            });
        }
    };

    const clear = () => {
        dispatch({ type: ACTIONS.CLEAR });
    };

    const contextValue = {
        state,
        operatorPress,
        clear,
        numberPress,
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const styles = StyleSheet.create({});
