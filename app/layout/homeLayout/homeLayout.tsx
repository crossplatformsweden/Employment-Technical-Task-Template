import React, {FC, useContext, useEffect, useState} from 'react';
import {Alert, FlatList, View, Text} from 'react-native';
import {FAB} from "react-native-elements";
import {styles} from "./styles";
import {warmGreen, white} from "../../config/colors";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootNavigationType} from "../../navigation/RootNavigation";
import LayoutHeader from "../../component/header/headerComponent";
import {AppDataContext} from "../../config/contextManage";
import {dataObjectType} from "../../config/dataObjectType";
import ListElement from "../../component/listElement/listelement";

interface Props {
    navigation: NativeStackNavigationProp<RootNavigationType>
}

const HomeLayout: FC<Props> = ({navigation}) => {

    const {appData, storeNewData} = useContext(AppDataContext)
    const [homeData, setHomeData] = useState<dataObjectType[]>([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (homeData !== appData) {
                setHomeData([])
            }
        })
        return () => {
            unsubscribe
        }
    }, [navigation])

    useEffect(() => {
        if (appData || homeData.length === 0) {
            console.log('Data updated')
            setHomeData(appData)
        }
    }, [homeData, navigation, appData])

    /**
     * Item Delete Alert
     * @param item
     */
    const deleteItemAlert = (item: dataObjectType) => {
        Alert.alert('Delete Item', 'Are you sure you want to delete the item',
            [{text: "Cancel", style: "cancel",},
                {text: "Delete", onPress: () => deleteItem(item), style: "destructive",},],)
    }

    /**
     * Delete selected item
     * @param item
     */
    const deleteItem = (item: dataObjectType) => {
        let currentList: dataObjectType[] = appData
        currentList = currentList.filter(function (value) {
            return value !== item;
        });
        storeNewData(currentList)
    }

    /**
     * List Items
     * @param item
     * @constructor
     */
    const ListItem = (item: dataObjectType) => {
        return (
            <ListElement
                name={item.name}
                price={item.price.toString()}
                type={item.type}
                editButtonPress={() => navigation.navigate('addItem', {item: item})}
                deleteButtonPress={() => deleteItemAlert(item)}/>
        )
    }


    return (
        <View style={styles.container}>
            <LayoutHeader title={"Home"}/>
            <View style={styles.itemListWrapper}>
                <FlatList
                    data={homeData}
                    refreshing={true}
                    renderItem={(item) => ListItem(item.item)}
                    ListEmptyComponent={<Text style={styles.emptyText}>Please Press Below Button to add Items</Text>}
                    keyExtractor={(item: dataObjectType, index: number) => {
                        return index.toString()
                    }}/>
            </View>
            <FAB
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
