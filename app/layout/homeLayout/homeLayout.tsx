import { StatusBar } from 'expo-status-bar';
import React, {FC} from 'react';
import { Text, View } from 'react-native';
import {FAB} from "react-native-elements";
import {styles} from "./styles";
import {warmGreen, white} from "../../config/colors";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootNavigationType} from "../../navigation/RootNavigation";
import LayoutHeader from "../../component/header/headerComponent";

interface Props {
    navigation: NativeStackNavigationProp<RootNavigationType>
}
const HomeLayout: FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
        <LayoutHeader title={"Home"}/>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <FAB
          color={warmGreen}
          style={styles.fabStyle}
          placement={'right'}
          icon={{ name: 'add', color: white }}
          onPress={()=> navigation.navigate('addItem')}
      />
    </View>
  );
}

export default HomeLayout
