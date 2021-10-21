import React, {FC, useContext, useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from "./styles";
import LayoutHeader from "../../component/header/headerComponent";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {NavigationPrams, RootNavigationType} from "../../navigation/RootNavigation";
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-elements';
import {AppDataContext} from "../../config/contextManage";
import {dataObjectType} from "../../config/dataObjectType";
import {RouteProp} from "@react-navigation/native";

interface Props {
    navigation: NativeStackNavigationProp<RootNavigationType,'addItem'>
    route: RouteProp<NavigationPrams, 'addItem'>
}
type ItemType = {
    label:string,
    value: string
}
const AddItemLayout: FC<Props> = ({navigation, route}) => {

    const {appData, storeNewData} = useContext(AppDataContext)
    const {params:{item}} = route

    const [types] = useState<Array<ItemType>>([
        {label: 'Peripheral', value: 'Peripheral'},
        {label: 'Integrated', value: 'Integrated'}
    ])

    const [productName, setProductName] = useState<string>('')
    const [productPrice, setProductPrice] = useState<string>('')
    const [selectedType, setSelectedType] = useState<string>(types[0].label)
    const [open, setOpen] = useState<boolean>(false);

    useEffect(()=> {
        setProductName(item.name)
        setProductPrice(item.price)
        setSelectedType(item.type)
    },[])

    const submitData = () => {
        item.name? editData() : addData()
    }

    const editData = () => {
        let tempArray: dataObjectType[] = appData
        let currentList: number  = appData.findIndex(selectedItem => selectedItem.name === item.name)
        tempArray[currentList].name = productName
        tempArray[currentList].price = Number.parseFloat(productPrice)
        tempArray[currentList].type = selectedType
        storeNewData(tempArray)
    }

    const addData = () => {
        let newDataObject: dataObjectType = {
            name: productName, price: Number.parseFloat(productPrice), type: selectedType
        }
        let itemArray: dataObjectType[] | undefined = appData
        itemArray ? itemArray.push(newDataObject) : null
        storeNewData(itemArray)
    }

    return (
        <View style={styles.container}>
            <LayoutHeader title={"Add Item"} isBackEnable={true} onPress={()=> navigation.pop()}/>
            <View style={styles.contentWrapper}>
                <TextInput
                    placeholder={'Name'}
                    style={styles.textInput}
                    defaultValue={productName}
                    onChangeText={(val) => setProductName(val)}
                />
                <TextInput
                    defaultValue={productPrice}
                    placeholder={'Name'}
                    keyboardType = 'numeric'
                    onChangeText={(val) => setProductPrice(val)}
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
