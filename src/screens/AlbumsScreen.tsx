import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/AppTheme';

export const AlbumsScreen = () => {

    const { logout, authState } = useContext(AuthContext);
    const { isLoggedIn } = authState;

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>AlbumsScreen</Text>

            {

                isLoggedIn && <Button title="Logout" onPress={logout} ></Button>
            }
        </View>
    )
}
