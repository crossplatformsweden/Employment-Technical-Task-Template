import { StyleSheet } from "react-native";
import {gray, warmGreen, white} from "../../config/colors";
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
    textInput: {
        fontSize: 14,
        borderColor: gray,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: DEFAULT_PADDING,
        paddingVertical: DEFAULT_PADDING*0.7,
        marginBottom: DEFAULT_PADDING,
    },
    pickerStyle:{
        marginTop: DEFAULT_PADDING*-3
    },
    button:{
        backgroundColor: warmGreen,
        marginTop: DEFAULT_PADDING
    }
})
