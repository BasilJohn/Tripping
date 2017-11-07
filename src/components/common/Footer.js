import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

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
                <Text style={styles.textStyle}>{'Intl'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 1,
        backgroundColor: '#2D4262',
        justifyContent: 'space-between'
    },
    buttonStyle: {
        width: 100,
        height: 50,
        paddingTop: 10
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center'
    }
});

export { Footer };
