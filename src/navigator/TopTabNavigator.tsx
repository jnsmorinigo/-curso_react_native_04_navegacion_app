import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatsScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    const { top: paddingTop } = useSafeAreaInsets();
    return (
        <Tab.Navigator
            style={{ paddingTop }}
            sceneContainerStyle={{ backgroundColor: 'white' }}
            tabBarOptions={{
                pressColor: colores.primary,
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: colores.primary
                },
                style: {
                    shadowColor: 'transparent',
                    elevation: 0,
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'ChatsScreen':
                            iconName = 'chatbox-outline'
                            break;

                        case 'ContactsScreen':
                            iconName = 'people-outline'
                            break;

                        case 'AlbumsScreen':
                            iconName = 'image-outline'
                            break;
                    }

                    return <Icon name={iconName} size={20} color={color} />
                }
            })}
        >
            <Tab.Screen name="ChatsScreen" component={ChatsScreen} />
            <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
            <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}
