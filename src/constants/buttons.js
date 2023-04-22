import {
    PlusIcon,
    MinusIcon,
    PlusMinusIcon,
    PercentIcon,
    DivisionIcon,
    TimeIcon,
    EqualIcon,
} from "../components/Icons";

export const ButtonTypes = {
    MODIFIER: "modifier",
    OPERATOR: "operator",
    NUMBER: "number",
};

export default [
    {
        name: "AC",
        type: ButtonTypes.MODIFIER,
        value: "AC",
    },
    {
        name: <PlusMinusIcon />,
        type: ButtonTypes.MODIFIER,
        value: "+/-",
    },
    {
        name: <PercentIcon />,
        type: ButtonTypes.MODIFIER,
        value: "%",
    },
    {
        name: <DivisionIcon />,
        type: ButtonTypes.OPERATOR,
        value: "/",
    },
    {
        name: "7",
        type: ButtonTypes.NUMBER,
        value: "7",
    },
    {
        name: "8",
        type: ButtonTypes.NUMBER,
        value: "8",
    },
    {
        name: "9",
        type: ButtonTypes.NUMBER,
        value: "9",
    },
    {
        name: <TimeIcon />,
        type: ButtonTypes.OPERATOR,
        value: "*",
    },
    {
        name: "4",
        type: ButtonTypes.NUMBER,
        value: "4",
    },
    {
        name: "5",
        type: ButtonTypes.NUMBER,
        value: "5",
    },
    {
        name: "6",
        type: ButtonTypes.NUMBER,
        value: "6",
    },
    {
        name: <MinusIcon />,
        type: ButtonTypes.OPERATOR,
        value: "-",
    },
    {
        name: "1",
        type: ButtonTypes.NUMBER,
        value: "1",
    },
    {
        name: "2",
        type: ButtonTypes.NUMBER,
        value: "2",
    },
    {
        name: "3",
        type: ButtonTypes.NUMBER,
        value: "3",
    },
    {
        name: <PlusIcon />,
        type: ButtonTypes.OPERATOR,
        value: "+",
    },
    {
        name: "0",
        type: ButtonTypes.NUMBER,
        value: "0",
    },
    {
        name: ",",
        type: ButtonTypes.NUMBER,
        value: ".",
    },
    {
        name: <EqualIcon />,
        type: ButtonTypes.OPERATOR,
        value: "=",
    },
];
