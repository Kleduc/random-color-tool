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
import moment from 'moment';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            ColorHolder: 'rgba(255,255,255,1.00)'
        };
    }

    ChangeColorFunction = () => {

        var ColorCode = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.random().toFixed(2)) + ')';

        this.setState({ColorHolder: ColorCode});
        Clipboard.setString(ColorCode);
        console.log("ColorCode", ColorCode);
        console.log("Clipboard",Clipboard.getString());
    }

    render() {

        const date = new Date();
        const formattedDate = moment(date).format('MMMM Do YYYY, h:mm');

        return (
            <View style={[
                styles.mainContainer, {
                    backgroundColor: this.state.ColorHolder
                }
            ]}>
                <TouchableOpacity title="Change View Background Color" onPress={this.ChangeColorFunction}>
                    <Image style={[styles.socialIcons]} source={require('./paintroller.png')}/>
                </TouchableOpacity>
                <Text style={styles.colorHolderText}>
                    <Text>{this.state.ColorHolder}</Text>
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
