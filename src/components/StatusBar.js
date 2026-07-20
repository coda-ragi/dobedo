import React from "react";
import { Box, Text } from "ink";

export default function StatusBar() {
    return (
        <Box
            borderStyle="single"
            justifyContent="space-between"
            paddingX={1}
        >
            <Text>
                A Add   D Delete   Space Toggle
            </Text>

            <Text color="green">
                NORMAL
            </Text>
        </Box>
    );
}