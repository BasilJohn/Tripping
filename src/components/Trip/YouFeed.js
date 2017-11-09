import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class YouFeed extends React.Component {

    render(props) {
        return (
            <View style={styles.containerStyle}>
                <Text>{'You Feed'}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    }
});
