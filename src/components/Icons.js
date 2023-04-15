import React from "react";
import {
    Entypo,
    Feather,
    FontAwesome5,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

const iconSize = 35;
const opetatorSize = 40;
export const MinusIcon = () => {
    return <Entypo name="minus" size={opetatorSize} />;
};

export const DivisionIcon = () => {
    return <MaterialCommunityIcons name="division" size={opetatorSize} />;
};

export const TimeIcon = () => {
    return <Entypo name="cross" size={opetatorSize} />;
};

export const PlusIcon = () => {
    return <Entypo name="plus" size={opetatorSize} />;
};

export const EqualIcon = () => {
    return <MaterialCommunityIcons name="equal" size={opetatorSize} />;
};

export const PercentIcon = () => {
    return <Feather name="percent" size={iconSize} />;
};
export const PlusMinusIcon = () => {
    return <MaterialCommunityIcons name="plus-minus-variant" size={iconSize} />;
};
