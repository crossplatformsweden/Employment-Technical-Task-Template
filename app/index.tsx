import React, {Component} from 'react';
import {AppRegistry, StatusBar, View} from "react-native";
import 'react-native-gesture-handler'
import {warmGreen} from './config/colors';
import RootNavigation from './navigation/RootNavigation';
import HomeLayout from "./layout/homeLayout/homeLayout";

// const Navigation = () => {
//     return(
//         <AppDataProvider>
//             <RootNavigation/>
//         </AppDataProvider>
//     )
// }

export default class CrossPlatform extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="light-content" backgroundColor={warmGreen}/>
                {/*<Navigation/>*/}
                <RootNavigation/>
            </View>
        );
    }

}

AppRegistry.registerComponent('CrossplatformTest', () => CrossPlatform);
