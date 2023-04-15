import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import colors from "../constants/colors";
import { Context } from "../contexts/Context";
import { ButtonTypes } from "../constants/buttons";

export const Button = ({ name, type, value }) => {
    const { numberPress, operatorPress, clear } = useContext(Context);

    // functionality
    const handleEnterNumber = (value) => {
        numberPress(value);
    };

    // css
    const handleEnterOperator = (value) => {
        operatorPress(value);
    };

    const handleClear = () => {
        clear();
    };

    let backgroundColor;
    let textColor;
    let handleOnPress;
    if (type === ButtonTypes.NUMBER) {
        backgroundColor = colors.darkgray;
        textColor = colors.white;
        handleOnPress = () => {
            handleEnterNumber(value);
        };
    } else if (type === ButtonTypes.OPERATOR) {
        backgroundColor = colors.yellow;
        textColor = colors.white;
        handleOnPress = () => {
            handleEnterOperator(value);
        };
    } else {
        backgroundColor = colors.lightgray;
        handleOnPress = () => {
            handleClear();
        };
    }
    const width = name === "0" ? 185 : 85;
    const customStyle = [
        styles.button,
        { backgroundColor: backgroundColor, width: width },
    ];
    const customTextStyle = [styles.text, { color: textColor }];

    return (
        <TouchableOpacity onPress={handleOnPress}>
            <View style={customStyle}>
                <Text style={customTextStyle}>{name}</Text>
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
