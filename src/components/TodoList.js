import React from "react";
import { Box } from "ink";
import TodoItem from "./TodoItem.js";

export default function TodoList({ tasks, selectedIndex }) {
    return (
        <Box flexDirection="column">
            {tasks.map((task, index) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    isSelected={index === selectedIndex}
                />
            ))}
        </Box>
    );
}