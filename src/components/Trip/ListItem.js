import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { CardSection } from '../common';

export default class ListItem extends React.Component {


    render() {
        const { tripStartPlace,tripEndPlace } = this.props.trip
        return (
            <View>
            <Text style={styles.titleStyle}>{tripStartPlace}</Text>
            <Text style={styles.titleStyle}>{tripEndPlace}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});