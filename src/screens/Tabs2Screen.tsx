import React, { useEffect } from 'react'
import { View, Text } from 'react-native';

export const Tabs2Screen = () => {

    useEffect(() => {
        console.log("tabs2screen effect");
    }, []);


    return (
        <View>
            <Text>Tabs2 screen</Text>
        </View>
    )
}
