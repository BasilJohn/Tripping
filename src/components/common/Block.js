import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Block = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({

    containerStyle: {
        borderWidth: 0,
        borderRadius: 2,
        borderColor: '#9b9b9d',
        borderBottomWidth: 0,
        marginLeft: 2,
        marginRight: 2,
        flex: 1
    }

});

export { Block };
