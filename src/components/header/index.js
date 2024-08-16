import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export const getHeaderOptions = (title) => {
    const navigation = useNavigation(); // Hook para acessar o objeto navigation

    return {
        headerTransparent: true,
        headerTitleStyle: { color: '#6C0434', fontWeight: '200' },
        headerTitle: title,
        headerTitleAlign: 'center',
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => navigation.goBack()} // Usa o navigation do hook
                style={{ paddingHorizontal: 16 }}
            >
                <Icon name="caret-left" size={50} color="#6C0434" />
            </TouchableOpacity>
        ),
    };
};
