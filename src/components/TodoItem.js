import React from "react";
import { Text } from "ink";

export default function TodoItem({ task, isSelected }) {
    return (
        <Text
            inverse={isSelected}
        >
            {task.completed ? "☑" : "☐"} {task.title}
        </Text>
    );
}