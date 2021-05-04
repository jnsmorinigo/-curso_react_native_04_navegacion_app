import { NavigatorScreenParams } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { };

// interface RouterParams {
//     id: number;
//     nombre: string
// }

export const PersonaScreen = ({ navigation, route }: Props) => {
    const params = route.params; // as RouterParams;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
