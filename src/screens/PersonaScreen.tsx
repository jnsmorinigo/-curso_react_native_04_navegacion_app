import { NavigatorScreenParams } from '@react-navigation/core';
import React, { useContext, useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { };

// interface RouterParams {
//     id: number;
//     nombre: string
// }

export const PersonaScreen = ({ navigation, route }: Props) => {
    const params = route.params; // as RouterParams;
    const { changeUserName } = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    useEffect(() => {
        changeUserName(params.nombre)
    }, []);
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
