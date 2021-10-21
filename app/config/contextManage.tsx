import React, {createContext, FC, useEffect, useState} from "react";
import {dataObjectType} from "./dataObjectType";
import {getStoredItemData, storeItemData} from "../store/asyncStorage";

export type PropsType = {
    appData: dataObjectType[]
    storeNewData: Function
}

export let AppDataContext: React.Context<PropsType>;
AppDataContext = createContext<PropsType>({
    appData: [], storeNewData: function () {
    }
});

export const AppDataProvider: FC<dataObjectType[]> = ({children}) => {

    const [appData, setAppData] = useState<dataObjectType[]>([])

    useEffect(() => {
        let storedItems: dataObjectType[] = []

        getStoredItemData()
            .then((itemArray) => {
                    return setAppData(itemArray);
                }
            ).catch()
    }, [])

    const storeNewData = (dataSet: dataObjectType[]) => {
        setAppData(dataSet)
        storeItemData(dataSet).then((isSuccess) => {
                if(isSuccess){
                    alert('Successfully Updated')
                }else {
                    alert('Function Fail')
                }
            }
        )
    }

    return (
        <AppDataContext.Provider value={{appData, storeNewData}}>
            {children}
        </AppDataContext.Provider>
    )
}
