import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { Button } from "../components/Button";
import buttons from "../constants/buttons";
import { useSelector } from "react-redux";

export const CalculationScreen = () => {
    const state = useSelector((state) => state);
    // input values could('123+123' or '123' or '123+')
    // we split the inputValue based on 'chosenOprator',
    //if there exits a number behind the operator,(i.e. '123+123') we asign it as a outputValue(the value is displayed on Screen)
    // otherwise,(i.e. '123' or '123+'), we display the first value
    const numbers = state.inputValue.split(
        state.chosenOperator === "" ? "#" : state.chosenOperator
    );
    const outputValue = numbers[1] ? numbers[1] : numbers[0];
    console.log(numbers);

    console.log(state);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
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
        flex: 1,
        paddingLeft: 10,
        paddingRight: 5,
    },
    display: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingVertical: 10,
        padding: 27,
    },
    result: {
        fontSize: 80,
        color: colors.white,
    },
    buttonBox: {
        flexDirection: "row",
        borderRadius: 5,
        width: "100%",
        flexWrap: "wrap",
        flex: 3,
    },
});
