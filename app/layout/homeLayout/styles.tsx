import { StyleSheet } from "react-native";
import {warmGreen, white} from "../../config/colors";
import {DEFAULT_PADDING} from "../../config/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
    },
    fabStyle:{
        paddingBottom: DEFAULT_PADDING,
        paddingRight: DEFAULT_PADDING
    }
})
