import { configureStore } from "@reduxjs/toolkit";
import {
    operationSlice,
    numberPress,
    operatorPress,
    plusMinusButtonPress,
    reset,
    dotPress,
    equalPress,
} from "./slices/operationSlice";
export const store = configureStore({
    reducer: operationSlice,
});
console.log(store.getState());
export {
    numberPress,
    operatorPress,
    plusMinusButtonPress,
    reset,
    dotPress,
    equalPress,
};
