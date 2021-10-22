import {StyleSheet} from "react-native";
import {lightGray, red, warmGreen} from "../../config/colors";
import {DEFAULT_PADDING, SCREEN_WIDTH} from "../../config/constants";

export const styles = StyleSheet.create({
    cardItemWrapper: {
        backgroundColor: lightGray,
        height: SCREEN_WIDTH*0.35,
        width: SCREEN_WIDTH - DEFAULT_PADDING * 2,
        padding: DEFAULT_PADDING,
        // marginTop: DEFAULT_PADDING,
        marginLeft: DEFAULT_PADDING*-0.2,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent:'space-between'
    },
    itemButton: {
        backgroundColor: warmGreen
    },
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    swipeButton:{
        marginVertical: DEFAULT_PADDING,
        borderRadius: 12,
        height:'75%'
    },
    swipeButtonRight:{
        marginVertical: DEFAULT_PADDING,
        borderRadius: 12,
        height:'75%',
        backgroundColor:red
    },
    text:{
        fontSize:18,
        fontWeight:'bold'
    },
    subText:{
        fontSize:15,
        textAlign:'center'
    }
})
