import React from "react";
import { Box } from "ink";
import TodoList from "./TodoList.js";

export default function MainPanel({ tasks, selectedIndex }) {
    return (
        <Box
            borderStyle="single"
            flexGrow={1}
            paddingX={1}
            flexDirection="column"
        >
            <TodoList
                tasks={tasks}
                selectedIndex={selectedIndex}
            />
        </Box>
    );
}