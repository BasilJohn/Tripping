import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Footer = (props) => {
    return (
        <View style={styles.containerStyle}>
           <Text>Footer</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    containerStyle: {
     
        flex: 1,
        flexDirection:'column',
        justifyContent:'flex-end',
        height:40
    }

});

export { Footer };
