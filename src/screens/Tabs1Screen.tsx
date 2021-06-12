import React, { useEffect } from 'react'

import { Text, View } from 'react-native'
import { styles, colores } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tabs1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('Tab1Screen effect');
    }, [])

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top + 10
        }}
        >
            <Text style={styles.title}> Iconos </Text>

            <Text>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="arrow-undo-outline" />
                <TouchableIcon iconName="battery-half-outline" />
                <TouchableIcon iconName="cloudy-night-outline" />
                <TouchableIcon iconName="fitness-outline" />
                <TouchableIcon iconName="game-controller-outline" />
                <TouchableIcon iconName="play-skip-forward-outline" />
                <TouchableIcon iconName="shield-outline" />
                <TouchableIcon iconName="thumbs-up-outline" />
                <TouchableIcon iconName="logo-facebook" />
                <TouchableIcon iconName="logo-octocat" />
                <TouchableIcon iconName="logo-github" />
                <TouchableIcon iconName="logo-react" />
                <TouchableIcon iconName="logo-twitter" />
                <TouchableIcon iconName="logo-twitch" />
            </Text>

        </View>
    )
}