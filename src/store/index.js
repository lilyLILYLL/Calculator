import { configureStore } from "@reduxjs/toolkit";
import {
    operationSlice,
    numberPress,
    operatorPress,
    modifierButtonPress,
    reset,
} from "./slices/operationSlice";
export const store = configureStore({
    reducer: operationSlice,
});
console.log(store.getState());
export { numberPress, operatorPress, modifierButtonPress, reset };
