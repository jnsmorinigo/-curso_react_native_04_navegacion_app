import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/AppTheme';

export const Pagina2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola mundo',
            headerBackTitle: 'back'
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 2</Text>

            <Button
                title="Ir a p&aacute;gina 3"
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    )
}
