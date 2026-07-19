import React, { useState } from "react";
import { Box } from "ink";

import Header from "./components/Header.js";
import Divider from "./components/Divider.js";
import TodoList from "./components/TodoList.js";
import Footer from "./components/Footer.js";

import useKeyboard from "./hooks/useKeyboard.js";


export default function App() {

    const tasks = [
    { id: 1, title: "Learn Ink", completed: false },
    { id: 2, title: "Build Dobedo", completed: true },
    { id: 3, title: "Read Dune", completed: false }
];

    const [selectedIndex, setSelectedIndex] = useState(0);

    useKeyboard(selectedIndex, setSelectedIndex);

    return (
        <Box flexDirection="column">
            <Header selectedIndex={selectedIndex} />
            <Divider />
           <TodoList
    tasks={tasks}
    selectedIndex={selectedIndex}
/>
            <Divider />
            <Footer />
        </Box>
    );
}