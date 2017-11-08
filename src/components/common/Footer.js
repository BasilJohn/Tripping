import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const Footer = (props) => {
    return (
        <View style={styles.containerStyle}>
            <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{'You'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.textStyle}>{'Near You'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
            <Image style={styles.footerImageStyle} source={require('./images/Globe_Atlantic.png')} />
            </TouchableOpacity>
           
        </View>
    );
};

const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 1,
        justifyContent: 'space-between',
        backgroundColor:'#2D4262'
    },
    buttonStyle: {
        width: 100,
        height: 50,
        paddingTop:3
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center'
    },
    footerImageStyle: {
        height: 20,
        flex: 1,
        width: 50,
        alignSelf:'center'

    }
});

export { Footer };
