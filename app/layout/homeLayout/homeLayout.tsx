import React, {FC, useContext, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Button, FAB} from "react-native-elements";
import {styles} from "./styles";
import {warmGreen, white} from "../../config/colors";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootNavigationType} from "../../navigation/RootNavigation";
import LayoutHeader from "../../component/header/headerComponent";
import {AppDataContext} from "../../config/contextManage";
import {dataObjectType} from "../../config/dataObjectType";

interface Props {
    navigation: NativeStackNavigationProp<RootNavigationType>
}

const HomeLayout: FC<Props> = ({navigation}) => {

    const {appData, storeNewData} = useContext(AppDataContext)

    const [homeData, setHomeData] = useState<dataObjectType[]>([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', ()=> {
            if(homeData !== appData){
                setHomeData([])
            }
        })
        return () => {
            unsubscribe
        }
    },[navigation])

    useEffect(()=>{
        if(appData || homeData.length === 0){
            console.log('Data updated')
            setHomeData(appData)
        }
    },[homeData,navigation,appData])

    const deleteItem = (item: dataObjectType) => {
        let currentList: dataObjectType[]  = appData
        currentList = currentList.filter(function(value){
            return value !== item;
        });
        storeNewData(currentList)
    }

    let ListElement = (item: dataObjectType) => {

        return(
            <View style={styles.cardItemWrapper}>
                <Text>Name : {item.name}</Text>
                <Text>Price : {item.price}</Text>
                <Text>Type : {item.type}</Text>

                <View style={styles.buttonWrapper}>
                    <Button buttonStyle={styles.itemButton} title={'Edit'}
                            onPress={() => navigation.navigate('addItem', {item: item})}/>
                    <Button buttonStyle={styles.itemButton} title={'Delete'} onPress={() => deleteItem(item)}/>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <LayoutHeader title={"Home"}/>
            <View style={styles.itemListWrapper}>
                <FlatList
                    data={homeData}
                    refreshing={true}
                    renderItem={(item) => ListElement(item.item)}
                    keyExtractor={(item:dataObjectType, index:number) => { return index.toString()}}/>
            </View>
            <FAB
                // addItem
                color={warmGreen}
                style={styles.fabStyle}
                placement={'right'}
                icon={{name: 'add', color: white}}
                onPress={() => navigation.navigate('addItem', {
                        item: {}
                    }
                )}
            />
        </View>
    );
}

export default HomeLayout
