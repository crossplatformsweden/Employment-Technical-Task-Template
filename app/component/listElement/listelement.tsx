import React, {FC, memo} from "react";
import {GestureResponderEvent, Text, View,} from "react-native";
import {Button, ListItem} from "react-native-elements";
import {styles} from "./styles";
import {white} from "../../config/colors";

interface Props {
    name: string
    price: string
    type: string
    editButtonPress: (event: GestureResponderEvent) => void
    deleteButtonPress: (event: GestureResponderEvent) => void
}

const ListElement: FC<Props> = ({name, price, type, editButtonPress, deleteButtonPress}) => {

    return (

        <ListItem.Swipeable
            leftContent={
            <Button
                title="Edit"
                icon={{ name: 'info', color: 'white' }}
                buttonStyle={styles.swipeButton}
                onPress={editButtonPress}
            />}
            rightContent={
                <Button
                    title="Delete"
                    icon={{ name: 'delete', color: 'white' }}
                    buttonStyle={styles.swipeButtonRight}
                    onPress={deleteButtonPress}
                />}
        >
            <View style={styles.cardItemWrapper}>
                <Text style={styles.text}>Name : {name}</Text>
                <Text style={styles.text}>Price : {price}</Text>
                <Text style={styles.text}>Type : {type}</Text>
                <Text style={styles.subText}>Swipe to EDIT or DELETE</Text>
            </View>
        </ListItem.Swipeable>

    )
}

export default memo(ListElement);
