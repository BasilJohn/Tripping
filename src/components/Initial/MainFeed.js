import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Footer, Button } from '../common';

export default class SignUp extends React.Component {

    static navigationOptions = {
        title: 'Main Feed',
        headerTintColor: 'black',
        headerTitleStyle: { color: 'black' }
    };

    render(props) {

        return (
            <View style={styles.containerStyle}>
                <Text>Main</Text>
                <View>
                    <Footer />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',

    }

});
