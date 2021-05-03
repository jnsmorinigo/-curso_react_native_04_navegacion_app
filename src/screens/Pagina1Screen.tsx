import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text>Pagina 1</Text>

            <Button
                title="Ir a p&aacute;gina 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
        </View>
    )
}
