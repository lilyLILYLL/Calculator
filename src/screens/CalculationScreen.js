import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    FlatList,
    TextInput,
} from "react-native";
import React, { useContext } from "react";
import colors from "../constants/colors";
import { Button } from "../components/Button";
import buttons from "../constants/buttons";
import { Context } from "../contexts/Context";
export const CalculationScreen = () => {
    const {
        state: { currentValue, previousValue },
    } = useContext(Context);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.display}>
                <Text style={styles.result}>
                    {currentValue ? currentValue : previousValue}
                </Text>
            </View>
            <View style={styles.buttonBox}>
                {buttons.map((item, index) => {
                    return (
                        <Button
                            key={index}
                            name={item.name}
                            type={item.type}
                            value={item.value}
                        />
                    );
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
