import React from "react";
import { Text } from "ink";

export default function Header({ selectedIndex }) {
    return <Text bold>Dobedo | Selected: {selectedIndex}</Text>;
}