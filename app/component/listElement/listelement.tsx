import React, {FC, memo} from "react";
import {GestureResponderEvent, Text, View} from "react-native";
import {Button} from "react-native-elements";
import {styles} from "./styles";

interface Props {
    name:string
    price:string
    type:string
    editButtonPress: (event: GestureResponderEvent) => void
    deleteButtonPress: (event: GestureResponderEvent) => void
}

const ListElement: FC<Props> = ({name,price,type,editButtonPress,deleteButtonPress}) => {

    return(
        <View style={styles.cardItemWrapper}>
            <Text>Name : {name}</Text>
            <Text>Price : {price}</Text>
            <Text>Type : {type}</Text>

            <View style={styles.buttonWrapper}>
                <Button buttonStyle={styles.itemButton} title={'Edit'}
                        onPress={editButtonPress}/>
                <Button buttonStyle={styles.itemButton} title={'Delete'} onPress={deleteButtonPress}/>
            </View>
        </View>
    )
}

export default memo(ListElement);
