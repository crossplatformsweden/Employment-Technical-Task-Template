import React, {FC, useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {styles} from "./styles";
import LayoutHeader from "../../component/header/headerComponent";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {NavigationPrams, RootNavigationType} from "../../navigation/RootNavigation";
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-elements';
import {AppDataContext} from "../../config/contextManage";
import {dataObjectType} from "../../config/dataObjectType";
import {RouteProp} from "@react-navigation/native";
import {
    CLEAR_BUTTON,
    NAME_PLACEHOLDER,
    NAME_VALIDATION_ERROR,
    PRICE_PLACEHOLDER,
    PRICE_VALIDATION_ERROR,
    PRODUCT_ALREADY_AVAILABLE,
    PRODUCT_TYPE_PRICE_COMBINATION,
    SUBMIT_BUTTON,
    TYPE_VALIDATION_ERROR
} from "../../config/StringData";
import {validationPrice, validationTextOnlyInput} from "../../config/validation";
import PrimaryTextInput from "../../component/input/primaryTextInput";

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
    const [selectedType, setSelectedType] = useState<string>('')
    const [open, setOpen] = useState<boolean>(false);

    useEffect(()=> {
        if(item.name){
            setProductName(item.name)
            setProductPrice(item.price.toString())
            setSelectedType(item.type)
        }
    },[])

    /**
     * Integrated Product Value should be in between 1000 and 2600
     * @param productPrice
     * @param selectedType
     */
    const isAmountValid = (productPrice: string, selectedType: string) => {
        let amountVal = Number.parseFloat(productPrice)
        return selectedType === 'Integrated' && amountVal > 1000 && amountVal < 2600;
    }

    /**
     * Field Validation
     * @param productName
     * @param productPrice
     * @param selectedType
     */
    const isSuccessFieldValidation = (productName: string, productPrice: string, selectedType: string) => {

        let errorMessage: String = ''
        if(productName === '' || !validationTextOnlyInput(productName)){
            errorMessage = NAME_VALIDATION_ERROR
        }else if(productPrice === '' || !validationPrice(productPrice)){
            errorMessage = PRICE_VALIDATION_ERROR
        }else if(selectedType === ''){
            errorMessage = TYPE_VALIDATION_ERROR
        }else if(!isAmountValid(productPrice, selectedType)){
            errorMessage = PRODUCT_TYPE_PRICE_COMBINATION
        }

        return errorMessage
    }

    /**
     * Submit Data
     */
    const submitData = () => {
        let validation = isSuccessFieldValidation(productName, productPrice, selectedType)
        if(validation === ''){
            item.name? editData() : addData()
        }else {
            alert(validation)
        }
    }

    /**
     * Edit data
     */
    const editData = () => {
        let tempArray: dataObjectType[] = appData
        let currentList: number  = appData.findIndex(selectedItem => selectedItem.name === item.name)
        tempArray[currentList].name = productName
        tempArray[currentList].price = Number.parseFloat(productPrice)
        tempArray[currentList].type = selectedType
        storeNewData(tempArray)
    }

    /**
     * Check product name already available in the List
     * @param productName
     */
    const checkProductAvailability = (productName: string) => {

        return appData.find((item) => item.name === productName)

    }

    /**
     * Add new products
     */
    const addData = () => {
        if(!checkProductAvailability(productName)){
            let newDataObject: dataObjectType = {
                name: productName, price: Number.parseFloat(productPrice), type: selectedType
            }
            let itemArray: dataObjectType[] | undefined = appData
            itemArray ? itemArray.push(newDataObject) : null
            storeNewData(itemArray)
        }else {
            alert(PRODUCT_ALREADY_AVAILABLE)
        }

    }

    return (
        <View style={styles.container}>
            <LayoutHeader title={"Add Item"} isBackEnable={true} onPress={()=> navigation.pop()}/>
            <View style={styles.contentWrapper}>
                <PrimaryTextInput
                    placeholder={NAME_PLACEHOLDER}
                    defaultValue={productName}
                    onChangeText={(val:string) => setProductName(val)}/>
                <PrimaryTextInput
                    defaultValue={productPrice}
                    placeholder={PRICE_PLACEHOLDER}
                    keyboardType = 'numeric'
                    onChangeText={(val:string) => setProductPrice(val)}
                />
                <DropDownPicker
                    open={open}
                    value={selectedType}
                    items={types}
                    setOpen={setOpen}
                    setValue={setSelectedType}
                />

                <Button buttonStyle={styles.button} title={SUBMIT_BUTTON} onPress={() => submitData()}/>
                <Button buttonStyle={styles.button} title={CLEAR_BUTTON} onPress={()=> navigation.pop()}/>
            </View>
        </View>
    );
}

export default AddItemLayout
