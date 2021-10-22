import React, {FC, memo} from "react";
import {KeyboardTypeOptions, TextInput} from "react-native";
import {styles} from "./styles";

interface TextInputPropsType {
    placeholder:string,
    defaultValue:string,
    onChangeText:(text: string) => void,
    keyboardType?: KeyboardTypeOptions
}
const PrimaryTextInput: FC<TextInputPropsType> = ({placeholder,defaultValue,onChangeText,keyboardType}) => {
    return(
        <TextInput
            placeholder={placeholder}
            style={styles.textInput}
            defaultValue={defaultValue}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
        />
    )
}

export default memo(PrimaryTextInput)
