import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/AppTheme';

export const Pagina2Screen = () => {

    const navigator = useNavigation();

    return (
        <View style={styles.globalMargin}>
            <Text>Pagina 2</Text>

            <Button
                title="Ir a p&aacute;gina 3"
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    )
}
