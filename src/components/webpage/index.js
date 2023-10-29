import React from 'react';
import { Dimensions, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { BackgroundComponent } from '../micros';

export const WebPage = ({ route }) => {

    return (
        <BackgroundComponent>
            <View style={{ flex: 1, marginTop: 50, paddingBottom: 50 }}>
                <WebView
                    source={{ uri: route.params.webUrl }}
                    style={{ height: Dimensions.get('window').height }}
                    scrollEnabled={false}
                />
            </View>
        </BackgroundComponent>
    );
}
