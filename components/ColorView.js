import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    Dimensions,
    Clipboard
} from 'react-native';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            colorHolder: 'rgba(255,255,255,1.00)'
        };
    }

    changeColorFunction = () => {

        var colorCode = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.random().toFixed(2)) + ')';

        this.setState({colorHolder: colorCode});
        Clipboard.setString(colorCode);
        console.log("colorCode", colorCode);
        console.log("Clipboard",Clipboard.getString());
    }

    render() {

        return (
            <View style={[
                styles.mainContainer, {
                    backgroundColor: this.state.colorHolder
                }
            ]}>
                <TouchableOpacity onPress={this.changeColorFunction}>
                    <Image source={require('./paintroller.png')}/>
                </TouchableOpacity>
                <Text style={styles.colorHolderText}>
                    <Text>{this.state.colorHolder}</Text>
                </Text>
            </View>
        );
    }
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        backgroundColor: 'white'
    },
    colorHolderText: {
        fontSize: 20
    }
})
