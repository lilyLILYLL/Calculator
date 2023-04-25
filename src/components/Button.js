import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import colors from "../constants/colors";
import { ButtonTypes } from "../constants/buttons";
import {
    numberPress,
    operatorPress,
    plusMinusButtonPress,
    reset,
    dotPress,
    equalPress,
    percentButtonPress,
} from "../store";
import { useDispatch } from "react-redux";

export const Button = ({ item }) => {
    const dispatch = useDispatch();

    let handleOnPress;
    switch (item.type) {
        case ButtonTypes.NUMBER:
            handleOnPress = () => dispatch(numberPress(item.value));
            break;
        case ButtonTypes.OPERATOR:
            handleOnPress = () => dispatch(operatorPress(item.value));
            break;
        case ButtonTypes.RESET:
            handleOnPress = () => dispatch(reset());
            break;
        case ButtonTypes.PLUS_MINUS:
            handleOnPress = () => dispatch(plusMinusButtonPress());
            break;
        case ButtonTypes.DOT:
            handleOnPress = () => dispatch(dotPress());
            break;
        case ButtonTypes.EQUAL:
            handleOnPress = () => dispatch(equalPress());
            break;
        case ButtonTypes.PERCENT:
            handleOnPress = () => dispatch(percentButtonPress());
            break;
    }

    const backgroundColor =
        item.type === ButtonTypes.NUMBER
            ? colors.darkgray
            : item.type === ButtonTypes.OPERATOR
            ? colors.yellow
            : colors.lightgray;

    const textColor =
        item.type === ButtonTypes.NUMBER || item.type === ButtonTypes.OPERATOR
            ? colors.white
            : colors.black;

    const width = item.name === "0" ? 180 : 85;

    return (
        <TouchableOpacity onPress={handleOnPress}>
            <View
                style={[
                    styles.button,
                    { backgroundColor: backgroundColor, width: width },
                ]}
            >
                <Text style={[styles.text, { color: textColor }]}>
                    {item.name}
                </Text>
            </View>
            <View style={styles.gap}></View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: "39%",
        width: 85,
        borderRadius: "110%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 35,
    },
    gap: {
        height: "6%",
    },
});
