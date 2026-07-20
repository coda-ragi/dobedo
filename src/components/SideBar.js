import React from "react";
import { Box, Text } from "ink";

export default function Sidebar() {
    return (
        <Box
            flexDirection="column"
            borderStyle="single"
            width={20}
            paddingX={1}
        >
            <Text bold color="cyan">
                MENU
            </Text>

            <Text>🏠 Dashboard</Text>
            <Text>📝 Tasks</Text>
            <Text>📅 Calendar</Text>
            <Text>📖 Notes</Text>
            <Text>⚙ Settings</Text>
        </Box>
    );
}