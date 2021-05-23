import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from "react-native";

import { StackNavigator } from './StackNavigator';
import { SettingsScreens } from '../screens/SettingsScreens';


const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerType={width >= 768 ? 'permanent' : 'front'}
        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreens" options={{ title: 'Settings' }} component={SettingsScreens} />
        </Drawer.Navigator>
    );
}