import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { CalculationScreen } from "./src/screens/CalculationScreen";
import { store } from "./src/store";
export default function App() {
    return (
        <Provider store={store}>
            <CalculationScreen />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
