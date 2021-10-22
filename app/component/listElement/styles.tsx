import {StyleSheet} from "react-native";
import {lightGray, warmGreen} from "../../config/colors";
import {DEFAULT_PADDING, SCREEN_WIDTH} from "../../config/constants";

export const styles = StyleSheet.create({
    cardItemWrapper:{
        backgroundColor:lightGray,
        width:  SCREEN_WIDTH - DEFAULT_PADDING*2,
        padding: DEFAULT_PADDING,
        marginTop: DEFAULT_PADDING,
        marginHorizontal: DEFAULT_PADDING*0.5,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    itemButton:{
        backgroundColor: warmGreen
    },
    buttonWrapper:{
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
