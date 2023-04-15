import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CalculationScreen } from "./src/screens/CalculationScreen";
import { ContextProvider } from "./src/contexts/Context";
export default function App() {
    return (
        <ContextProvider>
            <CalculationScreen />
        </ContextProvider>
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
