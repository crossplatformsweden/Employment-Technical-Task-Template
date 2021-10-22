import {gray} from "../../config/colors";
import {DEFAULT_PADDING} from "../../config/constants";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    textInput: {
        fontSize: 14,
        borderColor: gray,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: DEFAULT_PADDING,
        paddingVertical: DEFAULT_PADDING * 0.7,
        marginBottom: DEFAULT_PADDING,
    },
})
