import React from "react";
import { Box, Text } from "ink";


export default function Footer() {
    return (
        <Box marginTop={1}>
            <Text>
                [A] Add   [D] Delete   [Space] Toggle   [↑↓] Move   [Q] Quit
            </Text>
        </Box>
    );
}