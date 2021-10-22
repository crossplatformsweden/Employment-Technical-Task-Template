import {dataObjectType} from "../config/dataObjectType";
import {STORE_DATA_ASYNC} from "../config/constants";
import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * Store Data in AsyncStorage
 * @param object
 */
export const storeItemData = async (object: dataObjectType[]) => {
    let isSuccess
    if (object) {
        let stringifyData = JSON.stringify(object)
        try {
            await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove)
            await AsyncStorage.setItem(STORE_DATA_ASYNC, stringifyData)
            isSuccess = true
        } catch (e) {
            console.log(e)
            isSuccess = false
        }
    } else {
        isSuccess = false
    }
    return isSuccess
}

/**
 * Get Items from Async Storage
 */
export const getStoredItemData = async () => {

    let storedItems: Array<dataObjectType> = []
    await AsyncStorage
        .getItem(STORE_DATA_ASYNC)
        .then((stringStoredItems) => {
                if (stringStoredItems) {
                    storedItems = JSON.parse(stringStoredItems)
                }
            }
        ).catch((e) => {
            console.debug(e)
        })
    return storedItems
}
