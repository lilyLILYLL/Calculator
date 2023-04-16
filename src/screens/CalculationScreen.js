import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    FlatList,
    TextInput,
} from "react-native";
import React from "react";
import colors from "../constants/colors";
import { Button } from "../components/Button";
import buttons from "../constants/buttons";
import { useSelector } from "react-redux";
export const CalculationScreen = () => {
    const state = useSelector((state) => state);

    console.log(state);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.display}>
                <Text style={styles.result}>
                    {state.currentNumber || state.previousNumber}
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
        flex: 1,
        paddingHorizontal: 20,
    },
    display: {
        height: "40%",
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
        justifyContent: "center",
        borderRadius: 5,
        width: "100%",
        flexWrap: "wrap",
    },
});
