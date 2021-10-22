import { StyleSheet } from "react-native";
import {white} from "../../config/colors";
import {DEFAULT_PADDING} from "../../config/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
    },
    itemListWrapper: {
        flex: 1,
        backgroundColor: white,
        marginHorizontal: DEFAULT_PADDING*0.5,
    },
    fabStyle:{
        paddingBottom: DEFAULT_PADDING,
        paddingRight: DEFAULT_PADDING
    },

})
