import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { Button } from "../components/Button";
import buttons from "../constants/buttons";
import { useSelector } from "react-redux";
import { formatOutput } from "../constants/format";

export const CalculationScreen = () => {
    const state = useSelector((state) => state);
    const outputValue = formatOutput(state.inputValue, state.chosenOperator);
    console.log(outputValue);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.margin}></View>
            <View style={styles.display}>
                <Text style={styles.result}>{outputValue}</Text>
            </View>
            <View style={styles.buttonBox}>
                {buttons.map((item, index) => {
                    return <Button key={index} item={item} />;
                })}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkTheme,
        flex: 5,
    },
    margin: { flex: 1 },

    display: {
        flex: 1, // 2/5
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingVertical: 10,
        padding: 27,
        backgroundColor: "pink",
    },
    result: {
        fontSize: 80,
        color: colors.white,
    },
    buttonBox: {
        width: "100%",
        flex: 3, // 3/5
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingHorizontal: 7,
    },
});
