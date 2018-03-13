import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import ColorView from './components/ColorView.js';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ColorView></ColorView>
                <ColorView></ColorView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})
