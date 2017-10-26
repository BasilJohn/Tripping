import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle} >{props.buttonText}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({

    buttonStyle: {

        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5

    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }

});


export default Button;