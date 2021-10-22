import React, {FC} from "react";
import {Platform, Text, View} from "react-native";
import {styles} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
    title: string,
    onPress?: Function
    isBackEnable?: boolean
}

const LayoutHeader: FC<Props> = ({title, onPress, isBackEnable}) => {

    return (
        <View style={Platform.OS === 'ios'?styles.titleContainer:styles.titleContainerAndroid}>
            {isBackEnable ? (
                <Icon style={styles.iconStyle} name={'angle-left'} size={30} onPress={() => onPress? onPress() : null}/>
            ) : null}
            <Text style={styles.titleText}>{title}</Text>
        </View>
    );
};

export default LayoutHeader;
