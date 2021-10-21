import React, {FC, useContext, useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from "./styles";
import LayoutHeader from "../../component/header/headerComponent";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootNavigationType} from "../../navigation/RootNavigation";
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-elements';

interface Props {
    navigation: NativeStackNavigationProp<RootNavigationType>
}
type ItemType = {
    label:string,
    value: string
}
const AddItemLayout: FC<Props> = ({navigation}) => {

    // let {storeNewData} = useContext(AppDataContext)

    const [types] = useState<Array<ItemType>>([
        {label: 'Peripheral', value: 'Peripheral'},
        {label: 'Integrated', value: 'Integrated'}
    ])

    const [productName, setProductName] = useState<string>('')
    const [productPrice, setProductPrice] = useState<number>(0)
    const [selectedType, setSelectedType] = useState<string>(types[0].label)
    const [open, setOpen] = useState<boolean>(false);

    const submitData = () => {
        // let newDataObject: dataObjectType = {
        //     name: productName, price: productPrice, type: selectedType
        // }
        // let itemArray: dataObjectType[] = []
        // itemArray.push(newDataObject)
        // storeNewData = itemArray
    }

    return (
        <View style={styles.container}>
            <LayoutHeader title={"Add Item"} isBackEnable={true} onPress={()=> navigation.pop()}/>
            <View style={styles.contentWrapper}>
                <TextInput
                    placeholder={'Name'}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder={'Name'}
                    keyboardType = 'numeric'
                    style={styles.textInput}
                />
                <DropDownPicker
                    open={open}
                    value={selectedType}
                    items={types}
                    setOpen={setOpen}
                    setValue={setSelectedType}
                />

                <Button buttonStyle={styles.button} title={'Submit'} onPress={() => submitData()}/>
                <Button buttonStyle={styles.button} title={'Submit'} onPress={()=> alert('Submit')}/>
            </View>
        </View>
    );
}

export default AddItemLayout
