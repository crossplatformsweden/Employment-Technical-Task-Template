import { StyleSheet } from "react-native";
import {DEFAULT_PADDING} from "../../config/constants";
import {boarderGray, warmGreen} from "../../config/colors";

export const styles = StyleSheet.create({

    titleContainer: {
        paddingTop: DEFAULT_PADDING * 1.8,
        flexDirection:'row',
        width: "100%",
        height: "10%",
        backgroundColor: warmGreen,
        alignItems:'center',
        borderBottomColor: boarderGray,
        borderBottomWidth: 1,
    },
    iconStyle:{
        paddingLeft: DEFAULT_PADDING,
    },
    titleText: {
        paddingHorizontal: DEFAULT_PADDING,
        fontSize: 18,
        fontWeight: "bold",
    },

})
