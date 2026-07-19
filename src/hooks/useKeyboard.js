import { useInput } from "ink";

export default function useKeyboard(selectedIndex, setSelectedIndex) {
    useInput((input, key) => {
        if (key.upArrow) {
            setSelectedIndex(selectedIndex - 1);
        }

        if (key.downArrow) {
            setSelectedIndex(selectedIndex + 1);
        }
    });
}