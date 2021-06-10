import React, { useEffect } from 'react'

import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';
import { styles, colores } from '../theme/AppTheme';



export const Tabs1Screen = () => {

    useEffect(() => {
        console.log("tabs1screen effect");
    }, []);


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <Icon name="airplane-outline" size={80} color={colores.primary} />;
                <Icon name="arrow-undo-outline" size={80} color={colores.primary} />;
                <Icon name="battery-half-outline" size={80} color={colores.primary} />;
                <Icon name="cloudy-night-outline" size={80} color={colores.primary} />;
                <Icon name="fitness-outline" size={80} color={colores.primary} />;
                <Icon name="game-controller-outline" size={80} color={colores.primary} />;
                <Icon name="play-skip-forward-outline" size={80} color={colores.primary} />;
                <Icon name="shield-half-outline" size={80} color={colores.primary} />;
                <Icon name="thumbs-up-outline" size={80} color={colores.primary} />;
                <Icon name="logo-facebook" size={80} color={colores.primary} />;
                <Icon name="logo-octocat" size={80} color={colores.primary} />;
                <Icon name="logo-github" size={80} color={colores.primary} />;
                <Icon name="logo-react" size={80} color={colores.primary} />;
                <Icon name="logo-twitter" size={80} color={colores.primary} />;
                <Icon name="logo-twitch" size={80} color={colores.primary} />;
            </Text>

        </View>
    )
}
