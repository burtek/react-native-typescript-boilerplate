import React from 'react';
import { Text, View } from 'react-native';
import { appStyles } from './App.styles';

export default class App extends React.Component {
    render() {
        return (
            <View style={appStyles.container}>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        );
    }
}
