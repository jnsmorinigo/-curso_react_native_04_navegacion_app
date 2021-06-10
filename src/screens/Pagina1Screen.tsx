import React, { useEffect } from 'react'
// import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles, colores } from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        marginLeft: 10
                    }}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Icon
                        name="menu-outline"
                        color={colores.primary}
                        size={35}
                    />
                </TouchableOpacity>
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
                    <Icon
                        name="person-outline"
                        color={colores.primary}
                        size={35}
                    />
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
                    <Icon
                        name="person-outline"
                        size={35}
                    />
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
