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

    let [appData, setAppData] = useState<dataObjectType[]>([])

    useEffect(() => {

        getStoredItemData()
            .then((itemArray) => {
                    return setAppData(itemArray);
                }
            ).catch()
    }, [])

    /**
     * Store Data in context and Async Storate
     * @param dataSet
     */
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
