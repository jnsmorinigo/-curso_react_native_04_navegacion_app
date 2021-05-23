import React, { useEffect } from 'react'
// import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/AppTheme';

// interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Menú"
                    onPress={() => navigation.toggleDrawer()}
                >

                </Button >
            )
        });
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 1</Text>

            <Button
                title="Ir a p&aacute;gina 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

            <Text style={{
                marginVertical: 20,
                fontSize: 20,
                marginLeft: 5
            }}
            >Navegar con propiedades</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                >
                    <Text
                        style={styles.botonGrandeTexto}
                    >Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Jonas'
                    })}
                >
                    <Text
                        style={styles.botonGrandeTexto}
                    >Jonas</Text>
                </TouchableOpacity>
            </View>
            {/* <Button
                title="ir Persona"
                onPress={() => navigation.navigate('PersonaScreen')}
            /> */}
        </View >
    )
}
