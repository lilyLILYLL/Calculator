import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { Button } from "../components/Button";
import buttons from "../constants/buttons";
import { useSelector } from "react-redux";
import { displayOutput, LENGTH_THRESHOLD } from "../constants/format";

export const CalculationScreen = () => {
    const state = useSelector((state) => state);
    console.log(state);

    const displayValue =
        state.currentValue === ""
            ? displayOutput(state.result)
            : displayOutput(state.currentValue);

    const resultFontSize = displayValue.length > LENGTH_THRESHOLD + 2 ? 60 : 75;
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.margin}></View>
            <View style={styles.display}>
                <Text style={[{ fontSize: resultFontSize }, styles.result]}>
                    {displayValue}
                </Text>
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

    display: {
        flex: 1.8, // 2/5
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 25,
        paddingBottom: 20,
    },
    result: {
        color: colors.white,
    },
    buttonBox: {
        width: "100%",
        flex: 3.2, // 3/5
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingHorizontal: 7,
    },
});
