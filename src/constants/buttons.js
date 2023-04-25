import {
    PlusIcon,
    MinusIcon,
    PlusMinusIcon,
    PercentIcon,
    DivisionIcon,
    TimeIcon,
    EqualIcon,
} from "../components/Icons";
import colors from "./colors";
export const ButtonTypes = {
    OPERATOR: "operator",
    NUMBER: "number",
    RESET: "AC",
    PLUS_MINUS: "+/-",
    PERCENT: "%",
    DOT: ",",
    EQUAL: "=",
};

export default [
    {
        name: "AC",
        type: ButtonTypes.RESET,
        value: "AC",
        backgroundColor: colors.lightgray,
        color: colors.black,
    },
    {
        name: <PlusMinusIcon />,
        type: ButtonTypes.PLUS_MINUS,
        value: "+/-",
        backgroundColor: colors.lightgray,
        color: colors.black,
    },
    {
        name: <PercentIcon />,
        type: ButtonTypes.PERCENT,
        value: "%",
        backgroundColor: colors.lightgray,
        color: colors.black,
    },
    {
        name: <DivisionIcon />,
        type: ButtonTypes.OPERATOR,
        value: "/",
        backgroundColor: colors.yellow,
        color: colors.white,
    },
    {
        name: "7",
        type: ButtonTypes.NUMBER,
        value: "7",
        backgroundColor: colors.darkgray,
        color: colors.white,
    },
    {
        name: "8",
        type: ButtonTypes.NUMBER,
        value: "8",
        backgroundColor: colors.darkgray,
        color: colors.white,
    },
    {
        name: "9",
        type: ButtonTypes.NUMBER,
        value: "9",
        backgroundColor: colors.darkgray,
        color: colors.white,
    },
    {
        name: <TimeIcon />,
        type: ButtonTypes.OPERATOR,
        value: "*",

        backgroundColor: colors.yellow,
        color: colors.white,
    },
    {
        name: "4",
        type: ButtonTypes.NUMBER,
        value: "4",

        backgroundColor: colors.darkgray,
        color: colors.white,
    },
    {
        name: "5",
        type: ButtonTypes.NUMBER,
        value: "5",
        backgroundColor: colors.darkgray,
        color: colors.white,
    },
    {
        name: "6",
        type: ButtonTypes.NUMBER,
        value: "6",

        backgroundColor: colors.darkgray,
        color: colors.white,
    },
    {
        name: <MinusIcon />,
        type: ButtonTypes.OPERATOR,
        value: "-",
        backgroundColor: colors.yellow,
        color: colors.white,
    },
    {
        name: "1",
        type: ButtonTypes.NUMBER,
        value: "1",

        backgroundColor: colors.darkgray,
        color: colors.white,
    },
    {
        name: "2",
        type: ButtonTypes.NUMBER,
        value: "2",

        backgroundColor: colors.darkgray,
        color: colors.white,
    },
    {
        name: "3",
        type: ButtonTypes.NUMBER,
        value: "3",

        backgroundColor: colors.darkgray,
        color: colors.white,
    },
    {
        name: <PlusIcon />,
        type: ButtonTypes.OPERATOR,
        value: "+",
        backgroundColor: colors.yellow,
        color: colors.white,
    },
    {
        name: "0",
        type: ButtonTypes.NUMBER,
        value: "0",

        backgroundColor: colors.darkgray,
        color: colors.white,
    },
    {
        name: ",",
        type: ButtonTypes.DOT,
        value: ".",
        backgroundColor: colors.darkgray,
        color: colors.white,
    },
    {
        name: <EqualIcon />,
        type: ButtonTypes.EQUAL,
        value: "=",
        backgroundColor: colors.yellow,
        color: colors.white,
    },
];
