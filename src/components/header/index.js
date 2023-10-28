import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import arrow from "../../assets/icons/bxs-left-arrow.png"


export const getHeaderOptions = (title, navigation) => {
    return {
        headerTransparent: true,
        headerTitleStyle: { color: '#6C0434', fontWeight: '200' },
        headerTitle: title,
        headerTitleAlign: 'center',
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ paddingHorizontal: 16 }}
            >
                <Image source={arrow} style={{  }} />
            </TouchableOpacity>
        ),
    };
};
