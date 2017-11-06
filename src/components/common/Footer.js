import React from 'react';
import { Button } from './Button';
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
                <Text style={styles.textStyle}>{'Around'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonStyle: {
        width: 110,
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: '#9b9b9d',
        borderWidth: 1,
        borderColor: '#000'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10
    }
});

export { Footer };
