import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function AppCover(){
    return <View><Text>233</Text></View>
}

function Nav() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AppCover">{/* 更改了路由页面后，要reload才能使页面发生改变 */}
                <Stack.Screen name="AppCover" component={AppCover} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default Nav;