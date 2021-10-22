import { StyleSheet } from "react-native";
import {warmGreen, white} from "../../config/colors";
import {DEFAULT_PADDING} from "../../config/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
    },
    contentWrapper:{
        flex:1,
        margin: DEFAULT_PADDING
    },
    pickerStyle:{
        marginTop: DEFAULT_PADDING*-3
    },
    button:{
        backgroundColor: warmGreen,
        marginTop: DEFAULT_PADDING
    }
})
