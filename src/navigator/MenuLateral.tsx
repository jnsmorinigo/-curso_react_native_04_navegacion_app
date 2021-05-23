import React from "react";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';

import { StackNavigator } from './StackNavigator';
import { SettingsScreens } from '../screens/SettingsScreens';
import { styles } from '../theme/AppTheme';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerType={width >= 768 ? 'permanent' : 'front'}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreens" component={SettingsScreens} />
        </Drawer.Navigator >
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01-300x250.png'
                    }}
                    style={styles.avatar}
                />
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('StackNavigator')}
                >
                    <Text style={styles.menuText}>Navegacion</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('SettingsScreens')}
                >
                    <Text style={styles.menuText}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}