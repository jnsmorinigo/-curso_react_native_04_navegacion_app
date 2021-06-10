import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';

import { Tabs1Screen } from '../screens/Tabs1Screen';

import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {

    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colores.primary
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'play-back-outline'
                            break;

                        case 'Tab2Screen':
                            iconName = 'pause-outline'
                            break;

                        case 'StackNavigator':
                            iconName = 'play-forward-outline'
                            break;
                    }

                    return <Icon name={iconName} size={20} color={color} />

                }
            })}
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tabs1Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator} />
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
}







const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            tabBarOptions={{
                activeTintColor: colores.primary,
                style: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                labelStyle: {
                    fontSize: 15
                }
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused, size }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'play-back-outline'
                            break;

                        case 'Tab2Screen':
                            iconName = 'pause-outline'
                            break;

                        case 'StackNavigator':
                            iconName = 'play-forward-outline'
                            break;
                    }
                    return <Icon name={iconName} size={20} color={color} />
                }
            })}
        >
            {/* <Tab.Screen name="Tabs1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }} >T1</Text> }} component={ Tabs1Screen } /> */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tabs1Screen} />
            <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator} />
            <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
}