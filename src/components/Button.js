import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import colors from "../constants/colors";
import { ButtonTypes } from "../constants/buttons";
import {
    numberPress,
    operatorPress,
    modifierButtonPress,
    reset,
} from "../store";
import { useDispatch } from "react-redux";
export const Button = ({ item }) => {
    const dispatch = useDispatch();

    let backgroundColor;
    let textColor;
    let handleOnPress;
    if (item.type === ButtonTypes.NUMBER) {
        backgroundColor = colors.darkgray;
        textColor = colors.white;
        handleOnPress = () => {
            dispatch(numberPress(item.value));
        };
    } else if (item.type === ButtonTypes.OPERATOR) {
        backgroundColor = colors.yellow;
        textColor = colors.white;
        handleOnPress = () => {
            dispatch(operatorPress(item.value));
        };
    } else {
        backgroundColor = colors.lightgray;
        if (item.name === "AC") {
            handleOnPress = () => {
                dispatch(reset());
            };
        } else if (item.value === "+/-") {
            handleOnPress = () => {
                dispatch(modifierButtonPress("+/-"));
            };
        } else {
            handleOnPress = () => {
                dispatch(modifierButtonPress("%"));
            };
        }
    }
    const width = item.name === "0" ? 185 : 85;
    const customStyle = [
        styles.button,
        { backgroundColor: backgroundColor, width: width },
    ];
    const customTextStyle = [styles.text, { color: textColor }];

    return (
        <TouchableOpacity onPress={handleOnPress}>
            <View style={customStyle}>
                <Text style={customTextStyle}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 85,
        width: 85,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 7,
    },
    text: {
        fontSize: 35,
    },
});
