import React, { useEffect } from 'react'
import { View, Text } from 'react-native';

export const Tabs3Screen = () => {

    useEffect(() => {
        console.log("tabs3screen effect");
    }, []);

    return (
        <View>
            <Text>Tabs3 screen</Text>
        </View>
    )
}
