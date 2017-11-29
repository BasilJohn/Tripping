import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { BlockDetail } from '../common';

export default class ListItem extends React.Component {


    render() {
        const { tripStartPlace, tripEndPlace } = this.props.trip
        return (
            <TouchableOpacity style={styles.touchStyle}>
                <View style={styles.tileStyle}>
                    <BlockDetail>
                        <Text style={styles.titleStyle}>
                            Your trip from {tripStartPlace} to {tripEndPlace}
                        </Text>
                    </BlockDetail>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 15
    },
    tileStyle: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchStyle: {
        paddingBottom: 2
    }
});