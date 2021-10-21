import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import DemoScreen from "../layout/demoScreen";
import HomeLayout from "../layout/homeLayout/homeLayout";
import AddItemLayout from "../layout/addItemLayout/addItemLayout";
import {dataObjectType} from "../config/dataObjectType";

export type RootNavigationType = {
    home: undefined,
    addItem: undefined
    // demo: undefined
}

export type NavigationPrams = {
    addItem: undefined,
    item : dataObjectType
}

const Stack = createStackNavigator<RootNavigationType>();

const RootNavigation = () => {
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
                    {/*<Stack.Screen name="demo" component={DemoScreen}/>*/}
                    <Stack.Screen name="home" component={HomeLayout}/>
                    <Stack.Screen name="addItem" component={AddItemLayout}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
};
export default RootNavigation;
